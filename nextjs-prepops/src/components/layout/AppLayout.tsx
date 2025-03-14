import { AppSidebar } from "@/components/layout/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { ThemeToggle } from "../landing/theme-toggle";
import { Separator } from "../ui/separator";
import { DynamicBreadcrumb } from "../app/dynamic-breadcrumb";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 fixed bg-inherit w-full">
          <div className="flex items-center gap-2 px-4 justify-between ">
            <SidebarTrigger className="-ml-1 w-4 h-4" />
            <Separator orientation="vertical" className="h-4" />
            <ThemeToggle />
            <Separator orientation="vertical" className="h-4" />
            <DynamicBreadcrumb />
          </div>
        </header>
        <div className="mt-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
