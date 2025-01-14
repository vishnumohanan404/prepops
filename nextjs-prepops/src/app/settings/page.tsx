import AppLayout from "@/components/layout/AppLayout";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <AppLayout>
      <div className="mx-auto  max-w-5xl p-8">
        <h1 className="text-4xl font-bold mb-8 ">Settings</h1>
        <Separator />
      </div>
    </AppLayout>
  );
};

export default page;
