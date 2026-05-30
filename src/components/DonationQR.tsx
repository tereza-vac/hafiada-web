import { QRCodeSVG } from "qrcode.react";
import { event, qrPaymentString } from "../data/site";

export function DonationQR({
  size = 132,
  className = "",
  tone = "light",
}: {
  size?: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const caption = tone === "dark" ? "text-stone-400" : "text-stone-500";
  const accent = tone === "dark" ? "text-stone-200" : "text-stone-700";
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <div className="rounded-2xl bg-white p-3 shadow-sm">
        <QRCodeSVG
          value={qrPaymentString}
          size={size}
          level="M"
          marginSize={0}
        />
      </div>
      <p className={`mt-2 text-center text-xs ${caption}`}>
        Naskenujte v bankovní aplikaci
        <br />
        <span className={`font-semibold ${accent}`}>č. ú. {event.account}</span>
      </p>
    </div>
  );
}
