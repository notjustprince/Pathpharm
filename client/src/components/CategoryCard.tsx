import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  articleCount: number;
  image?: string;
  onClick?: () => void;
}

export function CategoryCard({
  title,
  icon: Icon,
  articleCount,
  image,
  onClick,
}: CategoryCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-transform duration-200"
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {image && (
        <div className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-md bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-heading text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          {articleCount} article{articleCount !== 1 ? "s" : ""}
        </p>
      </div>
    </Card>
  );
}
