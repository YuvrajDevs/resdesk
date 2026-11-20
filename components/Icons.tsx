type P = { size?: number; className?: string };
const s = (size = 20, className?: string) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  "aria-hidden": true, className,
});

export const Phone = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const Mail = ({ size, className }: P) => (
  <svg {...s(size, className)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
);
export const ArrowUpRight = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const ArrowRight = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Plus = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M12 5v14M5 12h14" /></svg>
);
export const Check = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Pin = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Bed = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="11" r="1.6" /></svg>
);
export const Area = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
);
export const Sparkle = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const Key = ({ size, className }: P) => (
  <svg {...s(size, className)}><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9M16 7l3 3M14 9l2 2" /></svg>
);
export const Home = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></svg>
);
export const Tag = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M3 12V4h8l9 9-8 8z" /><circle cx="7.5" cy="8.5" r="1.4" /></svg>
);
export const Chart = ({ size, className }: P) => (
  <svg {...s(size, className)}><path d="M4 20V4M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></svg>
);
export const Star = ({ size = 16, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" />
  </svg>
);
export const WhatsApp = ({ size = 20, className }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7a11.8 11.8 0 0 0 5.6 1.4A11.8 11.8 0 0 0 20.4 3.6z" />
  </svg>
);
