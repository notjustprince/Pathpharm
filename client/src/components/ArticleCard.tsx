import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image?: string;
  readTime: number;
  category: string;
  onClick?: () => void;
}

export function ArticleCard({
  title,
  excerpt,
  image,
  readTime,
  category,
  onClick,
}: ArticleCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-transform duration-200"
      onClick={onClick}
      data-testid={`card-article-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-xs font-medium text-primary mb-2">{category}</div>
        <h3 className="font-heading text-xl font-semibold mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{readTime} min read</span>
          </div>
          <Button variant="ghost" size="sm" data-testid="button-read-more">
            Read More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
