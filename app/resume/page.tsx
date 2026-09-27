import { PageIntro, SiteFooter, SiteHeader } from "../site-components";
import { sitePath } from "../paths";

export default function ResumePage() {
  return <main>
    <SiteHeader />
    <PageIntro eyebrow="Résumé" title="Experience at a glance." description="View the complete résumé below or download a PDF copy." action={<a className="button primary" href={sitePath("/Betty_Wen_Resume_2026_09.pdf")} download>Download PDF <span>↓</span></a>} />
    <section className="resume section detail-section">
      <div className="resume-layout"><div className="resume-document"><iframe src={`${sitePath("/Betty_Wen_Resume_2026_09.pdf")}#view=FitH`} title="Betty Wen résumé" /></div><aside><span>PDF / 01</span><p>The embedded file can be viewed directly on desktop. Use the download button for a full-size copy.</p><a className="button primary" href={sitePath("/Betty_Wen_Resume_2026_09.pdf")} download>Download résumé <span>↓</span></a></aside></div>
    </section>
    <SiteFooter />
  </main>;
}
