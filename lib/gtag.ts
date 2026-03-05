export const GA_ID = "G-HL0J610YNS";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

// Fires as a GA4 conversion (mark this event as conversion in GA4 dashboard)
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", {
    event_category: "conversion",
    event_label: source,
  });
}

export function trackGalleryOpen(imageName: string) {
  trackEvent("gallery_open", {
    event_category: "engagement",
    event_label: imageName,
  });
}
