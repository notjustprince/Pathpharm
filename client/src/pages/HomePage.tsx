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

// TODO: remove mock functionality - these images will come from actual data
import heroImage from "@assets/stock_images/medical_anatomy_huma_1a726e72.jpg";
import brainImage from "@assets/stock_images/human_brain_nervous__336da88b.jpg";
import heartImage from "@assets/stock_images/human_heart_circulat_74e00f6b.jpg";
import boneImage from "@assets/stock_images/skeletal_system_bone_db515f41.jpg";
import muscleImage from "@assets/stock_images/human_muscles_muscul_43c74d8f.jpg";
import lungImage from "@assets/stock_images/human_respiratory_sy_52a9cb88.jpg";

export default function HomePage() {
  const [, setLocation] = useLocation();

  // TODO: remove mock functionality
  const systemCategories = [
    { title: "Nervous System", icon: Brain, count: 45, image: brainImage },
    { title: "Circulatory System", icon: Heart, count: 38, image: heartImage },
    { title: "Skeletal System", icon: Bone, count: 52, image: boneImage },
    { title: "Muscular System", icon: Activity, count: 41, image: muscleImage },
    { title: "Respiratory System", icon: Wind, count: 28, image: lungImage },
    { title: "Digestive System", icon: Microscope, count: 35, image: heartImage },
  ];

  // TODO: remove mock functionality
  const regionCategories = [
    { title: "Head & Neck", icon: User, count: 62 },
    { title: "Upper Limb", icon: HandMetal, count: 48 },
    { title: "Lower Limb", icon: Layers, count: 54 },
    { title: "Torso", icon: Activity, count: 71 },
  ];

  // TODO: remove mock functionality
  const featuredArticles = [
    {
      title: "The Human Heart: Structure and Function",
      excerpt:
        "Learn about the anatomy of the heart, including its chambers, valves, and the cardiac cycle that keeps blood flowing throughout your body.",
      image: heartImage,
      readTime: 8,
      category: "Circulatory System",
    },
    {
      title: "Brain Anatomy: Regions and Functions",
      excerpt:
        "Explore the different regions of the brain and understand how each area contributes to cognitive function, movement, and sensation.",
      image: brainImage,
      readTime: 12,
      category: "Nervous System",
    },
    {
      title: "Skeletal System Overview",
      excerpt:
        "Discover the structure of bones, joints, and how the skeletal system provides support and protection for the human body.",
      image: boneImage,
      readTime: 10,
      category: "Skeletal System",
    },
  ];

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
                key={category.title}
                title={category.title}
                icon={category.icon}
                articleCount={category.count}
                onClick={() => setLocation(`/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`)}
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
            {featuredArticles.map((article, idx) => (
              <ArticleCard
                key={article.title}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                readTime={article.readTime}
                category={article.category}
                onClick={() => setLocation(`/article/${idx + 1}`)}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Test Your Knowledge
          </h2>
          <p className="text-muted-foreground mb-8">
            Practice with our interactive quizzes
          </p>
          <QuizCard
            question="Which chamber of the heart receives oxygenated blood from the lungs?"
            options={[
              { id: "a", text: "Right atrium" },
              { id: "b", text: "Left atrium" },
              { id: "c", text: "Right ventricle" },
              { id: "d", text: "Left ventricle" },
            ]}
            correctAnswer="b"
            explanation="The left atrium receives oxygenated blood from the lungs via the pulmonary veins. This blood is then pumped into the left ventricle and distributed to the body."
            onAnswer={(isCorrect) => {
              console.log("Quiz answer correct:", isCorrect);
              if (isCorrect) {
                setTimeout(() => setLocation("/quiz"), 2000);
              }
            }}
          />
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Track Your Progress
          </h2>
          <p className="text-muted-foreground mb-8">
            Monitor your learning journey with detailed analytics
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Articles Read"
              value={24}
              icon={BookOpen}
              description="+3 this week"
            />
            <StatsCard
              title="Quiz Score"
              value="87%"
              icon={Award}
              description="Average accuracy"
            />
            <StatsCard
              title="Topics Mastered"
              value={12}
              icon={Target}
              description="Out of 45 total"
            />
            <StatsCard
              title="Study Streak"
              value="7 days"
              icon={TrendingUp}
              description="Keep it up!"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Clinical Relevance
          </h2>
          <p className="text-muted-foreground mb-8">
            Learn how anatomy connects to real medical practice
          </p>
          <div className="max-w-4xl">
            <p className="mb-4">
              The coronary arteries supply oxygenated blood to the heart muscle
              itself. These arteries branch off from the aorta just above the
              aortic valve.
            </p>

            <ClinicalBox>
              Coronary artery disease occurs when these arteries become narrowed
              or blocked, reducing blood flow to the heart muscle. This can lead
              to angina (chest pain) or myocardial infarction (heart attack).
              Understanding coronary anatomy is crucial for diagnosing and
              treating cardiovascular conditions.
            </ClinicalBox>

            <p className="mt-4">
              The main coronary arteries include the left coronary artery and
              the right coronary artery, each supplying different regions of the
              heart.
            </p>
          </div>
        </section>

        <section className="text-center py-12 bg-muted/30 rounded-lg">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ready to Start Learning?
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
