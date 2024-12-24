import { AiOutlineHome } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { VscPinned } from "react-icons/vsc";
import { FaUsers, FaClipboardList, FaShoppingCart } from "react-icons/fa";

export const iconMap = {
  AiOutlineHome,
  BsClock,
  VscPinned,
  FaUsers,
  FaClipboardList,
  FaShoppingCart,
};

export interface Link {
  name: string;
  icon: keyof typeof iconMap;
  path: string;
}

export interface Section {
  title: string;
  links: Link[];
}

export const SidebarData: Section[] = [
  {
    title: "My Work",
    links: [
      { name: "Home", icon: "AiOutlineHome", path: "/" },
      { name: "Recent", icon: "BsClock", path: "/recent" },
      { name: "Pinned", icon: "VscPinned", path: "/pinned" },
      { name: "Agent Skill", icon: "FaUsers", path: "/agent-skill" },
    ],
  },
  {
    title: "Customers",
    links: [
      { name: "Accounts", icon: "FaUsers", path: "/accounts" },
      { name: "Contacts", icon: "FaClipboardList", path: "/contacts" },
    ],
  },
  {
    title: "Sales",
    links: [
      { name: "Leads", icon: "FaShoppingCart", path: "/leads" },
      { name: "Opportunities", icon: "FaClipboardList", path: "/opportunities" },
    ],
  },
];
