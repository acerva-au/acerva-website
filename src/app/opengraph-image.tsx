import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * What a shared link looks like in Slack, LinkedIn and iMessage. Without this
 * the site unfurls as a bare URL, which reads as unfinished.
 */
export const alt = "Acerva — AI enablement and Salesforce consulting, Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Inlined as a data URI: ImageResponse renders on the server and cannot
  // fetch a relative asset the way a browser would.
  const logo = await readFile(join(process.cwd(), "public/brand/logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#1b3a2b",
          color: "#f1f5f3",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={200} height={108} />

        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 56, lineHeight: 1.18 }}>
          <span>Putting&nbsp;</span>
          <span style={{ color: "#d97706" }}>AI to work&nbsp;</span>
          <span>in your business,&nbsp;</span>
          <span>so you can do what you&rsquo;re&nbsp;</span>
          <span style={{ color: "#d97706" }}>good&nbsp;</span>
          <span>at.</span>
        </div>

        <div style={{ fontSize: 26, color: "#c4ccc8" }}>
          Systems · Tools · Content · Results — Melbourne
        </div>
      </div>
    ),
    size,
  );
}
