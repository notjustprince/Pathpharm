import { Button } from "@/components/ui/button";
import { ClinicalBox } from "@/components/ClinicalBox";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Article, Category } from "@shared/schema";

export default function ArticlePage() {
  const [, params] = useRoute("/article/:id");
  const [, setLocation] = useLocation();
  
  const articleId = params?.id || "";

  const { data: article } = useQuery<Article>({
    queryKey: ["/api/articles", articleId],
    queryFn: async () => {
      const response = await fetch(`/api/articles/${articleId}`);
      if (!response.ok) throw new Error("Article not found");
      return response.json();
    },
  });

  const { data: category } = useQuery<Category>({
    queryKey: ["/api/categories", article?.categoryId],
    queryFn: async () => {
      if (!article) return null;
      const response = await fetch(`/api/categories/${article.categoryId}`);
      if (!response.ok) return null;
      return response.json();
    },
    enabled: !!article,
  });

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
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
          onClick={() => window.history.back()}
          data-testid="button-back"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-8">
          <div className="text-sm font-medium text-primary mb-2">
            {category?.title || "General"}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{article.readTime} min read</span>
            </div>
          </div>
        </div>

        {article.image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          <ClinicalBox>
            Understanding the anatomical structures and their relationships is crucial for 
            clinical diagnosis and treatment planning. This knowledge forms the foundation 
            for interpreting medical imaging, performing physical examinations, and understanding 
            pathological processes that may affect these structures.
          </ClinicalBox>
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Test Your Knowledge
              </h3>
              <p className="text-muted-foreground">
                Take a quiz on this topic to reinforce your learning
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => setLocation("/quiz")}
              data-testid="button-take-quiz"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Take Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
