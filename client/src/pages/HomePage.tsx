import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";
import { QuizCard } from "@/components/QuizCard";
import { StatsCard } from "@/components/StatsCard";
import { ClinicalBox } from "@/components/ClinicalBox";
import {
  Brain,
  Heart,
  Bone,
  Microscope,
  Activity,
  Wind,
  User,
  HandMetal,
  Layers,
  BookOpen,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Category, Article, Quiz } from "@shared/schema";
import heroImage from "@assets/stock_images/medical_anatomy_huma_1a726e72.jpg";

const iconMap: Record<string, any> = {
  Brain,
  Heart,
  Bone,
  Microscope,
  Activity,
  Wind,
  User,
  HandMetal,
  Layers,
};

export default function HomePage() {
  const [, setLocation] = useLocation();

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: quizzes = [] } = useQuery<Quiz[]>({
    queryKey: ["/api/quizzes"],
  });

  const systemCategories = categories
    .filter((cat) => cat.type === "system")
    .map((cat) => ({
      ...cat,
      icon: iconMap[cat.icon] || Brain,
    }));

  const regionCategories = categories
    .filter((cat) => cat.type === "region")
    .map((cat) => ({
      ...cat,
      icon: iconMap[cat.icon] || User,
    }));

  const featuredArticles = articles.slice(0, 3);

  const sampleQuiz = quizzes[0];

  return (
    <div className="min-h-screen">
      <Hero
        onGetStarted={() => setLocation("/browse")}
        onBrowseTopics={() => setLocation("/browse")}
      />

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Browse by System
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore anatomy organized by body systems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemCategories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                articleCount={category.articleCount}
                image={category.image || undefined}
                onClick={() => setLocation(`/category/${category.slug}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Browse by Region
          </h2>
          <p className="text-muted-foreground mb-8">
            Study anatomy by anatomical regions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionCategories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                icon={category.icon}
                articleCount={category.articleCount}
                onClick={() => setLocation(`/category/${category.slug}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Featured Articles
          </h2>
          <p className="text-muted-foreground mb-8">
            Start learning with our most popular content
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image || undefined}
                readTime={article.readTime}
                category={categories.find((c) => c.id === article.categoryId)?.title ?? "General"}
                onClick={() => setLocation(`/article/${article.id}`)}
              />
            ))}
          </div>
        </section>

        {sampleQuiz && (
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold mb-2">
              Test Your Knowledge
            </h2>
            <p className="text-muted-foreground mb-8">
              Challenge yourself with interactive quizzes
            </p>
            <QuizCard
              question={sampleQuiz.question}
              options={sampleQuiz.options.map((text, idx) => ({
                id: String.fromCharCode(97 + idx),
                text,
              }))}
              correctAnswer={String.fromCharCode(
                97 + sampleQuiz.options.indexOf(sampleQuiz.correctAnswer)
              )}
              explanation={sampleQuiz.explanation}
              onAnswer={(isCorrect) => {
                if (isCorrect) {
                  setTimeout(() => setLocation("/quiz"), 2000);
                }
              }}
            />
          </section>
        )}

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Why Learn Anatomy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Comprehensive"
              value={`${articles.length}+`}
              icon={BookOpen}
              description="Detailed articles"
            />
            <StatsCard
              title="Interactive"
              value={`${quizzes.length}+`}
              icon={Award}
              description="Practice questions"
            />
            <StatsCard
              title="Organized"
              value={`${categories.length}`}
              icon={Target}
              description="Topic categories"
            />
            <StatsCard
              title="Effective"
              value="100%"
              icon={TrendingUp}
              description="Free to use"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Clinical Relevance
          </h2>
          <p className="text-muted-foreground mb-6">
            Understanding anatomy is essential for clinical practice
          </p>
          <ClinicalBox>
            Medical professionals rely on detailed anatomical knowledge to diagnose
            conditions, plan surgeries, and understand disease processes. Our
            platform bridges the gap between theoretical anatomy and clinical
            application, helping you develop the spatial understanding crucial for
            medical practice.
          </ClinicalBox>
        </section>

        <section className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students mastering human anatomy with our
            comprehensive learning platform
          </p>
          <Button 
            size="lg" 
            className="px-8" 
            onClick={() => setLocation("/browse")}
            data-testid="button-get-started-footer"
          >
            Get Started Now
          </Button>
        </section>
      </div>
    </div>
  );
}
