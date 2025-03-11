import React from "react";
import { sanityClient } from "@/sanity/client";
import PageLayout from "@/components/layout/page-layout";
import AppLayout from "@/components/layout/AppLayout";
import { Note } from "@/types";

const NOTE_QUERY = `*[_type == "note" && topic->slug.current == $slug]{
  topic->{
      title,
      description,
      slug
  },
  subtopic,
  level,
  description,
  body,
  slug,
  publishedAt,
  _id
}`;

interface NotePageProps {
  params: {
    slug: string;
  };
}
const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

const NotePage = async ({ params }: NotePageProps) => {
  const { slug } = await params;
  
  // Fetch quiz data for the given slug
  const notes = await sanityClient.fetch<Note[]>(NOTE_QUERY, {
    slug,
  });

  if (!notes.length) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center gap-4 mt-8 min-h-60 mx-auto max-w-5xl p-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-4">Notes Not Found</h1>
            <p>We couldn’t find the notes for this topic.</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <PageLayout title={slug}>
        <div className="mt-8">
          <div>
            {notes?.map((item) => (
              <div
                key={item.slug?.current}
                className="border border-gray-800 rounded-xl p-5 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 bg-gray-900/50 hover:bg-gray-900"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-100 mb-1">
                      {item.subtopic}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                      levelColors[item.level] || "bg-gray-800 text-gray-200"
                    }`}
                  >
                    {item.level}
                  </span>
                </div>

                <div className="mt-4 prose prose-invert">
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export default NotePage;
