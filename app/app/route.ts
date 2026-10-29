import { getAppStoreUrl } from "@/lib/config";

export function GET(request: Request) {
  // A bare '#' would resolve back to /app and create a redirect loop.
  return Response.redirect(getAppStoreUrl() ?? new URL("/#", request.url), 307);
}
