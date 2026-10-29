export const APP_URL = "https://beanhear.com";
export const SUPPORT_EMAIL = "support@wxhlabs.com";

export function getAppStoreUrl(): string | null {
  const candidate = process.env.APP_STORE_URL?.trim() || process.env.NEXT_PUBLIC_APP_STORE_URL?.trim();
  if (!candidate) return null;

  try {
    const url = new URL(candidate);
    if (url.protocol === "https:" && ["apps.apple.com", "testflight.apple.com"].includes(url.hostname)) {
      return url.toString();
    }
  } catch {
    // Keep an invalid or unpublished listing on the availability placeholder.
  }
  return null;
}
