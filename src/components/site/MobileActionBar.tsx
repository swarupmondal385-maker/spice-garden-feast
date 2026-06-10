import { Link } from "@tanstack/react-router";
import { Phone, ShoppingBag } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-background/95 backdrop-blur-xl border-t border-border shadow-soft">
      <div className="grid grid-cols-3 text-xs font-semibold">
        <a href="tel:+919836832967" className="flex flex-col items-center gap-1 py-3 text-foreground hover:text-saffron">
          <Phone className="h-5 w-5" />
          Call
        </a>
        <a
          href="https://wa.me/919836832967"
          target="_blank" rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-foreground hover:text-saffron border-x border-border"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.95 4.68 4.13 2.75 1.18 2.75.78 3.25.73.5-.05 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          </svg>
          WhatsApp
        </a>
        <Link to="/menu" className="flex flex-col items-center gap-1 py-3 text-primary-foreground bg-warm">
          <ShoppingBag className="h-5 w-5" />
          Order Now
        </Link>
      </div>
    </div>
  );
}