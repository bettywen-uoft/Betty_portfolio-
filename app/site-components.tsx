import type { ReactNode } from "react";
import { sitePath } from "./paths";

const ArrowIcon = () => <span aria-hidden="true">↗</span>;

export function SiteHeader() {
  return <header className="site-header">
    <a className="brand" href={sitePath("/")} aria-label="Betty Wen home">BW<span className="brand-dot">.</span></a>
    <nav aria-label="Main navigation"><a href={sitePath("/#capabilities")}>Capabilities</a><a href={sitePath("/#experience-directory")}>Experience</a><a href={sitePath("/#projects-directory")}>Projects</a><a href={sitePath("/#resume")}>Résumé</a></nav>
    <a className="header-contact" href="mailto:shu.wen@mail.utoronto.ca">Let&apos;s talk <ArrowIcon /></a>
  </header>;
}

export function SiteFooter() {
  return <footer><p className="eyebrow">Let&apos;s build something that works.</p><a className="footer-email" href="mailto:shu.wen@mail.utoronto.ca">shu.wen@mail.utoronto.ca <ArrowIcon /></a><div className="footer-bottom"><span>© 2026 Betty Wen</span><span>Mechanical Engineer · English / Mandarin</span><a href={sitePath("/")}>Back home ↑</a></div></footer>;
}

export function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <section className="detail-hero"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><div className="detail-intro-copy"><p>{description}</p>{action}</div></section>;
}
