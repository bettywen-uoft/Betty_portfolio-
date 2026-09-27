import { experiences } from "../../content";
import { ExperienceDetail } from "../../project-components";

export default function TetrabotExperiencePage() {
  return <ExperienceDetail experience={experiences.find(item => item.slug === "tetrabot")!} />;
}
