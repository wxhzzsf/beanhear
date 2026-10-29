import type { Metadata } from "next";
import Link from "next/link";
import { AppBadge } from "@/components/app-badge";
import { StoryIllustration } from "@/components/story-illustration";
import { getAppStoreUrl } from "@/lib/config";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const faqs = [
  ["What is BeanHear?", "BeanHear is an iOS story-reading app that uses a cloned parent or caregiver voice to narrate stories for little listeners, approximately ages 0–5. It’s made for those moments when you’re nearby, but your hands are full."],
  ["How do I create my voice?", "In the iOS app, sign in and record approximately 20 seconds of your voice. That sample is used to create a synthetic reading voice. Use only your own adult voice or an adult voice you have permission to use."],
  ["Which stories will I find?", "BeanHear focuses on public-domain classics. The available collection and the points required to unlock each story are shown in the iOS app. We don’t promise a particular library size or title on this page."],
  ["Can we listen on a speaker?", "The intended experience is hands-free listening on your iPhone or a speaker connected to it. An adult stays in charge of playback, volume, and the little listener. BeanHear doesn’t replace caregiver supervision."],
  ["What does it cost?", "Free includes 7 points to get started; points aren’t the same as a number of stories. Premium is US$7.99 per month or US$59.99 per year, purchased in the iOS app through Apple. Your local price, renewal terms, and included benefits appear before purchase."],
  ["Where can I get the app?", "This is BeanHear’s launch landing page. The App Store badge is a placeholder until our App Store or TestFlight link is ready. There’s no account to create or payment to make on this website. Contact support@wxhlabs.com for availability questions."],
];

