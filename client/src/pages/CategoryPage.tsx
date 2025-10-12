import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Category, Article } from "@shared/schema";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  const [, setLocation] = useLocation();
  
  const categorySlug = params?.slug || "";

  const { data: category } = useQuery<Category>({
    queryKey: ["/api/categories", categorySlug],
    queryFn: async () => {
      const response = await fetch(`/api/categories/${categorySlug}`);
      if (!response.ok) throw new Error("Category not found");
      return response.json();
    },
  });

  const { data: articles = [] } = useQuery<Article[]>({
    queryKey: ["/api/articles", category?.id],
    queryFn: async () => {
      if (!category) return [];
      const response = await fetch(`/api/articles?categoryId=${category.id}`);
      return response.json();
    },
    enabled: !!category,
  });

  if (!category) {
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
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => setLocation("/browse")}
            data-testid="button-back"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Browse
          </Button>
          <h1 className="font-heading text-4xl font-bold mb-2">{category.title}</h1>
          <p className="text-muted-foreground">
            {articles.length} articles available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image || undefined}
              readTime={article.readTime}
              category={category.title}
              onClick={() => setLocation(`/article/${article.id}`)}
            />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No articles available in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
