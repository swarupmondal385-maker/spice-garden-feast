export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Spice%20Garden!"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 md:bottom-6 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-glow" />
      <span className="relative flex items-center gap-2 px-4 h-14 rounded-full bg-[#25D366] text-white shadow-warm hover:scale-105 transition-transform">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden>
          <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.62.14-.18.27-.71.88-.87 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.47-.62-.48l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.85.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.9 0-10.68 4.78-10.68 10.68 0 1.88.49 3.72 1.43 5.34L5 27l5.79-1.52a10.66 10.66 0 0 0 5.23 1.33h.01c5.89 0 10.68-4.78 10.68-10.68 0-2.86-1.11-5.54-3.13-7.56a10.65 10.65 0 0 0-7.56-3.24zm0 19.49h-.01a8.83 8.83 0 0 1-4.5-1.23l-.32-.19-3.43.9.92-3.35-.21-.34a8.82 8.82 0 0 1-1.36-4.7c0-4.88 3.97-8.85 8.86-8.85 2.37 0 4.59.92 6.26 2.6a8.79 8.79 0 0 1 2.59 6.26c-.01 4.88-3.97 8.85-8.86 8.85z" />
        </svg>
        <span className="hidden sm:inline text-sm font-semibold pr-1">WhatsApp</span>
      </span>
    </a>
  );
}