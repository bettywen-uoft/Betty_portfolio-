import { projects } from "../../content";
import { PortfolioProjectDetail } from "../../project-components";

export default function VlaRoboticsPage() {
  return <PortfolioProjectDetail project={projects.find(item => item.slug === "vla-robotics")!} />;
}
