import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PawIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <ellipse cx="7" cy="9" rx="1.9" ry="2.6" />
      <ellipse cx="12" cy="7" rx="1.9" ry="2.8" />
      <ellipse cx="17" cy="9" rx="1.9" ry="2.6" />
      <ellipse cx="4.5" cy="14.5" rx="1.7" ry="2.2" />
      <path d="M12 12.5c2.7 0 4.9 2 4.9 4.2 0 1.7-1.5 2.6-3 2.6-.8 0-1.3-.3-1.9-.3s-1.1.3-1.9.3c-1.5 0-3-.9-3-2.6 0-2.2 2.2-4.2 4.9-4.2Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 21s-6.7-4.3-9.3-8.5C.8 9.2 2.3 5.5 5.7 5.1c2-.2 3.4 1 4.3 2.3.9-1.3 2.3-2.5 4.3-2.3 3.4.4 4.9 4.1 3 7.4C18.7 16.7 12 21 12 21Z" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 14.5l-.7 3.5h7.4l-.7-3.5M8 21h8" />
    </svg>
  );
}

export function RunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="15" cy="4.5" r="2" />
      <path d="M5 21l3-5 3 1.5L12.5 12 9 9.5 6 11M11 11l3 1 1 4M14 13l3 .5 2 3" />
    </svg>
  );
}

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7l1-2h3.6l1 2h3.7A2.5 2.5 0 0 1 21 8.5V17a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17V8.5Z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 5 5l1.5-2 4.5 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M14 9V7.5c0-.7.5-1 1.1-1H17V3.5h-2.6C11.8 3.5 10.5 5 10.5 7.4V9H8.5v3h2v8.5h3.5V12h2.4l.5-3H14Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9.5v4M12 16.5h.01" />
    </svg>
  );
}
