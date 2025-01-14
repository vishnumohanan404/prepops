"use client";

import * as React from "react";
import {
  BookOpen,
  Frame,
  GitBranchIcon,
  LoaderPinwheelIcon,
  Map,
  PieChart,
  Settings2,
  SquareAsteriskIcon,
} from "lucide-react";

import { NavMain } from "@/components/app/nav-main";
// import { NavProjects } from "@/components/nav-projects"
// import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "../app/logo";

// This is sample data.
const navMain = [
  {
    title: "Playground",
    url: "/playground",
    icon: SquareAsteriskIcon,
    isActive: true,
    items: [
      {
        title: "Quizzes",
        url: "/quiz",
      },
      {
        title: "Notes",
        url: "/note",
      },
      {
        title: "Cheetsheets",
        url: "cheetsheet",
      },
    ],
  },
  {
    title: "Progress",
    url: "/progress",
    icon: LoaderPinwheelIcon,
    items: [
      {
        title: "Tracking",
        url: "/tracking",
      },
      {
        title: "Leaderboard",
        url: "/leaderboard",
      },
      {
        title: "Goals",
        url: "/goal",
      },
    ],
  },
  // {
  //   title: "Documentation",
  //   url: "/docs",
  //   icon: BookOpen,
  //   items: [
  //     {
  //       title: "Introduction",
  //       url: "/intro",
  //     },
  //     {
  //       title: "Get Started",
  //       url: "/get-s",
  //     },
  //     {
  //       title: "Tutorials",
  //       url: "#",
  //     },
  //     {
  //       title: "Changelog",
  //       url: "#",
  //     },
  //   ],
  // },
  {
    title: "Changelogs",
    url: "/changelogs",
    icon: GitBranchIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings2,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full">
          <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
