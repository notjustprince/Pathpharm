import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ArrowLeft, Award } from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Quiz } from "@shared/schema";

export default function QuizPage() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [quizComplete, setQuizComplete] = useState(false);

  const { data: quizzes = [] } = useQuery<Quiz[]>({
    queryKey: ["/api/quizzes"],
  });

  if (quizzes.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-muted-foreground">Loading quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = quizzes[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizzes.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(Boolean).length;
  const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const handleAnswer = (isCorrect: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: isCorrect,
    }));

    setTimeout(() => {
      if (currentQuestionIndex < quizzes.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  if (quizComplete) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h1 className="font-heading text-3xl font-bold mb-2">
                Quiz Complete!
              </h1>
              <p className="text-muted-foreground">
                Great job! Here are your results
              </p>
            </div>

            <div className="mb-8">
              <div className="text-6xl font-bold text-primary mb-2" data-testid="text-final-score">
                {score}%
              </div>
              <p className="text-muted-foreground">
                You got {correctCount} out of {quizzes.length} questions correct
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => setLocation("/")}
                data-testid="button-home"
              >
                Back to Home
              </Button>
              <Button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswers({});
                  setQuizComplete(false);
                }}
                data-testid="button-retake"
              >
                Retake Quiz
              </Button>
              <Button
                onClick={() => setLocation("/dashboard")}
                data-testid="button-dashboard"
              >
                View Dashboard
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const questionOptions = currentQuestion.options.map((text, idx) => ({
    id: String.fromCharCode(97 + idx),
    text,
  }));

  const correctAnswerLetter = String.fromCharCode(
    97 + currentQuestion.options.indexOf(currentQuestion.correctAnswer)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => setLocation("/")}
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Exit Quiz
        </Button>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-heading text-2xl font-bold">
              Anatomy Quiz
            </h1>
            <div className="text-sm text-muted-foreground" data-testid="text-question-counter">
              Question {currentQuestionIndex + 1} of {quizzes.length}
            </div>
          </div>
          <Progress value={progress} className="h-2" />
          {answeredCount > 0 && (
            <div className="mt-2 text-sm text-muted-foreground text-right" data-testid="text-current-score">
              Current Score: {score}%
            </div>
          )}
        </div>

        <QuizCard
          key={currentQuestion.id}
          question={currentQuestion.question}
          options={questionOptions}
          correctAnswer={correctAnswerLetter}
          explanation={currentQuestion.explanation}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
