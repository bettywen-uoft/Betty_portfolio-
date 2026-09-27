import type { Experience, PortfolioProject, WorkProject } from "./content";
import { PageIntro, SiteFooter, SiteHeader } from "./site-components";
import { sitePath } from "./paths";

type ProjectCardProps = {
  href: string;
  image?: string;
  alt?: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
};

export function ProjectCard({ href, image, alt = "", eyebrow, title, description, meta }: ProjectCardProps) {
  return <a className="project-index-card" href={href}>
    <div className="project-card-media">{image ? <img src={image} alt={alt} /> : <div className="project-card-placeholder" aria-hidden="true"><span>PROJECT IMAGE</span><strong>{meta}</strong></div>}</div>
    <div className="project-card-copy">
      <div className="project-card-meta"><span>{eyebrow}</span><span>{meta}</span></div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="project-card-link">View details <span>↗</span></span>
    </div>
  </a>;
}

export function ExperienceDetail({ experience }: { experience: Experience }) {
  return <main>
    <SiteHeader />
    <PageIntro eyebrow={`Experience / ${experience.company}`} title={experience.role} description={experience.overview} action={<a className="button ghost" href={sitePath("/#experience-directory")}>← All experience</a>} />
    <section className="project-index section detail-section">
      <div className="directory-heading"><p className="eyebrow">Selected projects</p><div><span>{experience.period}</span><span>{experience.location}</span></div></div>
      <div className="project-index-grid">{experience.projects.map(project => <ProjectCard key={project.slug} href={sitePath(`/experience/${experience.slug}/${project.slug}`)} image={project.media?.[0]?.src} alt={project.media?.[0]?.alt} eyebrow={project.code} title={project.title} description={project.summary} meta={experience.company.toUpperCase()} />)}</div>
    </section>
    <SiteFooter />
  </main>;
}

export function WorkProjectDetail({ experience, project }: { experience: Experience; project: WorkProject }) {
  return <main>
    <SiteHeader />
    <PageIntro eyebrow={`${experience.company} / ${project.code}`} title={project.title} description={project.summary} action={<a className="button ghost" href={sitePath("/#experience-directory")}>← Back to experience projects</a>} />
    <section className="single-project section detail-section">
      <div className="single-project-meta"><span>{experience.period}</span><span>{experience.location}</span></div>
      {project.specs && <div className="rig-specs">{project.specs.map(spec => <div key={spec.label}><strong>{spec.value}</strong><span>{spec.label}</span></div>)}</div>}
      {project.principles && <div className="rig-principles">{project.principles.map(principle => <div key={principle.title}><h2>{principle.title}</h2><p>{principle.text}</p></div>)}</div>}
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.media && <div className="project-detail-gallery">{project.media.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div>}
    </section>
    <SiteFooter />
  </main>;
}

export function PortfolioProjectDetail({ project }: { project: PortfolioProject }) {
  return <main>
    <SiteHeader />
    <PageIntro eyebrow={`${project.category} / ${project.company}`} title={project.role} description={project.overview} action={<a className="button ghost" href={sitePath("/#projects-directory")}>← Back to projects</a>} />
    <section className="single-project section detail-section">
      <div className="single-project-meta"><span>{project.period}</span><span>{project.location}</span></div>
      <div className="standalone-project-copy single-project-copy"><div><span>Project approach</span><p>{project.description}</p></div></div>
      <div className="project-actions"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.download && <a className="button primary" href={project.download.href} download>{project.download.label} <span>↓</span></a>}</div>
      {project.media && <div className="project-detail-gallery">{project.media.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}</div>}
    </section>
    <SiteFooter />
  </main>;
}
