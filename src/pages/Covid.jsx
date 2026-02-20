import PageShell from "../components/PageShell";
import SideToc from "../components/SideToc";

export default function Covid() {
  const toc = [
    { href: "#overview", label: "Overview" },
    { href: "#requirements", label: "Entry requirements" },
    { href: "#insurance", label: "Insurance" },
    { href: "#flex", label: "Flexibility" },
  ];

  return (
    <PageShell
      title="Covid-19"
      subtitle="Travel requirements may change depending on destination and airline policies."
      crumbs={[{ label: "Home", href: "/" }, { label: "Covid-19" }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <SideToc items={toc} />

        <article className="space-y-10">
          <Block id="overview" title="1. Overview">
            We recommend checking official local guidance and airline requirements before departure.
          </Block>

          <Block id="requirements" title="2. Entry requirements">
            Requirements such as vaccination, tests, or forms may vary by destination and can change.
          </Block>

          <Block id="insurance" title="3. Insurance">
            We recommend travel insurance that covers medical care, trip cancellation, and assistance.
          </Block>

          <Block id="flex" title="4. Flexibility">
            When possible, we prioritize flexible services and provide alternatives if conditions change.
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