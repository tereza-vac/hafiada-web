import { PageHero, Section, Card, SectionTitle } from "../components/ui";
import { MailIcon, PhoneIcon, PinIcon } from "../components/icons";
import { contact, event } from "../data/site";
import { images } from "../data/images";
import { ContactForm } from "../components/ContactForm";
import { useSeo } from "../hooks/useSeo";

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
            <Card>
              <ContactForm defaultSubject="Dotaz z webu Hafiáda" />
            </Card>
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
