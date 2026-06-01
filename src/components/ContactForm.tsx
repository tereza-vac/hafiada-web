import { useState, type FormEvent } from "react";
import { Button } from "./ui";
import { CheckIcon, MailIcon } from "./icons";
import { contact } from "../data/site";

// FormSubmit.co – odesílání bez vlastního serveru.
// POZOR: při úplně prvním odeslání na danou adresu přijde do schránky aktivační
// e-mail – stačí jednou kliknout na potvrzovací odkaz a pak už zprávy chodí samy.

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

// Typické přílohy – obrázky a běžné dokumenty.
const ATTACH_ACCEPT = "image/*,.pdf,.doc,.docx,.odt,.txt,.heic";

function OwnEmailBox({
  to,
  subject,
  message,
}: {
  to: string;
  subject: string;
  message: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(to);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const su = encodeURIComponent(subject);
  const body = encodeURIComponent(message);
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
  const seznam = `https://email.seznam.cz/#compose?to=${to}&subject=${su}`;
  const mailto = `mailto:${to}?subject=${su}&body=${body}`;

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
          {to}
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
  editableSubject = false,
  allowAttachments = false,
  recipient,
}: {
  defaultSubject?: string;
  withAttachment?: boolean;
  editableSubject?: boolean;
  allowAttachments?: boolean;
  recipient?: string;
}) {
  // Zprávy z webu vždy chodí na sdílenou schránku týmu (spolehlivě doručeno).
  // `recipient` jen přepne adresu pro "napsat z vlastního e-mailu" (přímo dané
  // organizátorce), aby měl návštěvník obě možnosti.
  const ajaxEndpoint = `https://formsubmit.co/ajax/${contact.email}`;
  const formEndpoint = `https://formsubmit.co/${contact.email}`;
  const directEmail = recipient ?? contact.email;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Soubory potřebují klasický multipart POST (přes AJAX přílohy neprojdou).
  const nativeForm = withAttachment || allowAttachments;

  // Bezpřílohová varianta – přímé odeslání přes AJAX (zůstane na stránce).
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${subject} – ${name || "návštěvník"}`,
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
        setSubject(defaultSubject);
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

  // Varianta s přílohami – klasický multipart POST přímo na FormSubmit.
  // Po odeslání se prohlížeč vrátí zpět na stránku (_next) s potvrzením.
  if (nativeForm) {
    const photoMode = withAttachment && !allowAttachments;
    const nextUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}${window.location.pathname}?odeslano=${photoMode ? "fotka" : "zprava"}`
        : "/";
    return (
      <div className="space-y-5">
        <form
          action={formEndpoint}
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          {!editableSubject && (
            <input type="hidden" name="_subject" value={defaultSubject} />
          )}
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
          {editableSubject && (
            <div>
              <label className="mb-1 block text-sm font-semibold text-stone-700">
                Předmět
              </label>
              <input
                name="_subject"
                className={field}
                defaultValue={defaultSubject}
                required
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              {photoMode ? "Fotky" : "Zpráva"}
            </label>
            {photoMode ? null : (
              <textarea rows={4} name="message" className={field} required />
            )}
            {photoMode && (
              <input
                type="file"
                name="fotka"
                accept="image/*"
                multiple
                required
                className="w-full rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3 text-sm text-stone-700 file:mr-3 file:rounded-full file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-brand-600"
              />
            )}
          </div>
          {!photoMode && (
            <div>
              <label className="mb-1 block text-sm font-semibold text-stone-700">
                Přílohy <span className="font-normal text-stone-400">(nepovinné)</span>
              </label>
              <input
                type="file"
                name="priloha"
                accept={ATTACH_ACCEPT}
                multiple
                className="w-full rounded-xl border border-dashed border-brand-300 bg-brand-50/50 px-4 py-3 text-sm text-stone-700 file:mr-3 file:rounded-full file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-brand-600"
              />
              <p className="mt-1 text-xs text-stone-500">
                Můžete přiložit fotky i dokumenty (PDF, Word). Více souborů
                najednou, doporučeně do ~10 MB na soubor.
              </p>
            </div>
          )}

          <Button type="submit">{photoMode ? "Odeslat fotky" : "Odeslat zprávu"}</Button>
          <p className="text-xs text-stone-400">
            Po odeslání vás stránka na chvíli přesměruje a pak vrátí zpět s
            potvrzením.
          </p>
        </form>

        <OwnEmailBox to={directEmail} subject={defaultSubject} message="" />
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
        {editableSubject && (
          <div>
            <label className="mb-1 block text-sm font-semibold text-stone-700">
              Předmět
            </label>
            <input
              className={field}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
        )}
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

      <OwnEmailBox to={directEmail} subject={subject} message={message} />
    </div>
  );
}
