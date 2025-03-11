import React, { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

const PageLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto  max-w-5xl p-8">
      <h1 className="text-4xl font-bold mb-2 capitalize">{title}</h1>
      <p className="mb-7 text-muted-foreground">{subtitle}</p>
      <Separator />
      {children}
    </div>
  );
};

export default PageLayout;
