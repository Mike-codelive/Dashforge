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
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    id: "Apps",
    title: "Apps",
    icon: "apps",
    items: [
      { label: "Calendar", to: "/calendar" },
      { label: "Chat", to: "/chat" },
      { label: "Email", to: "/email" },
    ],
  },
];
