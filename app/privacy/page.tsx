import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the BeanHear website handles analytics and support correspondence.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="section-heading">
        <p className="eyebrow">BeanHear · WXH Labs</p>
        <h1>Privacy, in plain words.</h1>
        <p>This notice covers the BeanHear website at beanhear.com.</p>
        <p className="legal-updated">Last updated: October 29, 2026</p>
      </header>

      <article className="legal-card prose">
        <section>
          <h2>What this website does</h2>
          <p>
            This website introduces BeanHear, an iOS story-listening product for
            parents and caregivers. You can read about the product and contact
            support. There is no website account, voice recording or upload,
            story player, or payment form here.
          </p>
        </section>

        <section>
          <h2>Website analytics and hosting</h2>
          <p>
            We use Vercel to host this website and Vercel Web Analytics to
            understand visits, such as which pages are viewed and broad device,
            browser, referrer, and location information. Vercel describes Web
            Analytics as not using third-party cookies and providing aggregated
            visitor measurements.
            Read{" "}
            <a href="https://vercel.com/docs/analytics/privacy-policy">
              Vercel’s Web Analytics privacy documentation
            </a>{" "}
            for the information it collects and how visitor measurement works.
          </p>
          <p>
            Delivering and protecting the website may also involve technical
            request data processed by the hosting provider, such as an IP
            address, requested URL, request time, and browser information. See{" "}
            <a href="https://vercel.com/legal/privacy-notice">
              Vercel’s privacy notice
            </a>{" "}
            for its practices.
          </p>
        </section>

        <section>
          <h2>When you contact us</h2>
          <p>
            If you email support@wxhlabs.com, we receive your email address,
            message, and any information you choose to include. We use that
            correspondence to understand and respond to your request and manage
            related support. Please avoid sending passwords, payment details,
            children’s personal information, or voice recordings in an initial
            support email.
          </p>
        </section>

        <section>
          <h2>Children and voices</h2>
          <p>
            This website is intended for adult parents and caregivers. It does
            not invite children to create accounts or submit information, and
            it does not collect voice uploads. BeanHear’s product concept is
            story listening for young children using an adult’s authorized voice;
            that does not require children to use this website themselves.
          </p>
        </section>

        <section>
          <h2>The iOS app is separate</h2>
          <p>
            This website notice does not describe the iOS app’s voice-processing
            providers, storage, permissions, or retention. Consult the privacy
            information presented with the app before using its features. You
            can also ask us about app privacy, voice data, or deletion at the
            address below.
          </p>
          <p>
            Links to Apple, TestFlight, and other external services take you to
            services with their own privacy practices.
          </p>
        </section>

        <section>
          <h2>Your questions and requests</h2>
          <p>
            To ask about information you have sent us, or request access,
            correction, or deletion, email{" "}
            <a href="mailto:support@wxhlabs.com?subject=BeanHear%20privacy%20request">
              support@wxhlabs.com
            </a>
            . Tell us what your request concerns without including unnecessary
            sensitive information. We may need additional information to identify
            the relevant records and assess the request under applicable law.
          </p>
          <p>
            If this website’s practices change, we will update this page and its
            date.
          </p>
        </section>
      </article>
    </div>
  );
}
