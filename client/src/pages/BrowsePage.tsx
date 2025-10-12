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

// TODO: remove mock functionality
import brainImage from "@assets/stock_images/human_brain_nervous__336da88b.jpg";
import heartImage from "@assets/stock_images/human_heart_circulat_74e00f6b.jpg";
import boneImage from "@assets/stock_images/skeletal_system_bone_db515f41.jpg";
import muscleImage from "@assets/stock_images/human_muscles_muscul_43c74d8f.jpg";
import lungImage from "@assets/stock_images/human_respiratory_sy_52a9cb88.jpg";

export default function BrowsePage() {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // TODO: remove mock functionality
  const allCategories = [
    { title: "Nervous System", icon: Brain, count: 45, image: brainImage, type: "system" },
    { title: "Circulatory System", icon: Heart, count: 38, image: heartImage, type: "system" },
    { title: "Skeletal System", icon: Bone, count: 52, image: boneImage, type: "system" },
    { title: "Muscular System", icon: Activity, count: 41, image: muscleImage, type: "system" },
    { title: "Respiratory System", icon: Wind, count: 28, image: lungImage, type: "system" },
    { title: "Digestive System", icon: Microscope, count: 35, image: heartImage, type: "system" },
    { title: "Head & Neck", icon: User, count: 62, type: "region" },
    { title: "Upper Limb", icon: HandMetal, count: 48, type: "region" },
    { title: "Lower Limb", icon: Layers, count: 54, type: "region" },
    { title: "Torso", icon: Activity, count: 71, type: "region" },
  ];

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
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                  articleCount={category.count}
                  image={category.image}
                  onClick={() => setLocation(`/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`)}
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
                  key={category.title}
                  title={category.title}
                  icon={category.icon}
                  articleCount={category.count}
                  onClick={() => setLocation(`/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`)}
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
