import type { ReactNode } from "react";

const icons = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  message: (
    <path d="M20 11.5a8 8 0 0 1-8 8H5.6L4 21.5v-10a8 8 0 1 1 16 0Z" />
  ),
  sparkles: (
    <>
      <path d="m12 3 1.7 4.6L18 9.3l-4.3 1.7L12 15.6l-1.7-4.6L6 9.3l4.3-1.7L12 3Z" />
      <path d="m18.5 15 .9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="3" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M3.5 10h17" />
      <path d="M8 14h2" />
      <path d="M14 14h2" />
      <path d="M8 17.5h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <path d="M12 14.5v2" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15.5" r="3.2" />
      <path d="m10.5 13 8-8" />
      <path d="m16 7 2.2 2.2" />
      <path d="m18.2 4.8 2.2 2.2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-6" />
      <path d="M4.5 11.5v6c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-6" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21" />
      <path d="M9 21h6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16.5 9 5 9-5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4" />
      <path d="M12.5 16V8" />
      <path d="M17 16v-6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.6a3.2 3.2 0 0 1 0 5.8" />
      <path d="M17.5 14.4a5.5 5.5 0 0 1 3 5.1" />
    </>
  ),
  file: (
    <>
      <path d="M14 3.5H7.5A2.5 2.5 0 0 0 5 6v12a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18V8.5L14 3.5Z" />
      <path d="M14 3.5V9h5" />
      <path d="M9 13h6" />
      <path d="M9 16.5h4" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="3" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.2 2.4 3.4 5.3 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.3-3.4-8.5S9.8 5.9 12 3.5Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.7 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.3 12 21 12 21Z" />
      <circle cx="12" cy="10.3" r="2.3" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.5H7.5A2.5 2.5 0 0 0 5 7v11.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5H15" />
      <rect x="9" y="3" width="6" height="3.5" rx="1.2" />
      <path d="m9 12.5 2 2 4-4" />
    </>
  ),
  kanban: (
    <>
      <rect x="3.5" y="4" width="5" height="13" rx="1.5" />
      <rect x="9.5" y="4" width="5" height="9" rx="1.5" />
      <rect x="15.5" y="4" width="5" height="16" rx="1.5" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4.5L4 8" />
      <path d="M4 4v4h4" />
      <path d="M4 13a8 8 0 0 0 14 4.5l2-1.5" />
      <path d="M20 20v-4h-4" />
    </>
  ),
  play: <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />,
  pause: (
    <>
      <path d="M9 5v14" />
      <path d="M15 5v14" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  scanFace: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 9h3a2 2 0 0 1 2 2v10" />
      <path d="M3 21h18" />
      <path d="M8.5 7h3" />
      <path d="M8.5 11h3" />
      <path d="M8.5 15h3" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.8 8.2c.3-.4.8-.4 1.1 0l.9 1.4c.2.3.1.7-.2.9l-.5.4c.5 1.1 1.3 1.9 2.4 2.4l.4-.5c.2-.3.6-.4.9-.2l1.4.9c.4.3.4.8 0 1.1-.7.7-1.6 1-2.6.8-2.9-.6-4.9-2.6-5.5-5.5-.2-1 .1-1.9.8-2.6Z" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.7 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
