import type { FormConfig } from "../data/site";
import { Button, Card } from "./ui";
import { CalendarIcon, PawIcon } from "./icons";

export function GoogleForm({
  config,
  title,
}: {
  config: FormConfig;
  title: string;
}) {
  if (!config.url) {
    return (
      <Card className="bg-brand-50/70 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <CalendarIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold">Formulář se připravuje</h3>
        <p className="mx-auto mt-2 max-w-md text-stone-600">
          Na přihlašovacím formuláři intenzivně pracujeme. Jakmile bude hotový,
          najdeš ho přímo tady. Sleduj nás na Facebooku, ať ti nic neuteče.
        </p>
      </Card>
    );
  }

  if (config.mode === "link") {
    return (
      <Card className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
          <PawIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-2xl font-bold">{title}</h3>
        <p className="mx-auto mt-2 max-w-md text-stone-600">
          Přihlášku vyplníš v zabezpečeném formuláři. Otevře se v novém okně.
        </p>
        <Button href={config.url} className="mt-5">
          Vyplnit přihlášku
        </Button>
      </Card>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
      <iframe
        title={title}
        src={config.url}
        className="h-[1600px] w-full"
        loading="lazy"
      >
        Načítání…
      </iframe>
    </div>
  );
}
