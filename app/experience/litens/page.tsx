import { experiences } from "../../content";
import { ExperienceDetail } from "../../project-components";

export default function LitensExperiencePage() {
  return <ExperienceDetail experience={experiences.find(item => item.slug === "litens")!} />;
}
