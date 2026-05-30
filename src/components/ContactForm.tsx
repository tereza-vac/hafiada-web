import { useState, type FormEvent } from "react";
import { Button } from "./ui";
import { CheckIcon, MailIcon } from "./icons";
import { contact } from "../data/site";

// FormSubmit.co – odesílání bez vlastního serveru. Zprávy chodí na contact.email.
// POZOR: při úplně prvním odeslání přijde do schránky aktivační e-mail –
// stačí jednou kliknout na potvrzovací odkaz a pak už zprávy chodí samy.
const AJAX_ENDPOINT = `https://formsubmit.co/ajax/${contact.email}`;
// Přílohy (soubory) přes AJAX nejdou – proto klasický multipart POST s návratem zpět.
const FORM_ENDPOINT = `https://formsubmit.co/${contact.email}`;

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

function OwnEmailBox({ subject, message }: { subject: string; message: string }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const su = encodeURIComponent(subject);
  const body = encodeURIComponent(message);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${su}&body=${body}`;
  const seznam = `https://email.seznam.cz/#compose?to=${contact.email}&subject=${su}`;
  const mailto = `mailto:${contact.email}?subject=${su}&body=${body}`;

  return (
    <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
      <p className="text-sm font-semibold text-stone-700">
        Raději napsat z vlastního e-mailu?
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-200 hover:bg-brand-50"
        >
          <MailIcon className="h-4 w-4 text-brand-600" />
          {contact.email}
          <span className="text-brand-600">
            {copied ? "✓ zkopírováno" : "kopírovat"}
          </span>
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={gmail}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-200 hover:bg-brand-50"
        >
          Napsat přes Gmail
        </a>
        <a
          href={seznam}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-200 hover:bg-brand-50"
        >
          Napsat přes Seznam
        </a>
        <a
          href={mailto}
          className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-stone-700 ring-1 ring-brand-200 hover:bg-brand-50"
        >
          Výchozí e-mailová aplikace
        </a>
      </div>
    </div>
  );
}

export function ContactForm({
  defaultSubject = "Dotaz z webu Hafiáda",
  withAttachment = false,
}: {
  defaultSubject?: string;
  withAttachment?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Bezpřílohová varianta – přímé odeslání přes AJAX (zůstane na stránce).
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(AJAX_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${defaultSubject} – ${name || "návštěvník"}`,
          _template: "table",
          _captcha: "false",
          _replyto: email,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-teal-50 p-6 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
          <CheckIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-3 font-display text-xl font-bold text-teal-800">
          Zpráva odeslána, děkujeme!
        </h3>
        <p className="mt-1 text-stone-600">
          Ozveme se vám co nejdříve na zadaný e-mail.
        </p>
        <button
          className="mt-4 text-sm font-semibold text-brand-600 hover:text-brand-700"
          onClick={() => setStatus("idle")}
        >
          Napsat další zprávu
        </button>
      </div>
    );
  }

  // Varianta s nahráním fotek – klasický multipart POST přímo na FormSubmit.
  // Po odeslání se prohlížeč vrátí zpět na stránku (_next) s potvrzením.
  if (withAttachment) {
    const nextUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}?odeslano=fotka`
        : "/";
    return (
      <div className="space-y-5">
        <form
          action={FORM_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={defaultSubject} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={nextUrl} />

          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              Jméno a příjmení
            </label>
            <input className={field} name="name" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              Váš e-mail
            </label>
            <input
              type="email"
              name="email"
              className={field}
              placeholder="vas@email.cz"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              Fotky
            </label>
            <input
              type="file"
              name="fotka"
              accept="image/*"
              multiple
              required
              className="w-full rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3 text-sm text-stone-700 file:mr-3 file:rounded-full file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-brand-600"
            />
            <p className="mt-1 text-xs text-stone-500">
              Můžete vybrat i více fotek. Doporučená velikost do ~10 MB na fotku.
            </p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              Vzkaz (nepovinné)
            </label>
            <textarea rows={3} name="message" className={field} />
          </div>

          <Button type="submit">Odeslat fotky</Button>
          <p className="text-xs text-stone-400">
            Po odeslání vás stránka na chvíli přesměruje a pak vrátí zpět s
            potvrzením.
          </p>
        </form>

        <OwnEmailBox subject={defaultSubject} message="" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">
            Jméno a příjmení
          </label>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">
            Váš e-mail
          </label>
          <input
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vas@email.cz"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">
            Zpráva
          </label>
          <textarea
            rows={4}
            className={field}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        {status === "error" && (
          <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Zprávu se teď nepodařilo odeslat. Zkuste to prosím znovu, nebo nám
            napište přímo na e-mail níže.
          </p>
        )}

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Odesílám…" : "Odeslat zprávu"}
        </Button>
      </form>

      <OwnEmailBox subject={defaultSubject} message={message} />
    </div>
  );
}
