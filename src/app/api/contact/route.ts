import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

/**
 * Enquiries are DELIVERED by email and RECORDED in the database, in that order
 * of importance.
 *
 * This route used to do only the second thing, so an enquiry existed solely as
 * a row nobody was watching, and a failing insert lost it outright. That is
 * what was happening: the endpoint returned 500 on every submission while the
 * site told visitors their message could not be sent.
 *
 * So the two are now independent. A database that is down, paused or
 * misconfigured must not cost anybody a lead, and neither must a mail provider.
 * The request only fails when BOTH fail, because at that point nothing anywhere
 * has a copy.
 */

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO ?? "hello@acerva.com.au";
const FROM = process.env.CONTACT_FROM ?? "Acerva website <hello@acerva.com.au>";

type Enquiry = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

/** Built per request, not at module scope: a missing key should fail one
 *  submission, not crash the route before it can read the body. */
function supabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SECRET_KEY;
  return url && key ? createClient(url, key) : null;
}

async function record(enquiry: Enquiry): Promise<string | null> {
  const client = supabase();
  if (!client) return "Supabase is not configured";
  const { error } = await client.from("contact_form_submissions").insert([
    {
      first_name: enquiry.firstName,
      last_name: enquiry.lastName,
      email: enquiry.email,
      phone: enquiry.phone || null,
      company: enquiry.company || null,
      message: enquiry.message,
      created_at: new Date().toISOString(),
    },
  ]);
  return error ? error.message : null;
}

async function notify(enquiry: Enquiry): Promise<string | null> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return "RESEND_API_KEY is not set";

  const name = `${enquiry.firstName} ${enquiry.lastName}`.trim();
  const lines = [
    `From:    ${name} <${enquiry.email}>`,
    enquiry.company ? `Company: ${enquiry.company}` : null,
    enquiry.phone ? `Phone:   ${enquiry.phone}` : null,
    "",
    enquiry.message,
  ].filter(Boolean) as string[];

  try {
    const { error } = await new Resend(key).emails.send({
      from: FROM,
      to: TO,
      // Replying goes to the person who wrote in, not to ourselves.
      replyTo: enquiry.email,
      subject: `Website enquiry from ${name}${enquiry.company ? ` (${enquiry.company})` : ""}`,
      text: lines.join("\n"),
    });
    return error ? JSON.stringify(error) : null;
  } catch (error) {
    return error instanceof Error ? error.message : "send threw";
  }
}

export async function POST(req: Request) {
  let body: Partial<Enquiry>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Malformed request" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, company, message } = body;
  if (!firstName || !lastName || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const enquiry: Enquiry = { firstName, lastName, email, phone, company, message };

  // Both attempted regardless of the other's outcome.
  const [recordError, notifyError] = await Promise.all([record(enquiry), notify(enquiry)]);

  if (recordError) console.error("[contact] not recorded:", recordError);
  if (notifyError) console.error("[contact] not emailed:", notifyError);

  if (recordError && notifyError) {
    console.error(`[contact] LOST an enquiry from ${email}: ${message.slice(0, 200)}`);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }

  return Response.json({ success: true });
}
