# BeanHear

The Day1 landing website for **BeanHear by WXH Labs**, an iOS story-reading product for caregivers with children approximately ages 0–5. Canonical URL: https://beanhear.com. Support: [support@wxhlabs.com](mailto:support@wxhlabs.com).

The intended iOS experience is sign in → record about 20 seconds of an authorized adult voice → unlock public-domain stories for hands-free listening. Advertised plans are Free with 7 points and Premium at US$7.99/month or US$59.99/year through Apple in-app purchase. App availability and final purchase terms must be confirmed in the app’s listing and purchase flow.

This repository contains only the public landing site. It has no logged-in web app, voice upload, web player, product API, Firebase, Stripe, or web checkout. It makes no user, download, testimonial, or revenue claims.

## Development

Requires **Node.js >=20.9** and npm. Built with Next.js App Router, TypeScript, and `@vercel/analytics`.

```sh
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000. To check and run the production build:

```sh
npm run typecheck
npm run build
npm start
```

## Configuration

| Variable | Purpose |
| --- | --- |
| `APP_URL` | Documented production URL, `https://beanhear.com`. The canonical URL and `metadataBase` are explicitly pinned in code; this variable does not override them. |
| `APP_STORE_URL` | Optional HTTPS App Store or TestFlight listing URL. Takes precedence over the public alias. |
| `NEXT_PUBLIC_APP_STORE_URL` | Optional alternative listing URL when `APP_STORE_URL` is empty. |

Only `https://apps.apple.com/...` and `https://testflight.apple.com/...` URLs are accepted. With no valid listing configured, the download badge remains an availability placeholder and `/app` redirects to the homepage (`/#`). Add the real URL in the deployment environment and rebuild when distribution becomes available. Keep local environment files out of Git.

## Routes

| Route | Content |
| --- | --- |
| `/` | Hero, how it works, iOS link placeholder, pricing, FAQ, and support footer |
| `/privacy` | Website privacy notice; app voice-processing practices are outside its scope |
| `/terms` | Website terms and Apple purchase information |
| `/support` | Email support and common questions |
| `/app` | HTTP 307 redirect to the configured listing or homepage placeholder |
| `/api/health` | `{ "ok": true, "product": "beanhear" }` |
| `/llms.txt` | Honest product facts and Day1 scope |
| `/robots.txt`, `/sitemap.xml` | Search discovery metadata |

## Deploy through Vercel Git

1. Push this repository to `main` at [wxhzzsf/beanhear](https://github.com/wxhzzsf/beanhear).
2. Import that GitHub repository in Vercel, or connect it under the project’s Git settings. Select Next.js, the repository root, `npm run build`, and `main` as the production branch. Use a supported Node version satisfying the requirement above.
3. Link the local checkout with `vercel link` if using the CLI for project administration. Local linking alone does not connect GitHub; confirm the repository is connected in Vercel.
4. Configure environment variables, then deploy the committed Git revision. Subsequent pushes to `main` should deploy through the Git integration. Use Git-backed deployments for this project, not source-file uploads. See [Vercel’s GitHub integration guide](https://vercel.com/docs/git/vercel-for-github).
5. Enable **Web Analytics** for the Vercel project before the production deployment. `app/layout.tsx` already includes the Analytics component. Verify a visit reaches Analytics after deployment, following the [Vercel Web Analytics guide](https://vercel.com/docs/analytics/quickstart).
6. Attach the apex domain **beanhear.com** in the project’s Domains settings. Apply the exact DNS records Vercel returns for this project, including any requested ownership verification. Keep the `*.vercel.app` production URL live while DNS is pending. If Xiaohan must change DNS, record the exact type, host, value, and TTL in the deployment handoff.

Check HTTP 200 for the production homepage, legal/support pages, and `/api/health`, plus the expected `/app` redirect. Record the verified live URL, Vercel URL, repository SHA, domain status, and any blockers in `/Users/wxhzzsf/Developer/beanhear-day1-landing-RESULT.md`. These instructions do not imply that deployment or DNS configuration has already completed.
