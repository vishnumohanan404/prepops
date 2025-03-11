"use client";
import { Quiz } from "@/app/quiz/[slug]/page";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Timer, XCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const QuizCard = ({
  questions,
  topic,
}: {
  questions: Quiz[];
  topic: string;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (value: string) => {
    const answerIndex = parseInt(value);
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answerIndex) {
      setScore(score + 1);
    }
    setShowAnswer(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowAnswer(false);
      }
    }, 1500);
  };
  return (
    <>
      {questions ? (
        <Card className="flex-1 w-full justify-center max-w-4xl min-h-auto p-8 bg-black/40 backdrop-blur-xl border-white/10 text-white relative overflow-hidden py-10">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />

          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              {/* <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {topic}
              </h1> */}
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-lg flex items-center gap-2">
                <Timer className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <Progress
              value={((currentQuestion + 1) / questions.length) * 100}
              className="h-2 bg-white/10"
            />
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold leading-relaxed">
              {questions[currentQuestion].question}
            </h2>
          </div>

          {/* Options */}
          <RadioGroup
            onValueChange={handleAnswer}
            value={selectedAnswer?.toString()}
            className="grid grid-cols-2 gap-4 mb-8"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={cn(
                  "group relative flex items-center space-x-3 rounded-xl border border-white/10 p-6 transition-all duration-200 hover:border-primary hover:bg-purple-500/5",
                  selectedAnswer === index &&
                    "border-purple-500 bg-purple-500/10",
                  showAnswer &&
                    index === questions[currentQuestion].answerIndex &&
                    "border-green-500 bg-green-500/10",
                  showAnswer &&
                    selectedAnswer === index &&
                    index !== questions[currentQuestion].answerIndex &&
                    "border-red-500 bg-red-500/10"
                )}
              >
                <div
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors",
                    "group-hover:border-purple-500 group-hover:text-purple-400",
                    selectedAnswer === index &&
                      "border-purple-500 text-purple-400",
                    showAnswer &&
                      index === questions[currentQuestion].answerIndex &&
                      "border-green-500 text-green-400",
                    showAnswer &&
                      selectedAnswer === index &&
                      index !== questions[currentQuestion].answerIndex &&
                      "border-red-500 text-red-400"
                  )}
                >
                  <RadioGroupItem
                    value={index.toString()}
                    id={`option-${index}`}
                    className="hidden"
                  />
                  {String.fromCharCode(65 + index)}
                </div>
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer font-medium"
                >
                  {option}
                </Label>
                {showAnswer &&
                  index === questions[currentQuestion].answerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                {showAnswer &&
                  selectedAnswer === index &&
                  index !== questions[currentQuestion].answerIndex && (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
              </div>
            ))}
          </RadioGroup>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="bg-white/5 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">
                Score: <span className="text-purple-400">{score}</span>/
                {questions.length}
              </span>
            </div>
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null || showAnswer}
              className="bg-primary hover:bg-blue-500 px-4 py-2 text-lg font-normal text-base"
            >
              Next Question
            </Button>
          </div>
        </Card>
      ) : (
        <div>No quiz available for this topic</div>
      )}
    </>
  );
};

export default QuizCard;
