import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ContactForm } from "./ContactForm";

type ContactOptions = {
  attachment?: boolean;
  editableSubject?: boolean;
  allowAttachments?: boolean;
  recipient?: string;
  title?: string;
  subtitle?: string;
};

type ContactContextValue = {
  open: (subject?: string, options?: ContactOptions) => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact musí být uvnitř <ContactProvider>");
  return ctx;
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [opts, setOpts] = useState<ContactOptions>({});

  const open = useCallback((s?: string, options?: ContactOptions) => {
    setSubject(s);
    setOpts(options ?? {});
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <ContactContext.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center">
          <div
            className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />
          <div
            className="relative z-10 my-8 w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Napište nám"
          >
            <button
              onClick={close}
              aria-label="Zavřít"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-stone-400 transition hover:bg-stone-100 hover:text-stone-700"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <h2 className="font-display text-2xl font-extrabold text-ink">
              {opts.title ?? (opts.attachment ? "Poslat fotku do soutěže" : "Napište nám")}
            </h2>
            <p className="mt-1 mb-5 text-stone-600">
              {opts.subtitle ??
                (opts.attachment
                  ? "Vyplňte svůj e-mail a nahrajte fotku (nebo více fotek) přímo tady."
                  : "Vyplňte svůj e-mail a zprávu – ozveme se vám co nejdříve.")}
            </p>
            <ContactForm
              defaultSubject={subject ?? "Dotaz z webu Hafiáda"}
              withAttachment={opts.attachment}
              editableSubject={opts.editableSubject}
              allowAttachments={opts.allowAttachments}
              recipient={opts.recipient}
            />
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
}
