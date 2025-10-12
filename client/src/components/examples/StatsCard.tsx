import { StatsCard } from "../StatsCard";
import { BookOpen, Award, Target, TrendingUp } from "lucide-react";

export default function StatsCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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
  );
}
