import { QuizCard } from "@/components/QuizCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { ArrowLeft, Award } from "lucide-react";
import { useLocation } from "wouter";

interface Question {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export default function QuizPage() {
  const [, setLocation] = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [quizComplete, setQuizComplete] = useState(false);

  // TODO: remove mock functionality - this will come from API
  const questions: Question[] = [
    {
      id: "1",
      question: "Which chamber of the heart receives oxygenated blood from the lungs?",
      options: [
        { id: "a", text: "Right atrium" },
        { id: "b", text: "Left atrium" },
        { id: "c", text: "Right ventricle" },
        { id: "d", text: "Left ventricle" },
      ],
      correctAnswer: "b",
      explanation: "The left atrium receives oxygenated blood from the lungs via the pulmonary veins. This blood is then pumped into the left ventricle and distributed to the body.",
    },
    {
      id: "2",
      question: "What is the main function of the mitral valve?",
      options: [
        { id: "a", text: "Controls blood flow from right atrium to right ventricle" },
        { id: "b", text: "Controls blood flow from left atrium to left ventricle" },
        { id: "c", text: "Controls blood flow from right ventricle to pulmonary artery" },
        { id: "d", text: "Controls blood flow from left ventricle to aorta" },
      ],
      correctAnswer: "b",
      explanation: "The mitral valve (also called bicuspid valve) controls blood flow between the left atrium and left ventricle, ensuring blood flows in only one direction.",
    },
    {
      id: "3",
      question: "Which artery supplies oxygenated blood to the heart muscle?",
      options: [
        { id: "a", text: "Pulmonary artery" },
        { id: "b", text: "Carotid artery" },
        { id: "c", text: "Coronary artery" },
        { id: "d", text: "Aorta" },
      ],
      correctAnswer: "c",
      explanation: "The coronary arteries branch off from the aorta and supply oxygenated blood to the heart muscle itself. Blockage of these arteries can lead to heart attacks.",
    },
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.values(answers).filter(Boolean).length;
  const score = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const handleAnswer = (isCorrect: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: isCorrect,
    }));

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
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
                You got {correctCount} out of {questions.length} questions correct
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
              Question {currentQuestionIndex + 1} of {questions.length}
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
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          explanation={currentQuestion.explanation}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
