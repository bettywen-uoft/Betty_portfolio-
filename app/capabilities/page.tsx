import { tools } from "../content";
import { PageIntro, SiteFooter, SiteHeader } from "../site-components";

export default function CapabilitiesPage() {
  return <main>
    <SiteHeader />
    <PageIntro eyebrow="Capabilities" title="A practical engineering toolkit." description="Methods and software used to take mechanical systems from an initial design question to a tested physical result." />
    <section className="capabilities section detail-section">
      <div className="capability-grid">
        <article><span>01</span><h2>Mechanical Design</h2><p>3D CAD, assemblies, detailed drawings, GD&amp;T, tolerance analysis, and design for manufacturability.</p></article>
        <article><span>02</span><h2>Simulation &amp; Analysis</h2><p>Structural FEA, CFD, multiphase flow, thermal analysis, and evidence-based material selection.</p></article>
        <article><span>03</span><h2>Prototype &amp; Validate</h2><p>Additive manufacturing, test-rig development, instrumentation, benchmarking, and performance validation.</p></article>
      </div>
      <div className="toolkit"><p>Engineering software</p><div className="software-strip">{tools.map(tool => <div className="software-card" key={tool.name}><img src={tool.icon} alt="" aria-hidden="true" /><span>{tool.name}</span></div>)}</div></div>
    </section>
    <SiteFooter />
  </main>;
}
