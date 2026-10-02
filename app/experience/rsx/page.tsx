import { experiences } from "../../content";
import { ExperienceDetail } from "../../project-components";

export default function RsxExperiencePage() {
  return <ExperienceDetail experience={experiences.find(item => item.slug === "rsx")!} />;
}
