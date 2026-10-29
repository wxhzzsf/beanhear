import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beanhear.com"),
  title: { default: "BeanHear — Your voice. Their favorite stories.", template: "%s | BeanHear" },
  description: "Turn a short recording of your voice into hands-free storytime. BeanHear is an iOS story-reading app for caregivers and little listeners ages 0–5.",
  openGraph: { type: "website", locale: "en_US", siteName: "BeanHear", title: "BeanHear — Your voice. Their favorite stories.", description: "Parent-voice storytime for little listeners. An iOS app by WXH Labs.", url: "https://beanhear.com", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BeanHear — Your voice. Their favorite stories." }] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><Analytics /></body></html>;
}
