import { ArticleCard } from "../ArticleCard";

export default function ArticleCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <ArticleCard
        title="The Human Heart: Structure and Function"
        excerpt="Learn about the anatomy of the heart, including its chambers, valves, and the cardiac cycle that keeps blood flowing throughout your body."
        image={new URL("@assets/stock_images/human_heart_circulat_74e00f6b.jpg", import.meta.url).href}
        readTime={8}
        category="Circulatory System"
        onClick={() => console.log("Article clicked")}
      />
      <ArticleCard
        title="Brain Anatomy: Regions and Functions"
        excerpt="Explore the different regions of the brain and understand how each area contributes to cognitive function, movement, and sensation."
        image={new URL("@assets/stock_images/human_brain_nervous__336da88b.jpg", import.meta.url).href}
        readTime={12}
        category="Nervous System"
        onClick={() => console.log("Article clicked")}
      />
      <ArticleCard
        title="Skeletal System Overview"
        excerpt="Discover the structure of bones, joints, and how the skeletal system provides support and protection for the human body."
        image={new URL("@assets/stock_images/skeletal_system_bone_db515f41.jpg", import.meta.url).href}
        readTime={10}
        category="Skeletal System"
        onClick={() => console.log("Article clicked")}
      />
    </div>
  );
}
