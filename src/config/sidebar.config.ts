import type { IconName } from "../icons/iconMap";

export type SidebarItemConfig = {
  id: string;
  title: string;
  icon: IconName;
  items: {
    label: string;
    to: string;
  }[];
};

export const SIDEBAR_ITEMS: SidebarItemConfig[] = [
  {
    id: "dashboards",
    title: "Dashboards",
    icon: "speed",
    items: [
      { label: "Analytics", to: "/analytics" },
      { label: "CRM", to: "/crm" },
      { label: "Ecommerce", to: "/" },
      { label: "Crypto", to: "/crypto" },
      { label: "Projects", to: "/projects" },
      { label: "NFT", to: "/nft" },
      { label: "Job", to: "/job" },
    ],
  },
  {
    id: "Pages",
    title: "Pages",
    icon: "apps",
    items: [
      { label: "Team", to: "/team" },
      { label: "FAQs", to: "/faqs" },
      { label: "Privacy", to: "/privacy" },
    ],
  },
];
