import PageShell from "../components/PageShell";
import SideToc from "../components/SideToc";
import { COMPANY } from "../config/company";

export default function Privacy() {
  const toc = [
    { href: "#data", label: "Data collected" },
    { href: "#use", label: "Use of data" },
    { href: "#share", label: "Sharing" },
    { href: "#cookies", label: "Cookies" },
    { href: "#rights", label: "Your rights" },
  ];

  return (
    <PageShell
      title="Privacy Policy"
      subtitle={`This policy describes how ${COMPANY.brand} handles personal data.`}
      crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        <SideToc items={toc} />

        <article className="space-y-10">
          <Block id="data" title="1. Data collected">
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Contact information (name, phone) provided during inquiries</li>
              <li>Trip preferences and service requirements</li>
              <li>Technical data for basic analytics (browser/device)</li>
            </ul>
          </Block>

          <Block id="use" title="2. Use of data">
            Data is used to prepare quotes, deliver services, provide customer support,
            and improve the website experience.
          </Block>

          <Block id="share" title="3. Sharing">
            Data may be shared with service providers (hotels, transport, guides) only
            when required to deliver the booked services.
          </Block>

          <Block id="cookies" title="4. Cookies">
            Cookies may be used for site functionality and analytics. You can manage
            cookies via your browser settings.
          </Block>

          <Block id="rights" title="5. Your rights">
            You may request access, correction, or deletion of your personal data.
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