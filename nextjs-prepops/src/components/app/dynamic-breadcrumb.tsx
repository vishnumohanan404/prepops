"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";
import { capitalizeFirstLetter } from "@/lib/utils";

export function DynamicBreadcrumb() {
  const pathname = usePathname(); // Get the current path
  console.log("pathname :>> ", pathname);
  const pathSegments = pathname.split("/").filter(Boolean); // Remove empty values

  return (
    <Breadcrumb className="py-3">
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>
                    {capitalizeFirstLetter(decodeURIComponent(segment))}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>
                    {capitalizeFirstLetter(decodeURIComponent(segment))}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
