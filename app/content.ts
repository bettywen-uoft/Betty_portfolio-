import { sitePath } from "./paths";

export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
};

export type WorkProject = {
  slug: string;
  code: string;
  title: string;
  summary: string;
  tags: string[];
  media?: MediaItem[];
  specs?: { value: string; label: string }[];
  principles?: { title: string; text: string }[];
};

export type Experience = {
  slug: string;
  cardImage?: string;
  cardAlt?: string;
  index: string;
  period: string;
  role: string;
  company: string;
  location: string;
  overview?: string;
  projects: WorkProject[];
};

export const experiences: Experience[] = [
  {
    slug: "tetrabot",
    cardImage: sitePath("/tetrabot-traction-side.png"),
    cardAlt: "Tetrabot rail-robot traction module",
    index: "01",
    period: "MAY — AUG 2026",
    role: "Mechanical Design Engineering Intern",
    company: "Tetrabot",
    location: "China",
    overview: "Contributed to three design iterations of a ceiling-mounted EV charging robot, producing SolidWorks models, system renderings, and manufacturing documentation while incorporating engineering reviews and factory feedback to improve appearance, installation practicality, and compatibility with the existing platform.",
    projects: [{
      slug: "rail-robot-traction",
      code: "PROJECT 01",
      title: "Rail-Robot Traction Preload Module",
      summary: "The mechanism uses four springs to provide approximately 30 N of total downward preload, keeping the drive wheels firmly engaged with the rail to reduce slip and vibration. Rubber-coated bearings provide auxiliary rolling support, stabilize the assembly, and help the robot travel more smoothly along the rail. The design reuses the existing mounting holes for straightforward installation and maintenance.",
      tags: ["Four-Spring Preload", "30 N Downward Preload", "Rubber-Coated Bearings", "Existing-Hole Mounting"],
      media: [
        { src: sitePath("/tetrabot-traction-section.png"), alt: "Section view of the traction preload module", caption: "Section view: spring assemblies and rubber-coated bearings work together to stabilize rail contact." },
        { src: sitePath("/tetrabot-traction-side.png"), alt: "Side view of the traction preload module installed on the rail", caption: "Side view: the preload module maintains consistent wheel contact for smoother travel along the rail." },
      ],
    }],
  },
  {
    slug: "litens",
    cardImage: sitePath("/litens-test-rig-powered.jpg"),
    cardAlt: "Powered modular gear-train test rig",
    index: "02",
    period: "MAY 2025 — MAY 2026",
    role: "Thermal & Mechanical Engineer",
    company: "Litens Automotive Group",
    location: "Ontario, Canada",
    projects: [
      { slug: "cycloidal-actuator", code: "PROJECT 01", title: "70:1 Humanoid Cycloidal Actuator", summary: "Designed, assembled, and validated nine actuators across three design iterations, followed by torque-speed characterization and competitive benchmarking.", tags: ["Actuator Design", "Assembly", "Validation"] },
      {
        slug: "gear-test-rig",
        code: "PROJECT 02",
        title: "Modular Gear-Train Test Rig",
        summary: "Designed a single-plate test platform with interchangeable drive, measurement, coupling, and load modules for both traceable static calibration and powered gear-train characterization.",
        specs: [{ value: "3 N·m", label: "Deadweight calibration" }, { value: "40 N·m", label: "Powered load testing" }, { value: "2 Modes", label: "Static and dynamic" }],
        principles: [
          { title: "Deadweight mode", text: "A known mass acts through a measured lever arm to generate a traceable static torque, τ = m·g·r. This configuration supports sensor calibration and low-torque verification up to 3 N·m." },
          { title: "Powered load mode", text: "A motor drives the gear train while an inline transducer measures transmitted torque and a Magtrol brake applies controlled resistance, enabling dynamic torque-speed testing up to 40 N·m." },
        ],
        tags: ["Torque Measurement", "Gear Testing", "Instrumentation", "Modular Fixture"],
        media: [
          { src: sitePath("/litens-test-rig-configuration.jpg"), alt: "Side view of the modular gear-train test rig", caption: "Modular single-plate layout with interchangeable drive, coupling, support, and test components." },
          { src: sitePath("/litens-test-rig-powered.jpg"), alt: "Powered test-rig configuration with torque sensor and Magtrol brake", caption: "Powered configuration with inline torque measurement and controlled brake loading." },
        ],
      },
      { slug: "ev-components", code: "PROJECT 03", title: "EV Thermal & Mechanical Components", summary: "Designed and optimized prototype components and assemblies for additive manufacturing, integrating precision measurement data and hands-on testing into each design cycle.", tags: ["Thermal Design", "Rapid Prototyping", "Metrology"] },
    ],
  },
  {
    slug: "yuwell",
    index: "03",
    period: "JUN — AUG 2024",
    role: "Structural Engineer",
    company: "Yuwell Medical Devices",
    location: "Nanjing, China",
    overview: "Improved the thermal performance, vibration control, and manufacturability of an oxygen concentrator compressor module through iterative design and testing.",
    projects: [{ slug: "oxygen-concentrator", code: "PROJECT 01", title: "Oxygen Concentrator Thermal Module", summary: "Designed and 3D-printed ventilation and vibration-damping components, then validated the system across multiple measurement points to keep the compressor below 55°C during extended operation.", tags: ["Thermal Design", "3D Printing", "Product Testing"] }],
  },
];

