import AppLayout from "@/components/layout/AppLayout";
import PageLayout from "@/components/layout/page-layout";
import { sanityClient } from "@/sanity/client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

export interface Topic {
  _id: string;
  title: string;
  description: string;
  level: string;
  slug: {
    current: string; // Adjusted to represent the slug object
  };
}
const TOPIC_QUERY = `*[_type == "topics"]`;
const page = async () => {
  const topics = await sanityClient.fetch<Topic[]>(TOPIC_QUERY);

  return (
    <AppLayout>
      <PageLayout title="Notes" subtitle="Topic-wise notes">
        <div className="flex flex-1 flex-col gap-4 mt-8">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {topics.map((item, idx) => (
              <Link href={`/note/${item.slug.current}`} key={item._id}>
                <Card className="aspect-video rounded-xl hover:cursor-pointer hover-interactive">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Badge>{item.level}</Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export default page;