export default function Home() {
  const appUrl = getAppStoreUrl();
  return <>
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow"><span className="tiny-spark" aria-hidden="true">✦</span> FOR SMALL EARS & FULL HANDS</p>
        <h1 id="hero-heading">Your voice.<br />Their favorite<br /><em>stories.</em></h1>
        <p className="hero-lead">A familiar voice, even when<br className="desktop-break" /> your hands are full.</p>
        <p className="hero-description">Turn a short recording of your voice into storytime. Let BeanHear read public-domain classics aloud on your iPhone or connected speaker.</p>
        <div className="hero-actions"><AppBadge /><a className="text-link" href="#how-it-works">Meet your storytime helper <span aria-hidden="true">↓</span></a></div>
        <p className="hero-fine">{appUrl ? "For iOS · Free includes 7 points" : "iOS app · App Store link coming soon · Free includes 7 points"}</p>
      </div>
      <div className="hero-visual">
        <div className="visual-top"><span>THE LITTLE LISTENING CLUB</span><span aria-hidden="true">VOL. 01</span></div>
        <div className="storybook-scene"><StoryIllustration /><div className="voice-note"><span className="waveform" aria-hidden="true">{[9, 17, 25, 15, 30, 21, 12, 23, 15].map((height, i) => <i key={i} style={{ height }} />)}</span><span><strong>A voice they know.</strong><small>A little wonder to listen to.</small></span><span className="note-spark" aria-hidden="true">✧</span></div></div>
        <p className="visual-caption"><span aria-hidden="true">↳</span> Familiar voices. Faraway adventures.<span className="illustration-label">An illustrated moment</span></p>
      </div>
    </section>

    <div className="spec-strip"><div className="container"><p>MADE FOR THE<br /><strong>LITTLE EVERYDAY MOMENTS</strong></p><span><span aria-hidden="true">☾</span> Wind-down time</span><span><span aria-hidden="true">✿</span> Hands-full afternoons</span><span><span aria-hidden="true">⌁</span> One more story</span><span className="age-note">Little listeners, <strong>ages 0–5</strong></span></div></div>

    <section className="section container everyday-section" aria-labelledby="everyday-heading"><div><p className="eyebrow">STORYTIME, WITH A LITTLE HELP</p><h2 id="everyday-heading">They know your voice.<br /><em>Let it tell a story.</em></h2></div><div className="everyday-copy"><p>Some days, you have a baby on your hip, a basket of laundry, and a request for just one more story.</p><p>BeanHear brings the sound of a parent or caregiver to classic tales. You choose the story. Your little one listens. Your hands get a moment back.</p><span className="caregiver-note"><span aria-hidden="true">♡</span> A helper for caregivers. A little company for storytime.</span></div></section>

    <section id="how-it-works" className="process-section section" aria-labelledby="process-heading"><div className="container"><div className="section-heading"><div><p className="eyebrow">A SMALL START. A WHOLE WORLD OF STORIES.</p><h2 id="process-heading">Your voice, <em>their next adventure.</em></h2></div><p>Three little steps.<br />All inside the iOS app.</p></div><ol className="process-grid"><li><div className="step-number">01 <span aria-hidden="true">↗</span></div><h3>Sign in.</h3><p>Open BeanHear on your iPhone and sign in as a parent or caregiver.</p></li><li><div className="step-number">02 <span aria-hidden="true">⌁</span></div><h3>A little of your voice.</h3><p>Record about 20 seconds to create your reading voice. Your own voice, or one you have permission to use.</p></li><li><div className="step-number">03 <span aria-hidden="true">✦</span></div><h3>Unlock a story. Settle in.</h3><p>Choose a public-domain classic and unlock it with points. Listen on your phone or connected speaker.</p></li></ol><div className="process-note"><span aria-hidden="true">♡</span><p>For grown-ups to set up, and little ones to enjoy. Keep a caregiver nearby and choose a comfortable listening volume.</p><span className="story-seal" aria-hidden="true">a little<br />wonder</span></div></div></section>

    <section id="pricing" className="section container pricing-section" aria-labelledby="pricing-heading"><div className="pricing-copy"><p className="eyebrow">START WITH A LITTLE STORY</p><h2 id="pricing-heading">A little free.<br /><em>More with Premium.</em></h2><p className="section-description">Free includes <strong>7 points</strong> to get started. When you’re ready for more, Premium is available through the iOS app.</p><div className="pricing-aside"><span aria-hidden="true">↳</span><p>Points unlock stories in the app.<br />7 points doesn’t mean 7 stories.</p></div></div><article className="price-card"><div className="price-card-top"><span>BEANHEAR PREMIUM</span><span className="price-tag">APPLE IN-APP PURCHASE</span></div><div className="price">$7.99<span> / month</span></div><p className="annual-price">or <strong>$59.99 / year</strong></p><div className="price-details"><p><span aria-hidden="true">✓</span> Parent-voice story reading on iOS</p><p><span aria-hidden="true">✓</span> Public-domain classics for little listeners</p><p><span aria-hidden="true">✓</span> Manage your subscription through Apple</p></div><AppBadge /><p className="checkout-note">USD reference pricing. Local prices, included benefits, and renewal terms are shown before purchase in the app.</p></article></section>

    <section id="faq" className="section container faq-section" aria-labelledby="faq-heading"><div><p className="eyebrow">A FEW THINGS YOU MIGHT WONDER</p><h2 id="faq-heading">Little questions.<br /><em>Clear answers.</em></h2><p className="section-description">Something else on your mind?<br /><Link href="/support">We’re here to help <span aria-hidden="true">↗</span></Link></p></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{i === 5 && appUrl ? <>Get BeanHear through the <a href={appUrl}>{appUrl.includes("testflight.apple.com") ? "TestFlight invitation" : "App Store listing"}</a>. Setup, listening, and any purchases take place in the iOS app. This website is a public introduction to BeanHear.</> : answer}</p></details>)}</div></section>

    <section className="closing container" aria-labelledby="closing-heading"><div><p className="eyebrow">LESS JUGGLING. A LITTLE MORE WONDER.</p><h2 id="closing-heading">The next story sounds<br /><em>a little like you.</em></h2></div><div className="closing-action"><AppBadge /><p>{appUrl ? "Your next storytime starts on iOS." : "The iOS link is on its way."}</p></div><span className="closing-star" aria-hidden="true">✧</span></section>
  </>;
}
