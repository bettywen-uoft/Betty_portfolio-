import { experiences } from "../../../content";
import { WorkProjectDetail } from "../../../project-components";

export default function VehiclePlatformPage() {
  const experience = experiences.find(item => item.slug === "rsx")!;
  return <WorkProjectDetail experience={experience} project={experience.projects.find(item => item.slug === "vehicle-platform")!} />;
}
