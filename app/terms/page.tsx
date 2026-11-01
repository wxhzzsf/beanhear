import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the BeanHear informational website.",
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <header className="section-heading">
        <p className="eyebrow">BeanHear · WXH Labs</p>
        <h1>A few simple terms.</h1>
        <p>These terms cover your use of the BeanHear website.</p>
        <p className="legal-updated">Last updated: November 1, 2026</p>
      </header>

      <article className="legal-card prose">
        <section>
          <h2>About this website</h2>
          <p>
            BeanHear is a WXH Labs product for parents and caregivers interested
            in listening to stories in a familiar, authorized adult voice. This
            website provides product information and support contact details.
            It does not provide a signed-in app, voice cloning, web playback,
            or checkout.
          </p>
          <p>
            The iOS app is a separate service. App availability, compatibility,
            feature access, and any additional app terms should be checked in
            the app and its App Store or TestFlight listing when listed. Contact
            support@wxhlabs.com for availability.
          </p>
        </section>

        <section>
          <h2>Use the website responsibly</h2>
          <p>
            Use this website lawfully. Do not interfere with its operation,
            attempt unauthorized access, misuse support channels, or impersonate
            BeanHear, WXH Labs, or another person.
          </p>
        </section>

        <section>
          <h2>Responsible voice use</h2>
          <p>
            BeanHear is intended for a parent’s own voice or another adult’s
            voice used with that person’s explicit permission. Do not use a
            voice to impersonate, deceive, or infringe someone else’s rights.
            This website does not accept recordings or create voice clones.
          </p>
          <p>
            An adult caregiver should choose suitable stories, set a comfortable
            listening volume, and supervise young children. Story audio is an
            activity for caregivers to guide alongside everyday care.
          </p>
        </section>

        <section>
          <h2>Plans and purchases</h2>
          <p>
            The advertised plans are Free with 3 points, and Premium at $7.99 per
            month or $59.99 per year through Apple in-app purchase. This website
            does not take payments. The App Store purchase screen is the place
            to confirm the available offer, local price, billing period, and
            renewal terms before purchasing.
          </p>
          <p>
            Manage an Apple-billed subscription through your Apple Account.
            See{" "}
            <a href="https://support.apple.com/en-us/118428">
              Apple’s subscription cancellation instructions
            </a>{" "}
            or visit our <a href="/support">support page</a> for help.
          </p>
        </section>

        <section>
          <h2>Product information and external links</h2>
          <p>
            Product information may change as BeanHear develops. Contact
            support@wxhlabs.com for app availability. The website does not
            promise a release date or uninterrupted availability of an app feature.
          </p>
          <p>
            External links are provided for convenience. Apple, Vercel, and
            other external services operate under their own terms and policies.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            Contact{" "}
            <a href="mailto:support@wxhlabs.com?subject=BeanHear%20terms%20question">
              support@wxhlabs.com
            </a>{" "}
            with questions about this website or these terms. For information
            about website data, read our <a href="/privacy">privacy notice</a>.
          </p>
        </section>
      </article>
    </div>
  );
}
