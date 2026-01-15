export function trackEvent(
  action: string,
  params?: Record<string, any>
) {
  if (typeof window === "undefined") return;
  if (!(window as any).gtag) return;

  (window as any).gtag("event", action, params);
}