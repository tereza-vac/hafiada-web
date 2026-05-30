import { useMemo, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { CheckIcon } from "./icons";
import { payment } from "../data/site";

// Diakritiku do MSG/X-VS raději nedáváme – ne všechny banky ji v QR zvládnou.
const toAscii = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "");

const inputCls =
  "w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm text-stone-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

export function PaymentQR({
  defaultAmount = payment.amount,
}: {
  defaultAmount?: number;
}) {
  const [amount, setAmount] = useState(String(defaultAmount));
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  const value = useMemo(() => {
    const parts = ["SPD*1.0", `ACC:${payment.iban}`];
    const amt = Number(amount);
    if (amt > 0) parts.push(`AM:${amt.toFixed(2)}`);
    parts.push("CC:CZK");
    const vs = phone.replace(/\D/g, "");
    if (vs) parts.push(`X-VS:${vs}`);
    const msg = toAscii(name).trim();
    parts.push(`MSG:${msg || "HAFIADA startovne"}`);
    return parts.join("*");
  }, [amount, phone, name]);

  return (
    <div className="rounded-2xl border border-brand-100 bg-white/70 p-4">
      <p className="text-sm font-semibold text-stone-700">
        Rychlá platba QR kódem
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
        <div className="mx-auto rounded-2xl bg-white p-3 shadow-sm sm:mx-0">
          <QRCodeSVG value={value} size={132} level="M" marginSize={0} />
        </div>
        <div className="space-y-2">
          <div>
            <label className="mb-1 block text-xs font-semibold text-stone-600">
              Částka (Kč)
            </label>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={inputCls}
            />
          </div>
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
              Jméno psovoda a psa
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
      <p className="mt-3 text-xs text-stone-500">
        Vyplňte údaje a načtěte QR v bankovní aplikaci – částka, variabilní
        symbol i zpráva pro příjemce se předvyplní samy. Účet:{" "}
        <span className="font-semibold text-stone-600">{payment.account}</span>
      </p>
    </div>
  );
}

// Kompletní platební údaje – stejné pokyny i QR všude, kde se platí startovné.
export function PaymentDetails({
  defaultAmount = payment.amount,
}: {
  defaultAmount?: number;
}) {
  return (
    <div>
      <p className="font-display text-lg font-bold">Platební údaje</p>
      <p className="mt-2 text-stone-700">
        Startovné poukažte na transparentní účet u Fio banky:
      </p>
      <p className="mt-1 font-display text-xl font-bold text-brand-700">
        {payment.account}
      </p>
      <ul className="mt-4 space-y-2 text-sm text-stone-700">
        {payment.instructions.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <PaymentQR defaultAmount={defaultAmount} />
      </div>
    </div>
  );
}
