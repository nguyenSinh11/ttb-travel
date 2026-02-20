import PageShell from "../components/PageShell";
import SideToc from "../components/SideToc";
import { COMPANY } from "../config/company";

export default function Terms() {
  const toc = [
    { href: "#scope", label: "Scope" },
    { href: "#booking", label: "Booking & payment" },
    { href: "#changes", label: "Changes" },
    { href: "#cancel", label: "Cancellation" },
    { href: "#liability", label: "Liability" },
  ];

  return (
    <PageShell
      title="Terms & Conditions"
      subtitle={`These terms apply to services provided by ${COMPANY.legalName}.`}
      crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <SideToc items={toc} />

        <article className="space-y-10">
          <Block id="scope" title="1. Scope">
            These terms apply to bookings made with TTB Travel for tours, accommodation,
            transportation, and related services.
          </Block>

          <Block id="booking" title="2. Booking & payment">
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>A booking is confirmed after written confirmation and deposit (if required).</li>
              <li>The remaining balance is due before departure according to the agreed schedule.</li>
              <li>Any bank fees may apply depending on the payment method.</li>
            </ul>
          </Block>

          <Block id="changes" title="3. Changes">
            Changes after confirmation may result in additional fees depending on suppliers,
            availability, and seasonality.
          </Block>

          <Block id="cancel" title="4. Cancellation">
            Cancellation conditions depend on suppliers (hotels, cruises, flights, etc.) and
            may vary by departure date.
          </Block>

          <Block id="liability" title="5. Liability">
            In case of force majeure (e.g., severe weather, strikes, restrictions), itinerary
            adjustments may be necessary.
          </Block>
        </article>
      </div>
    </PageShell>
  );
}

function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-3 text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}