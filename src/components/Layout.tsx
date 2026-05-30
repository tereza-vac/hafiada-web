import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { contact, event } from "../data/site";
import {
  FacebookIcon,
  MailIcon,
  PawIcon,
  PhoneIcon,
  PinIcon,
} from "./icons";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  { label: "Úvod", to: "/" },
  {
    label: "O nás",
    children: [
      { label: "O nás", to: "/o-nas" },
      { label: "Fotogalerie", to: "/fotogalerie" },
      { label: "Naši sponzoři", to: "/sponzori" },
      { label: "Kontakt", to: "/kontakt" },
    ],
  },
  {
    label: "Soutěže a přihlášky",
    children: [
      { label: "Přihláška Hafiáda 2026", to: "/prihlaska-hafiada" },
      { label: "Přihláška Haficross 2026", to: "/prihlaska-haficross" },
      { label: "Pravidla soutěží", to: "/pravidla" },
      { label: "Propozice", to: "/propozice" },
    ],
  },
  { label: "Harmonogram", to: "/harmonogram" },
  { label: "Fotosoutěž 2026", to: "/fotosoutez" },
  { label: "Haficross 2026", to: "/haficross" },
  { label: "Startovka", to: "/startovka" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-sm">
        <PawIcon className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-xl font-extrabold text-brand-700">
          Hafiáda
        </span>
        <span className="block text-xs font-semibold uppercase tracking-widest text-stone-500">
          {event.year}
        </span>
      </span>
    </Link>
  );
}

function DesktopNav() {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.label} className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold text-stone-700 transition hover:bg-brand-50 hover:text-brand-700">
              {item.label}
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-30 min-w-56 translate-y-1 rounded-2xl border border-brand-100 bg-white p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {item.children.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition hover:bg-brand-50 ${
                      isActive ? "text-brand-700" : "text-stone-700"
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : (
          <NavLink
            key={item.to}
            to={item.to!}
            end={item.to === "/"}
            className={({ isActive }) =>
              `rounded-full px-3.5 py-2 text-[15px] font-semibold transition hover:bg-brand-50 ${
                isActive ? "bg-brand-50 text-brand-700" : "text-stone-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        )
      )}
    </nav>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="border-t border-brand-100 bg-white lg:hidden">
      <nav className="container-page flex flex-col gap-1 py-4">
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="py-1">
              <p className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-stone-400">
                {item.label}
              </p>
              {item.children.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 font-medium ${
                      isActive ? "bg-brand-50 text-brand-700" : "text-stone-700"
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          ) : (
            <NavLink
              key={item.to}
              to={item.to!}
              end={item.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2.5 font-semibold ${
                  isActive ? "bg-brand-50 text-brand-700" : "text-stone-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          )
        )}
      </nav>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-40 border-b border-brand-100 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo />
        <DesktopNav />
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 text-brand-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
      </div>
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-auto bg-ink text-stone-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500">
              <PawIcon className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold">Hafiáda</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-400">
            Zábavný den pro celou rodinu se psy. Bez rasových předsudků a s
            pomocí zvířátkům v nouzi.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Kdy a kde</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-5 w-5 text-brand-400" />
              <span>{event.place}, {event.placeShort}</span>
            </li>
            <li className="flex items-start gap-2">
              <PawIcon className="mt-0.5 h-5 w-5 text-brand-400" />
              <span>{event.dateLong}, od {event.startTime}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Kontakt</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-white">
                <MailIcon className="h-5 w-5 text-brand-400" />
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.organizers[0].phone?.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <PhoneIcon className="h-5 w-5 text-brand-400" />
                {contact.organizers[0].phone}
              </a>
            </li>
            <li>
              <a href={contact.facebookGroup} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
                <FacebookIcon className="h-5 w-5 text-brand-400" />
                Skupina Hafiáda
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-white">Podpoř nás</h3>
          <p className="mt-4 text-sm text-stone-400">
            Celé startovné i dobrovolné vstupné putuje na pomoc zvířátkům v
            nouzi.
          </p>
          <p className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white">
            č. ú.: {event.account}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Hafiáda, z.s. Všechna práva vyhrazena.</p>
          <p>Bez rasových předsudků 🐾</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
