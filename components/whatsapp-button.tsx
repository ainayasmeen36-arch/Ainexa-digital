import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";

export function WhatsAppButton() {
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hello AINEXA — I would like a free consultation.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
