import { experiences } from "../../../content";
import { WorkProjectDetail } from "../../../project-components";

export default function GearTestRigPage() {
  const experience = experiences.find(item => item.slug === "litens")!;
  return <WorkProjectDetail experience={experience} project={experience.projects.find(item => item.slug === "gear-test-rig")!} />;
}
