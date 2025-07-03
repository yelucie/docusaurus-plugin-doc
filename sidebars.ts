import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docsSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: ["installation", "configuration"],
    },
    {
      type: "category",
      label: "Integration",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: ["github-setup"],
    },
    {
      type: "category",
      label: "Core Features",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: ["features", "plugins", "themes"],
    },
    {
      type: "category",
      label: "Architecture",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "plugin-architecture",
        "markdown-processing",
        "content-synchronization",
      ],
    },
    {
      type: "category",
      label: "Advanced Topics",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "custom-node-development",
        "custom-transformer-development",
        "custom-git-providers",
      ],
    },
  ],
};

export default sidebars;
