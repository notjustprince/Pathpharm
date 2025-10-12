import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useRoute } from "wouter";

// TODO: remove mock functionality
import brainImage from "@assets/stock_images/human_brain_nervous__336da88b.jpg";
import heartImage from "@assets/stock_images/human_heart_circulat_74e00f6b.jpg";
import boneImage from "@assets/stock_images/skeletal_system_bone_db515f41.jpg";
import muscleImage from "@assets/stock_images/human_muscles_muscul_43c74d8f.jpg";

export default function CategoryPage() {
  const [, params] = useRoute("/category/:slug");
  const [, setLocation] = useLocation();
  
  const categorySlug = params?.slug || "";
  const categoryTitle = categorySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // TODO: remove mock functionality - this will come from API
  const articles = [
    {
      id: "1",
      title: "The Human Heart: Structure and Function",
      excerpt: "Learn about the anatomy of the heart, including its chambers, valves, and the cardiac cycle that keeps blood flowing throughout your body.",
      image: heartImage,
      readTime: 8,
      category: categoryTitle,
    },
    {
      id: "2",
      title: "Brain Anatomy: Regions and Functions",
      excerpt: "Explore the different regions of the brain and understand how each area contributes to cognitive function, movement, and sensation.",
      image: brainImage,
      readTime: 12,
      category: categoryTitle,
    },
    {
      id: "3",
      title: "Skeletal System Overview",
      excerpt: "Discover the structure of bones, joints, and how the skeletal system provides support and protection for the human body.",
      image: boneImage,
      readTime: 10,
      category: categoryTitle,
    },
    {
      id: "4",
      title: "Muscular System Fundamentals",
      excerpt: "Understanding muscle types, structure, and how they work together to enable movement and maintain posture.",
      image: muscleImage,
      readTime: 9,
      category: categoryTitle,
    },
    {
      id: "5",
      title: "Cardiovascular Physiology",
      excerpt: "Deep dive into how the cardiovascular system works to transport oxygen, nutrients, and remove waste products.",
      image: heartImage,
      readTime: 15,
      category: categoryTitle,
    },
    {
      id: "6",
      title: "Neurological Pathways",
      excerpt: "Explore how neural pathways transmit signals throughout the nervous system for sensation and motor control.",
      image: brainImage,
      readTime: 11,
      category: categoryTitle,
    },
  ];

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
          <h1 className="font-heading text-4xl font-bold mb-2">{categoryTitle}</h1>
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
              image={article.image}
              readTime={article.readTime}
              category={article.category}
              onClick={() => setLocation(`/article/${article.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
