import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AlertIcon, PawIcon } from "./icons";

type WithChildren = { children: ReactNode; className?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-brand-700 text-white">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800/80 via-brand-700/70 to-brand-600/60" />
      <div className="container-page relative py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide backdrop-blur">
            <PawIcon className="h-4 w-4" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-brand-50/90">{subtitle}</p>
        )}
      </div>
    </header>
  );
}

export function Section({
  children,
  className = "",
  muted = false,
}: WithChildren & { muted?: boolean }) {
  return (
    <section className={`${muted ? "bg-brand-50/60" : ""} py-14 sm:py-16`}>
      <div className={`container-page ${className}`}>{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-8 ${align === "center" ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">{title}</h2>
      <div
        className={`mt-4 h-1.5 w-20 rounded-full bg-brand-400 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

export function Card({ children, className = "" }: WithChildren) {
  return (
    <div
      className={`rounded-3xl border border-brand-100 bg-white p-6 shadow-sm transition hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const buttonStyles: Record<string, string> = {
  primary:
    "bg-brand-500 text-white shadow-sm hover:bg-brand-600 focus-visible:ring-brand-300",
  secondary:
    "bg-white text-brand-700 border border-brand-200 hover:bg-brand-50 focus-visible:ring-brand-200",
  ghost: "bg-white/15 text-white hover:bg-white/25 focus-visible:ring-white/50",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition focus:outline-none focus-visible:ring-4 disabled:opacity-60 ${buttonStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

export function Callout({
  children,
  tone = "warning",
}: WithChildren & { tone?: "warning" | "info" }) {
  const tones = {
    warning: "border-amber-300 bg-amber-50 text-amber-900",
    info: "border-teal-200 bg-teal-50 text-teal-900",
  };
  return (
    <div
      className={`flex gap-3 rounded-2xl border-l-4 p-5 ${tones[tone]}`}
      role="note"
    >
      <AlertIcon className="mt-0.5 h-6 w-6 shrink-0" />
      <div className="space-y-2 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}
