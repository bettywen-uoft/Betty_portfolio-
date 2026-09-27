import { experiences, projects, tools } from "./content";
import { ProjectCard } from "./project-components";
import { SiteFooter, SiteHeader } from "./site-components";
import { sitePath } from "./paths";

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero home-hero" id="top">
      <div className="hero-copy">
        <div className="hero-kicker">Mechanical Engineering Portfolio</div>
        <h1>Betty Wen</h1>
        <p className="hero-role">Mechanical Design · Mechatronics · Product Development</p>
        <p className="hero-summary">Versatile mechanical engineering student specializing in solid mechanics, design, and mechatronics, with over three years of hands-on experience designing and analyzing mechanical components and systems. Interested in robotics, automotive systems, intelligent machines, and real-world engineering applications.</p>
        <div className="hero-actions"><a className="button primary" href="#experience-directory">Explore experience <span>↓</span></a><a className="button ghost" href={sitePath("/Betty_Wen_Resume_2026_09.pdf")} download>Download résumé</a></div>
      </div>
      <div className="portrait-panel">
        <div className="panel-bar"><span>PROFILE / 01</span><span>TORONTO, ON</span></div>
        <div className="portrait-frame"><img src={sitePath("/shu-wen-portrait.jpg")} alt="Portrait of Betty Wen" /></div>
        <div className="panel-footer"><span>B.A.Sc. Mechanical Engineering</span><span>University of Toronto</span></div>
      </div>
    </section>

    <section className="capabilities section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading light"><p className="eyebrow">Capabilities</p><h2 id="capabilities-title">A practical toolkit for complex engineering problems.</h2></div>
      <div className="capability-grid">
        <article><span>01</span><h2>Mechanical Design</h2><p>3D CAD, assemblies, detailed drawings, GD&amp;T, tolerance analysis, and design for manufacturability.</p></article>
        <article><span>02</span><h2>Simulation &amp; Analysis</h2><p>Structural FEA, CFD, multiphase flow, thermal analysis, and evidence-based material selection.</p></article>
        <article><span>03</span><h2>Prototype &amp; Validate</h2><p>Additive manufacturing, test-rig development, instrumentation, benchmarking, and performance validation.</p></article>
      </div>
      <div className="toolkit"><p>Engineering software</p><div className="software-strip">{tools.map(tool => <div className="software-card" key={tool.name}><img src={tool.icon} alt="" aria-hidden="true" /><span>{tool.name}</span></div>)}</div></div>
    </section>

    <section className="homepage-directory section" id="experience-directory" aria-labelledby="experience-title">
      <div className="homepage-section-title"><p className="eyebrow">Work directory</p><h2 id="experience-title">Experience</h2><span>/{String(experiences.length).padStart(2, "0")}</span></div>
      <div className="project-index-grid">{experiences.map(experience => <ProjectCard
        key={experience.slug}
        href={sitePath(`/experience/${experience.slug}`)}
        image={experience.cardImage}
        alt={experience.cardAlt}
        eyebrow={`${experience.period} / ${experience.location}`}
        title={experience.company}
        description={[experience.role, experience.overview].filter(Boolean).join(". ")}
        meta={`${experience.projects.length} ${experience.projects.length === 1 ? "PROJECT" : "PROJECTS"}`}
      />)}</div>
    </section>

    <section className="homepage-directory projects-home section" id="projects-directory" aria-labelledby="projects-title">
      <div className="homepage-section-title"><p className="eyebrow">Project directory</p><h2 id="projects-title">Projects and Research</h2><span>/{String(projects.length).padStart(2, "0")}</span></div>
      <div className="project-index-grid">{projects.map(project => <ProjectCard key={project.slug} href={sitePath(`/projects/${project.slug}`)} image={project.media?.[0]?.src} alt={project.media?.[0]?.alt} eyebrow={`${project.category} / ${project.period}`} title={project.role} description={project.overview} meta={project.company.toUpperCase()} />)}</div>
    </section>

    <section className="resume section" id="resume" aria-labelledby="resume-title">
      <div className="resume-heading"><div><p className="eyebrow">Résumé</p><h2 id="resume-title">Experience at a glance.</h2></div><a className="button primary resume-download" href={sitePath("/Betty_Wen_Resume_2026_09.pdf")} download>Download PDF <span>↓</span></a></div>
      <div className="resume-layout"><div className="resume-document"><iframe src={`${sitePath("/Betty_Wen_Resume_2026_09.pdf")}#view=FitH`} title="Betty Wen résumé" /></div><aside><span>PDF / 01</span><p>The complete résumé is displayed here. Download the PDF for a full-size copy.</p><a className="button primary" href={sitePath("/Betty_Wen_Resume_2026_09.pdf")} download>Download résumé <span>↓</span></a></aside></div>
    </section>
    <SiteFooter />
  </main>;
}
