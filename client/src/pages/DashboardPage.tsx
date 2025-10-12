import { StatsCard } from "@/components/StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Award,
  Target,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Article, Quiz, Category } from "@shared/schema";

export default function DashboardPage() {
  const [, setLocation] = useLocation();

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: quizzes = [] } = useQuery<Quiz[]>({
    queryKey: ["/api/quizzes"],
  });

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  // Mock recent activity - in a real app this would come from user activity tracking
  const recentActivity = articles.slice(0, 5).map((article, idx) => ({
    id: article.id,
    type: idx % 2 === 0 ? "article" : "quiz",
    title: article.title,
    category: categories.find((c) => c.id === article.categoryId)?.title || "General",
    score: idx % 2 === 0 ? undefined : 85 + idx * 2,
    timestamp: `${idx + 1} ${idx === 0 ? 'hour' : 'hours'} ago`,
  }));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-heading text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your learning progress and performance
          </p>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            Your Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Articles Available"
              value={articles.length}
              icon={BookOpen}
              description="Anatomy topics"
            />
            <StatsCard
              title="Practice Questions"
              value={quizzes.length}
              icon={Award}
              description="Quiz questions"
            />
            <StatsCard
              title="Categories"
              value={categories.length}
              icon={Target}
              description="Topic areas"
            />
            <StatsCard
              title="Study Resources"
              value="100%"
              icon={TrendingUp}
              description="Free access"
            />
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-semibold">
              Recent Activity
            </h2>
          </div>
          <Card className="divide-y">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="p-4 hover-elevate cursor-pointer transition-colors"
                onClick={() => {
                  if (activity.type === "article") {
                    setLocation(`/article/${activity.id}`);
                  } else {
                    setLocation("/quiz");
                  }
                }}
                data-testid={`activity-${activity.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      {activity.type === "article" ? (
                        <BookOpen className="h-5 w-5 text-primary" />
                      ) : (
                        <Award className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{activity.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">
                          {activity.category}
                        </span>
                        {activity.score !== undefined && (
                          <span className="text-xs font-medium text-primary">
                            Score: {activity.score}%
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {activity.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </Card>
        </section>

        <section className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="font-heading text-2xl font-bold mb-4">
            Continue Your Learning Journey
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Keep building your knowledge with more articles and quizzes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setLocation("/browse")}
              data-testid="button-browse-topics"
            >
              Browse Topics
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation("/quiz")}
              data-testid="button-take-quiz"
            >
              Take a Quiz
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
