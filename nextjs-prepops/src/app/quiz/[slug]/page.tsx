import React from "react";
import { sanityClient } from "@/sanity/client";
import AppLayout from "@/components/layout/AppLayout";
import { Topic } from "../page";

import QuizCard from "@/components/quiz/quiz-card";
import { Separator } from "@/components/ui/separator";
import PageLayout from "@/components/layout/page-layout";

const QUIZ_QUERY = `*[_type == "quiz" && topic->slug.current == $slug]{
    topic->{
      title,
      description,
      slug
    },
    subtopic,
    question,
    options,
    answerIndex,
    slug,
    publishedAt,
    _id
  }`;

interface QuizPageProps {
  params: {
    slug: string;
  };
}
export interface Quiz {
  topic: Topic; // Reference to the Topic type
  subtopic: string;
  question: string;
  options: string[];
  answerIndex: number;
  slug: string;
  publishedAt: string; // ISO 8601 date string
  _id: string;
}
const QuizPage = async ({ params }: QuizPageProps) => {
  const { slug } = await params;

  // Fetch quiz data for the given slug
  const quiz = await sanityClient.fetch<Quiz[]>(QUIZ_QUERY, { slug });
  if (!quiz) {
    return (
      <AppLayout>
        <div className="mx-auto max-w-5xl p-8">
          <h1 className="text-4xl font-bold mb-4">Quiz Not Found</h1>
          <p>We couldn’t find the quiz you were looking for.</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <PageLayout title={slug}>
        <div className="flex justify-center gap-4 mt-8">
          <QuizCard questions={quiz} topic={slug} />
        </div>
      </PageLayout>
    </AppLayout>
  );
};

export default QuizPage;
