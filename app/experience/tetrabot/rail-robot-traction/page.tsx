import { experiences } from "../../../content";
import { WorkProjectDetail } from "../../../project-components";

export default function RailRobotTractionPage() {
  const experience = experiences.find(item => item.slug === "tetrabot")!;
  return <WorkProjectDetail experience={experience} project={experience.projects.find(item => item.slug === "rail-robot-traction")!} />;
}
