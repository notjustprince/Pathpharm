import { CategoryCard } from "../CategoryCard";
import { Brain, Heart, Bone } from "lucide-react";

export default function CategoryCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <CategoryCard
        title="Nervous System"
        icon={Brain}
        articleCount={45}
        image={new URL("@assets/stock_images/human_brain_nervous__336da88b.jpg", import.meta.url).href}
        onClick={() => console.log("Nervous System clicked")}
      />
      <CategoryCard
        title="Circulatory System"
        icon={Heart}
        articleCount={38}
        image={new URL("@assets/stock_images/human_heart_circulat_74e00f6b.jpg", import.meta.url).href}
        onClick={() => console.log("Circulatory System clicked")}
      />
      <CategoryCard
        title="Skeletal System"
        icon={Bone}
        articleCount={52}
        image={new URL("@assets/stock_images/skeletal_system_bone_db515f41.jpg", import.meta.url).href}
        onClick={() => console.log("Skeletal System clicked")}
      />
    </div>
  );
}
