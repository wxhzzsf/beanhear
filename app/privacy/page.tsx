import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How BeanHear handles iOS voice recordings, AI providers, accounts, website analytics, and deletion.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="section-heading">
        <p className="eyebrow">BeanHear · WXH Labs</p>
        <h1>Privacy, in plain words.</h1>
        <p>This notice covers the BeanHear iOS app and the website at beanhear.com.</p>
        <p className="legal-updated">Last updated: November 20, 2026</p>
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
          <h2>The iOS app: your choice before sharing a voice</h2>
          <p>
            BeanHear is for adult parents and caregivers. Record only your own
            adult voice or an adult voice you have permission to use. Do not
            record children or include private information in a recording.
            Microphone permission and adult voice permission are separate from
            consent to send voice data to AI providers.
          </p>
          <p>
            Before first-time voice setup and Me → Record another voice, the app
            shows a scrollable disclosure naming the recipients, data, and purpose.
            You must actively agree before upload. Declining or dismissing does
            not upload a recording or create a voice. You may browse without
            agreeing. Me → Privacy displays the same complete notice and lets
            you withdraw consent. Consent is saved per account on that device;
            older voice-ownership permission does not count as AI consent.
            Existing voices also require this consent before new generation.
          </p>
        </section>

        <section>
          <h2>Voice recordings and third-party AI</h2>
          <p>
            With your agreement, we upload the recording to private Cloudflare R2
            storage. Google Firebase stores your voice name, account association,
            consent timestamp, language preference, and generation records.
            Saving a voice stores the sample for later use; it does not itself
            create an ElevenLabs clone. A recording kept only on your device is
            not sent to an AI provider.
          </p>
          <p>
            <strong>ElevenLabs (Eleven Labs Inc.) — narration.</strong> When you
            request new story narration, including regeneration of an older
            narration, our backend sends your recording, voice display name,
            story title and text in the selected language, and technical job
            identifiers to ElevenLabs Instant Voice Cloning and text-to-speech
            (eleven_v4). These create a temporary voice clone and narrated audio.
            The language is represented in the supplied text; no separate account
            email or child profile is sent in these requests.
          </p>
          <p>
            <strong>suno-api.io — songs and lullabies.</strong> When you request
            singing, our backend sends the recording and a technical voice
            request identifier to the service at www.suno-api.io to create an
            ordinary voice profile. We then send its profile ID, the selected
            lyrics and title, style instructions, and technical job identifiers
            to generate the song. We use a generic “Family voice” title for this
            provider, not your voice display name or account email. The supplied
            lyrics come from BeanHear’s content; this does not mean lyrics are
            written by AI. This service is identified by its actual API domain;
            we do not represent it as a direct contract with Suno, Inc.
          </p>
          <p>
            These are third-party AI services. Their processing, retention, and
            safeguards are governed by their applicable terms, policies, and
            service agreements. Equivalent protection should be expected only
            to the extent those terms and policies provide it; we do not promise
            identical safeguards, certifications, or immediate erasure of every
            provider copy. See <a href="https://elevenlabs.io/privacy-policy">ElevenLabs privacy information</a> and
            the <a href="https://www.suno-api.io">suno-api.io service</a>.
            Contact us for questions about data we send through these services.
          </p>
        </section>

        <section>
          <h2>Storage, reuse, retention, and deletion</h2>
          <p>
            Uploaded voice samples and generated audio remain in our storage for
            reuse until you delete the voice or account. The app also keeps local
            recording and playback caches. Replaying existing audio uses those
            caches or stored audio and does not require a new AI generation.
            We request deletion of temporary ElevenLabs clones after generation;
            failed cleanup is retried. The suno-api.io voice profile is reused
            for later singing until we request its deletion.
          </p>
          <p>
            In Me, use the trash button beside a voice to remove its stored
            recording, generated audio, and unlock records and request deletion
            of its song voice profile. The app removes that voice’s local recording sample. Downloaded
            playback files can remain in the app’s cache until the device clears
            it or the app is removed; the deleted voice is no longer listed.
            A minimal ownership/deletion marker and some
            job or accounting records can remain until account deletion.
            Pending generation may need to finish first; unresolved song jobs
            can require support. Provider or storage errors can delay cleanup.
          </p>
          <p>
            Me → Account offers account deletion and may require recent sign-in.
            It removes the Firebase sign-in account, our stored recordings and
            audio, and owned voice, job, purchase, usage, and push-device records.
            It requests deletion of song voice profiles. If a provider request
            fails, deletion of our account data can still finish while provider
            cleanup remains incomplete; contact support@wxhlabs.com for help.
            A minimal deletion marker remains to prevent stale requests from
            recreating the account. Deletion is not a promise that all third-party
            logs, backups, or copies disappear immediately. Apple subscriptions
            must be cancelled separately in Apple’s subscription settings.
          </p>
          <p>
            Withdrawing consent in Me → Privacy blocks new uploads and new AI
            generation on that device. It does not cancel already submitted work,
            withdraw consent on another device, or erase previously sent data.
            Use voice or account deletion for removal. We do not claim a fixed
            automatic expiration period for retained recordings or provider data.
          </p>
        </section>

        <section>
          <h2>Accounts, app operations, and diagnostics</h2>
          <p>
            Google Firebase supports authentication, account records, Functions,
            analytics, crash diagnostics, and push messaging. Depending on your
            sign-in method, account information includes name, email address,
            user ID, and authentication records. We keep language preferences,
            story interactions, generation and point records, purchase status,
            and notification tokens to run the app. Crash reports can be linked
            to the signed-in user ID. Firebase SDKs may process installation and
            device identifiers, technical diagnostics, and coarse location derived
            from network information for analytics. We do not use these data for
            cross-app advertising tracking.
          </p>
          <p>
            Cloudflare stores samples and generated audio; Inngest coordinates
            background generation using job identifiers and workflow state, while
            binary voice samples are fetched by the backend rather than stored
            in workflow step state. Vercel also routes the app’s API requests to
            Firebase. Apple handles purchases and subscription management; we
            verify transaction records and store entitlements, not card numbers.
            Operational providers may process request metadata to deliver and
            protect these services. Support correspondence is handled as described
            above. External services have their own applicable privacy practices.
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
            If these practices change, we will update this page and its
            date.
          </p>
        </section>
      </article>
    </div>
  );
}