export type PortfolioProject = {
  slug: string;
  index: string;
  category: string;
  period: string;
  role: string;
  company: string;
  location: string;
  overview: string;
  description: string;
  tags: string[];
  media?: MediaItem[];
  download?: { href: string; label: string };
};

export const projects: PortfolioProject[] = [
  {
    slug: "vla-robotics",
    index: "01",
    category: "Project",
    period: "SEP 2026 — PRESENT",
    role: "VLA-Based Robotic Tasks",
    company: "University of Toronto",
    location: "Toronto, Canada",
    overview: "This capstone explores how a pretrained vision-language-action policy can be adapted to everyday household manipulation, with a focus on reliable performance across changing scenes, object placements, and task configurations.",
    description: "Using π0.5 as the starting policy, the project develops bed-making and dishwasher-loading demonstrations from synchronized camera views, robot states, language commands, and action sequences. The resulting rollouts are evaluated to understand where task-specific fine-tuning improves performance and where the policy still requires refinement.",
    tags: ["π0.5", "Vision-Language-Action", "Machine Learning", "Fine-Tuning", "Robotics"],
    media: [
      { src: sitePath("/vla-dishwasher-task.png"), alt: "Robot operating in a simulated dishwasher-loading environment", caption: "RoboCasa dishwasher-loading environment" },
      { src: sitePath("/vla-blanket-rollout.png"), alt: "Pi 0.5 robot policy rollout in a simulated blanket-folding environment", caption: "π0.5 rollout in the blanket-folding environment" },
    ],
  },
  {
    slug: "nus-multiphase-flow",
    index: "02",
    category: "Research",
    period: "MAY — JUN 2024",
    role: "Multiphase Flow & Pipeline Analysis",
    company: "NUS Multiphase Flow Loop Laboratory",
    location: "National University of Singapore",
    overview: "This UROP research investigated horizontal air-water annular flow, comparing experimental footage from the NUS Multiphase Flow Loop Lab with CFD predictions of phase-interface behaviour.",
    description: "A 5 m pipe model in ANSYS Fluent used the Volume of Fluid method with SST k-ω turbulence. Boundary conditions were derived from measured superficial velocities, and mesh-independence checks were used to assess reliability. The simulated phase contours reproduced the water film near the lower pipe wall and the wavy gas-liquid interface, while remaining differences highlighted the effect of mesh resolution and turbulence-model calibration.",
    tags: ["ANSYS Fluent", "CFD", "VOF", "SST k-ω", "Mesh Independence", "Technical Research"],
    media: [
      { src: sitePath("/nus-annular-flow-experiment.png"), alt: "High-speed footage of annular air-water flow in the NUS test facility", caption: "Experimental reference: high-speed footage from the NUS Multiphase Flow Test Facility." },
      { src: sitePath("/nus-vof-phase-contour.png"), alt: "VOF phase contour from the annular-flow CFD model", caption: "Simulation result: VOF phase contour showing the developing air-water interface." },
    ],
    download: { href: sitePath("/Betty_Wen_NUS_UROP_Report.pdf"), label: "Download research report" },
  },
];

export const tools = [
  { name: "SolidWorks", icon: sitePath("/software-solidworks.svg") },
  { name: "ANSYS", icon: sitePath("/software-ansys.svg") },
  { name: "COMSOL", icon: sitePath("/software-comsol.svg") },
  { name: "Python", icon: sitePath("/software-python.svg") },
  { name: "MATLAB", icon: sitePath("/software-matlab.svg") },
  { name: "AutoCAD", icon: sitePath("/software-autocad.svg") },
  { name: "Fusion 360", icon: sitePath("/software-fusion.svg") },
  { name: "LTspice", icon: sitePath("/software-ltspice.svg") },
];
