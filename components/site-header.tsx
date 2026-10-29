import Link from "next/link";
import { AppBadge } from "@/components/app-badge";

export function Wordmark() {
  return <Link href="/" className="wordmark" aria-label="BeanHear by WXH Labs home">
    <span className="brand-mark" aria-hidden="true"><svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M20 5C9-1 0 13 8 23c5 7 16 3 18-5 1-5-1-10-6-13Z" fill="#FBF7F2"/><path d="M19 6c-7 4-9 9-6 18" stroke="#E07A5F" strokeWidth="2.4" strokeLinecap="round"/><path d="M25 4c3 2 4 5 4 8" stroke="#FBF7F2" strokeWidth="2" strokeLinecap="round"/></svg></span>
    <span>BeanHear<span className="brand-period">.</span><small>BY WXH LABS</small></span>
  </Link>;
}

export function SiteHeader() {
  return <>
    <div className="announcement"><span>A LITTLE STORY. A FAMILIAR VOICE.</span><span className="announcement-divider" aria-hidden="true">✦</span><span>Made for your little listener.</span></div>
    <header className="site-header container"><Wordmark /><nav aria-label="Main navigation"><Link className="nav-link" href="/#how-it-works">How it works</Link><Link className="nav-link" href="/#pricing">Pricing</Link><Link className="nav-link" href="/#faq">FAQ</Link><AppBadge compact /></nav></header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer container">
    <div className="footer-top"><Wordmark /><p>Little stories. A voice they know.</p><a href="mailto:support@wxhlabs.com">support@wxhlabs.com <span aria-hidden="true">↗</span></a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} WXH Labs</span><nav aria-label="Footer navigation"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><a href="/llms.txt">Product facts</a></nav><span>Made for caregivers. Built with care.</span></div>
  </footer>;
}
