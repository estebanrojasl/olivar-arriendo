"use client";

import { trackWhatsAppClick } from "@/lib/gtag";
import { whatsappUrl } from "@/components/WhatsAppButton";

export default function WhatsAppLink({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(source)}
      className={className}
    >
      {children}
    </a>
  );
}
