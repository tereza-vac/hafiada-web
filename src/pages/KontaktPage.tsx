import { useState, type FormEvent } from "react";
import { PageHero, Section, Card, Button, SectionTitle } from "../components/ui";
import { MailIcon, PhoneIcon, PinIcon } from "../components/icons";
import { contact, event } from "../data/site";
import { images } from "../data/images";
import { useSeo } from "../hooks/useSeo";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Dotaz z webu – ${name || "návštěvník"}`);
    const body = encodeURIComponent(
      `Jméno: ${name}\nE-mail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-stone-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100";

  return (
    <Card>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">Jméno a příjmení</label>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">E-mail</label>
          <input type="email" className={field} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-stone-700">Zpráva</label>
          <textarea rows={5} className={field} value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <Button type="submit">Odeslat</Button>
        <p className="text-xs text-stone-400">
          Odesláním se otevře váš e-mailový klient s předvyplněnou zprávou na {contact.email}.
        </p>
      </form>
    </Card>
  );
}

export default function KontaktPage() {
  useSeo({
    title: "Kontakt",
    description:
      "Kontakt na organizátory Hafiády. Máte dotaz? Napište nám nebo zavolejte. Místo konání: Bystřice, areál před bazénem.",
  });
  return (
    <>
      <PageHero
        eyebrow="Ozvěte se nám"
        title="Kontakt"
        subtitle="V případě nejasností se neváhejte ozvat. Odpoví vám kdokoliv z organizačního týmu, kdo se k vašemu dotazu dostane jako první."
        image={images.kid}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Napište nám" title="Máte dotaz?" />
            <ContactForm />
          </div>

          <div className="space-y-6">
            <Card>
              <h3 className="font-display text-xl font-bold">Kontaktní údaje</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <a href={`mailto:${contact.email}`} className="text-stone-700 hover:text-brand-700">
                    {contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <span className="text-stone-700">{event.place}, {event.placeShort}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold text-brand-600">č.ú.</span>
                  <span className="text-stone-700">{event.account}</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-display text-xl font-bold">Organizátoři</h3>
              <div className="mt-4 grid gap-4">
                {contact.organizers.map((o) => (
                  <div key={o.name} className="rounded-2xl bg-brand-50 p-4">
                    <p className="font-semibold text-stone-800">{o.name}</p>
                    <p className="text-sm text-stone-500">{o.role}</p>
                    {o.address && (
                      <p className="mt-1 text-sm text-stone-600">{o.address}</p>
                    )}
                    <div className="mt-2 flex flex-col gap-1.5 text-stone-700">
                      {o.phone && (
                        <a
                          href={`tel:${o.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 hover:text-brand-700"
                        >
                          <PhoneIcon className="h-5 w-5 text-brand-600" /> {o.phone}
                        </a>
                      )}
                      {o.email && (
                        <a
                          href={`mailto:${o.email}`}
                          className="flex items-center gap-2 hover:text-brand-700"
                        >
                          <MailIcon className="h-5 w-5 text-brand-600" /> {o.email}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionTitle eyebrow="Kde se setkáme?" title="Bystřice, areál před bazénem" />
        <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-sm">
          <iframe
            title="Mapa – místo konání"
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.715%2C49.635%2C18.729%2C49.644&layer=mapnik&marker=49.6393886%2C18.7220669"
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </Section>
    </>
  );
}
