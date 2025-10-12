import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";
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
} from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Category } from "@shared/schema";

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

export default function BrowsePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: categories = [] } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const allCategories = categories.map((cat) => ({
    ...cat,
    icon: iconMap[cat.icon] || Brain,
  }));

  const filteredCategories = allCategories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const systemCategories = filteredCategories.filter((c) => c.type === "system");
  const regionCategories = filteredCategories.filter((c) => c.type === "region");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="font-heading text-4xl font-bold mb-4">Browse Topics</h1>
          <p className="text-muted-foreground mb-6">
            Explore anatomy by body systems or anatomical regions
          </p>
          <div className="max-w-xl">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search for a topic..."
            />
          </div>
        </div>

        {systemCategories.length > 0 && (
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold mb-8">Body Systems</h2>
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
        )}

        {regionCategories.length > 0 && (
          <section>
            <h2 className="font-heading text-3xl font-bold mb-8">
              Anatomical Regions
            </h2>
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
        )}

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No topics found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
