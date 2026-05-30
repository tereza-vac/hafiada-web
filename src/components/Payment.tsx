import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { AlertIcon, CheckIcon } from "./icons";
import { payment, type PaymentVariant } from "../data/site";

// Diakritiku do MSG/X-VS raději nedáváme – ne všechny banky ji v QR zvládnou.
const toAscii = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();

const inputCls =
  "w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

const labels: Record<PaymentVariant, string> = {
  hafiada: "QR platba – Hafiáda",
  haficross: "QR platba – Haficross",
};

// Předpona zprávy pro příjemce podle závodu (Haficross chce do zprávy „Haficross“).
const messagePrefix: Record<PaymentVariant, string> = {
  hafiada: "",
  haficross: "Haficross ",
};

export function PaymentQR({ variant }: { variant: PaymentVariant }) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const value = useMemo(() => {
    const parts = ["SPD*1.0", `ACC:${payment.iban}`, "CC:CZK"];
    const vs = phone.replace(/\D/g, "");
    if (vs) parts.push(`X-VS:${vs}`);
    const prefix = messagePrefix[variant];
    const msg = `${prefix}${toAscii(name)}`.trim();
    parts.push(`MSG:${msg || (variant === "haficross" ? "Haficross" : "Hafiada")}`);
    // Záměrně bez AM (částky) – tu doplní plátce v bance dle pokynů.
    return parts.join("*");
  }, [phone, name, variant]);

  return (
    <div className="rounded-2xl border border-brand-100 bg-white/70 p-4">
      <p className="text-sm font-semibold text-stone-700">{labels[variant]}</p>
      <div className="mt-3 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="mx-auto rounded-2xl bg-white p-3 shadow-sm sm:mx-0">
          <QRCodeSVG value={value} size={132} level="M" marginSize={0} />
        </div>
        <div className="space-y-2">
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              Telefon (variabilní symbol)
            </label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="např. 777123456"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              Jméno psovoda a psa (zpráva pro příjemce)
            </label>
            <input
              placeholder="Novák Jan + Rex"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputCls}
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-900">
        <AlertIcon className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          Vyplňte telefon a jméno – předvyplní se variabilní symbol i zpráva pro
          příjemce. <strong>Částku zadáte v bance sami</strong> podle pokynů výše.
        </p>
      </div>
    </div>
  );
}

// Kompletní platební údaje pro daný závod – stejné pokyny i QR všude.
export function PaymentDetails({ variant }: { variant: PaymentVariant }) {
  const data = payment[variant];
  return (
    <div>
      <p className="font-display text-lg font-bold">{data.title}</p>
      <p className="mt-2 text-stone-700">
        Startovné poukažte na transparentní účet u Fio banky:
      </p>
      <p className="mt-1 font-display text-xl font-bold text-brand-700">
        {payment.account}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-stone-700">
        {data.instructions.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <PaymentQR variant={variant} />
      </div>
    </div>
  );
}
