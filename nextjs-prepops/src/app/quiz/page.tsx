import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import AppLayout from "@/components/layout/AppLayout";
import { Separator } from "@/components/ui/separator";
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
  title: string;
  description: string;
  level: string;
  slug: {
    current: string; // Adjusted to represent the slug object
  };
}
const TOPIC_QUERY = `*[_type == "topics"]`;
const page = async () => {
  const topics = [...new Set(await client.fetch<Topic[]>(TOPIC_QUERY))];

  return (
    <AppLayout>
      <div className="mx-auto  max-w-5xl p-8">
        <h1 className="text-4xl font-bold mb-2 ">Quiz</h1>
        <p className="mb-7 text-muted-foreground">Pick a topic</p>
        <Separator />
        {/* <div className="mt-8"></div> */}
        <div className="flex flex-1 flex-col gap-4 mt-8">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {topics.map((item, idx) => (
              <Link href={`/quiz/${item.slug.current}`}>
                <Card
                  key={item.title + idx}
                  className="aspect-video rounded-xl hover:cursor-pointer"
                >
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

        {/* <ul className="flex flex-col gap-y-4">
          {quizes.map((post) => (
            <li className="" key={post._id}>
              <div>
                <h3 className="text-xl font-semibold">{post.topic}</h3>
                <h3 className="text-xl font-semibold">{post.subtopic}</h3>
                <h2 className="text-xl font-semibold">{post.question}</h2>
                <div>
                  <ul>
                    {post.options.map((option: string, idx: number) => (
                      <li key={idx + option}>{option}</li>
                    ))}
                  </ul>
                </div>
                <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </AppLayout>
  );
};

export default page;
