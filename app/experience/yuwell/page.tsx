import { experiences } from "../../content";
import { ExperienceDetail } from "../../project-components";

export default function YuwellExperiencePage() {
  return <ExperienceDetail experience={experiences.find(item => item.slug === "yuwell")!} />;
}
