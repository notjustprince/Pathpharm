import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizOption {
  id: string;
  text: string;
}

interface QuizCardProps {
  question: string;
  options: QuizOption[];
  correctAnswer: string;
  explanation: string;
  onAnswer?: (isCorrect: boolean) => void;
}

export function QuizCard({
  question,
  options,
  correctAnswer,
  explanation,
  onAnswer,
}: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    const isCorrect = selectedAnswer === correctAnswer;
    setShowResult(true);
    onAnswer?.(isCorrect);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <Card className="p-6 max-w-3xl mx-auto" data-testid="card-quiz">
      <h3 className="font-heading text-xl font-semibold mb-6">{question}</h3>
      
      <RadioGroup
        value={selectedAnswer}
        onValueChange={setSelectedAnswer}
        disabled={showResult}
        className="space-y-3 mb-6"
      >
        {options.map((option) => (
          <div
            key={option.id}
            className={`flex items-center space-x-3 p-4 rounded-md border transition-colors ${
              showResult && option.id === correctAnswer
                ? "bg-chart-2/10 border-chart-2"
                : showResult && option.id === selectedAnswer
                ? "bg-destructive/10 border-destructive"
                : "hover:bg-muted/50"
            }`}
          >
            <RadioGroupItem
              value={option.id}
              id={option.id}
              data-testid={`radio-option-${option.id}`}
            />
            <Label
              htmlFor={option.id}
              className="flex-1 cursor-pointer text-base"
            >
              {option.text}
            </Label>
            {showResult && option.id === correctAnswer && (
              <CheckCircle2 className="h-5 w-5 text-chart-2" />
            )}
            {showResult &&
              option.id === selectedAnswer &&
              option.id !== correctAnswer && (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
          </div>
        ))}
      </RadioGroup>

      {!showResult ? (
        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          className="w-full"
          data-testid="button-submit-answer"
        >
          Submit Answer
        </Button>
      ) : (
        <div
          className={`p-4 rounded-md ${
            isCorrect ? "bg-chart-2/10" : "bg-destructive/10"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <CheckCircle2 className="h-5 w-5 text-chart-2" />
            ) : (
              <XCircle className="h-5 w-5 text-destructive" />
            )}
            <span className="font-semibold">
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{explanation}</p>
        </div>
      )}
    </Card>
  );
}
