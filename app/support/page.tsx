import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Contact BeanHear support for availability, Apple subscriptions, and privacy questions.",
};

export default function SupportPage() {
  return (
    <div className="legal-page">
      <header className="section-heading">
        <p className="eyebrow">BeanHear · WXH Labs</p>
        <h1>We’re here to help.</h1>
        <p>Questions about BeanHear, your subscription, or your voice? Email us.</p>
      </header>

      <div className="contact-card">
        <h2>Contact BeanHear support</h2>
        <a href="mailto:support@wxhlabs.com?subject=BeanHear%20support">
          support@wxhlabs.com
        </a>
        <p>
          Include a short description and, if relevant, your iPhone model, iOS
          version, app version, and the steps that led to the issue. Please leave
          out passwords, full payment details, and children’s personal information.
        </p>
      </div>

      <article className="legal-card prose">
        <section>
          <h2>Where can I get BeanHear?</h2>
          <p>
            BeanHear is an iOS app. Contact{" "}
            <a href="mailto:support@wxhlabs.com">support@wxhlabs.com</a>{" "}
            for availability. This
            website introduces the product; it has no sign-in, voice upload,
            or story player.
          </p>
        </section>

        <section>
          <h2>How does voice setup work?</h2>
          <p>
            The intended app flow is to sign in, create an authorized adult
            voice from a short recording of about 20 seconds, and unlock
            stories. Use your own voice or another adult’s voice only with
            their explicit permission. Send us questions about setup rather
            than attaching a recording to your first email.
          </p>
        </section>

        <section>
          <h2>What are the plans?</h2>
          <p>
            Free includes 3 points. Premium is $7.99 per month or $59.99 per
            year through Apple in-app purchase. Check the App Store purchase
            screen for the offer, local price, and renewal terms available
            to you. There is no web checkout.
          </p>
        </section>

        <section>
          <h2>How do I cancel an Apple subscription?</h2>
          <p>
            On your iPhone, open Settings, tap your name, then Subscriptions.
            Choose BeanHear and tap Cancel Subscription if that option is
            available. Make sure you use the Apple Account that made the
            purchase. Follow{" "}
            <a href="https://support.apple.com/en-us/118428">
              Apple’s cancellation guide
            </a>{" "}
            if you cannot find the subscription or need instructions for
            another device.
          </p>
        </section>

        <section>
          <h2>What if I have a privacy or deletion request?</h2>
          <p>
            Email{" "}
            <a href="mailto:support@wxhlabs.com?subject=BeanHear%20privacy%20or%20deletion%20request">
              support@wxhlabs.com with “Privacy or deletion request”
            </a>{" "}
            and explain whether your request concerns this website, support
            correspondence, or the iOS app. We may ask for information needed
            to locate the relevant records and assess your request. Read the{" "}
            <a href="/privacy">website privacy notice</a> for the scope of this
            landing site.
          </p>
        </section>
      </article>
    </div>
  );
}
