import { ImageResponse } from "next/og";

export const alt = "BeanHear — Your voice. Their favorite stories.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#FBF7F2", padding: "72px 86px", color: "#29483e", display: "flex", flexDirection: "column", justifyContent: "space-between" }}><div style={{ display: "flex", fontSize: 30 }}>BeanHear. · BY WXH LABS</div><div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 90, lineHeight: 1.05 }}><span>Your voice.</span><span>Their favorite <span style={{ color: "#b95a43", fontStyle: "italic" }}>stories.</span></span></div><div style={{ display: "flex", fontSize: 24 }}>Little stories. A voice they know. · beanhear.com</div></div>, size);
}
