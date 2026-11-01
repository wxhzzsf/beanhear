import { getAppStoreUrl } from "@/lib/config";

export function AppBadge({ compact = false }: { compact?: boolean }) {
  const url = getAppStoreUrl();
  const isTestFlight = url?.includes("testflight.apple.com");
  return (
    <a href={url ?? "#"} className={`app-badge${compact ? " app-badge-compact" : ""}`} aria-label={url ? (isTestFlight ? "Join BeanHear on TestFlight" : "Get BeanHear on the App Store") : "BeanHear for iOS"}>
      <svg width="23" height="27" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true"><path d="M17.25 0c.25 2.07-.6 4.05-1.83 5.44-1.27 1.4-3.29 2.47-5.2 2.31-.32-2.02.73-4.12 1.86-5.42C13.36.88 15.55.08 17.25 0ZM22.93 20.21c-.57 1.27-.84 1.84-1.58 2.97-1.03 1.57-2.48 3.53-4.28 3.55-1.6.02-2.01-1.05-4.18-1.04-2.17.01-2.62 1.06-4.23 1.04-1.8-.02-3.17-1.8-4.19-3.37C1.61 18.98.9 12.87 3.14 9.68c1.59-2.27 4.1-2.54 5.68-2.54 1.72 0 2.81 1.06 4.23 1.06 1.39 0 2.24-1.06 4.22-1.06 1.4 0 3.32.76 4.89 2.63-4.3 2.36-3.6 8.5.77 10.44Z" /></svg>
      <span><small>{url ? (isTestFlight ? "Be an early listener" : "Download on the") : "BeanHear"}</small><strong>{url ? (isTestFlight ? "TestFlight" : "App Store") : "iOS app"}</strong></span>
      <span className="badge-arrow" aria-hidden="true">↗</span>
    </a>
  );
}
