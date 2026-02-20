import PageShell from "../components/PageShell";
import SideToc from "../components/SideToc";
import { MapPin, Phone, Building2, BadgeCheck } from "lucide-react";
import { COMPANY } from "../config/company";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY.address
)}`;

export default function About() {
  const toc = [
    { href: "#company", label: "Company details" },
    { href: "#mission", label: "Our mission" },
    { href: "#values", label: "Our values" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <PageShell
      title="About Us"
      subtitle="TTB Travel creates immersive journeys across Indochina with a focus on service quality and responsible travel."
      crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <SideToc items={toc} />

        <div className="space-y-10">
          <section id="company" className="scroll-mt-28">
            <h2 className="text-xl font-extrabold text-slate-900">
              Company details
            </h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Info icon={<Building2 />} label="Legal name" value={COMPANY.legalName} />
              <Info icon={<Building2 />} label="Short name" value={COMPANY.shortName} />
              <Info icon={<BadgeCheck />} label="Tax code" value={COMPANY.taxCode} />
              <Info icon={<BadgeCheck />} label="Representative" value={COMPANY.representative} />
            </div>
          </section>

          <section id="mission" className="scroll-mt-28">
            <h2 className="text-xl font-extrabold text-slate-900">Our mission</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We design tailor-made trips that balance comfort, culture, and authentic
              local experiences.
            </p>
          </section>

          <section id="values" className="scroll-mt-28">
            <h2 className="text-xl font-extrabold text-slate-900">Our values</h2>
            <ul className="mt-3 space-y-3 text-slate-600 leading-relaxed list-disc pl-5">
              <li>Client-first service and clear communication</li>
              <li>Carefully selected local partners</li>
              <li>Respect for communities and destinations</li>
              <li>Quality, safety, and reliability</li>
            </ul>
          </section>

          <section id="contact" className="scroll-mt-28">
            <h2 className="text-xl font-extrabold text-slate-900">Contact</h2>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Info icon={<MapPin />} label="Address" value={COMPANY.address} />
              <Info
                icon={<Phone />}
                label="Phone"
                value={
                  <a className="hover:underline" href={`tel:${COMPANY.phone}`}>
                    {COMPANY.phone}
                  </a>
                }
              />
            </div>

            <a
              className="inline-block mt-5 font-bold text-emerald-700 hover:text-emerald-800"
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a>
          </section>
        </div>
      </div>
    </PageShell>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 text-slate-900 font-bold">
        <span className="text-emerald-700">{icon}</span>
        {label}
      </div>
      <div className="mt-2 text-sm text-slate-600">{value}</div>
    </div>
  );
}