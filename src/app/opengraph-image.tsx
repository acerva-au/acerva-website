import { ImageResponse } from "next/og";

/**
 * What a shared link looks like in Slack, LinkedIn and iMessage. Without this
 * the site unfurls as a bare URL, which reads as unfinished.
 */
export const alt = "Acerva — AI enablement and development, Melbourne";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#1b3a2b",
          color: "#f1f5f3",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#d97706",
            marginBottom: 40,
          }}
        >
          Acerva
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 76, lineHeight: 1.15 }}>
          <span>Putting&nbsp;</span>
          <span style={{ color: "#d97706" }}>AI to work&nbsp;</span>
          <span>in your business,&nbsp;</span>
          <span>so you can do what you&rsquo;re&nbsp;</span>
          <span style={{ color: "#d97706" }}>good&nbsp;</span>
          <span>at.</span>
        </div>
        <div style={{ fontSize: 30, color: "#c4ccc8", marginTop: 48 }}>
          AI enablement · Development · Integrations · CRM — Melbourne
        </div>
      </div>
    ),
    size,
  );
}
