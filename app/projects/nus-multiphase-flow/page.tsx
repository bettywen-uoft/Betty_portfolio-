import { projects } from "../../content";
import { PortfolioProjectDetail } from "../../project-components";

export default function NusMultiphaseFlowPage() {
  return <PortfolioProjectDetail project={projects.find(item => item.slug === "nus-multiphase-flow")!} />;
}
