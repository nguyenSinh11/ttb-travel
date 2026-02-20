import { useMemo } from "react";
import { Mail, PhoneCall, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const company = useMemo(
    () => ({
      name: "TTB Travel",
      addressLine1: "No. 4, Alley 56, Nguyen Phuc Lai Street",
      addressLine2: "O Cho Dua Ward, Hanoi, Vietnam",
      phoneDisplay: "0437 125 999",
      phoneTel: "0437125999",
      email: "support@ttbtravel.com",
      mapQuery:
        "No. 4, Alley 56, Nguyen Phuc Lai Street, O Cho Dua Ward, Hanoi, Vietnam",
    }),
    []
  );

  const mapSrc = useMemo(() => {
    return `https://www.google.com/maps?q=${encodeURIComponent(
      company.mapQuery
    )}&output=embed`;
  }, [company.mapQuery]);

  const mapsLink = useMemo(() => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      company.mapQuery
    )}`;
  }, [company.mapQuery]);

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0">
          <img
            src="/images/pages/Vietnam3.jpg"
            alt="TTB Travel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-white/5" />
        </div>

        <div className="relative container-app py-14 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white/90 backdrop-blur border border-white/15">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold tracking-[0.22em] uppercase">
              Contact
            </span>
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Let’s plan your next journey
          </h1>
          <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
            Tell us your travel style, dates, and interests. We will recommend
            an itinerary that feels immersive, comfortable, and truly meaningful.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-bold shadow-lg transition active:scale-[0.99]"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now
            </a>

            <a
              href={`mailto:${company.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 font-bold border border-white/20 backdrop-blur transition active:scale-[0.99]"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-app py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: INFO CARD */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
                <div className="text-xs tracking-[0.28em] uppercase text-slate-500">
                  {company.name}
                </div>
                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Contact Details
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  Reach out via phone or email, or visit us at our Hanoi office.
                </p>
              </div>

              <div className="p-6 space-y-4">
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Address"
                  value={
                    <>
                      {company.addressLine1}
                      <br />
                      {company.addressLine2}
                    </>
                  }
                />

                <InfoRow
                  icon={<PhoneCall className="h-5 w-5" />}
                  title="Phone"
                  value={
                    <a
                      href={`tel:${company.phoneTel}`}
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {company.phoneDisplay}
                    </a>
                  }
                />

                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  value={
                    <a
                      href={`mailto:${company.email}`}
                      className="font-semibold text-emerald-700 hover:underline break-all"
                    >
                      {company.email}
                    </a>
                  }
                />

                <div className="pt-2">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50 transition active:scale-[0.99]"
                  >
                    Open in Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Travel vibe mini block */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">
                What to include in your message
              </h3>
              <ul className="mt-3 space-y-2 text-slate-600 list-disc pl-5">
                <li>Travel dates and trip duration</li>
                <li>Number of guests and preferred comfort level</li>
                <li>Interests (culture, nature, cruise, homestay, etc.)</li>
                <li>Budget range (optional)</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: MAP */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs tracking-[0.28em] uppercase text-slate-500">
                    Location
                  </div>
                  <div className="mt-1 font-extrabold text-slate-900">
                    Hanoi Office Map
                  </div>
                </div>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-bold hover:bg-slate-800 transition active:scale-[0.99]"
                >
                  Directions
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="aspect-[16/9] w-full">
                <iframe
                  title="Google Map"
                  src={mapSrc}
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-4 text-sm text-slate-600">
                Tip: On mobile, tap <span className="font-semibold">Directions</span>{" "}
                to open navigation instantly.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
        {icon}
      </div>

      <div>
        <div className="text-xs tracking-[0.26em] uppercase text-slate-500">
          {title}
        </div>
        <div className="mt-1 text-slate-900 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}