import { experiences } from "../../../content";
import { WorkProjectDetail } from "../../../project-components";

export default function OxygenConcentratorPage() {
  const experience = experiences.find(item => item.slug === "yuwell")!;
  return <WorkProjectDetail experience={experience} project={experience.projects.find(item => item.slug === "oxygen-concentrator")!} />;
}
