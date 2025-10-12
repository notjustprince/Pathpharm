import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

interface HeroProps {
  onGetStarted?: () => void;
  onBrowseTopics?: () => void;
}

export function Hero({ onGetStarted, onBrowseTopics }: HeroProps) {
  return (
    <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${new URL("@assets/stock_images/medical_anatomy_huma_1a726e72.jpg", import.meta.url).href})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
          Master Human Anatomy
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Comprehensive articles, interactive diagrams, and practice quizzes to help you
          excel in your medical studies
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="px-8"
            onClick={onGetStarted}
            data-testid="button-get-started"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={onBrowseTopics}
            data-testid="button-browse-topics"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Topics
          </Button>
        </div>
      </div>
    </div>
  );
}
