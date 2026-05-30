import { Button } from "../components/ui";
import { PawIcon } from "../components/icons";

export default function NotFoundPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-100 text-brand-600">
        <PawIcon className="h-10 w-10" />
      </span>
      <h1 className="mt-6 font-display text-5xl font-extrabold text-ink">404</h1>
      <p className="mt-3 max-w-md text-lg text-stone-600">
        Tuhle stránku se nám nepodařilo vyčmuchat. Možná byla přesunuta nebo už neexistuje.
      </p>
      <Button to="/" className="mt-6">
        Zpět na úvod
      </Button>
    </section>
  );
}
