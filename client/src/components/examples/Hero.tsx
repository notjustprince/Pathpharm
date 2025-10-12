import { Hero } from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      onGetStarted={() => console.log("Get Started clicked")}
      onBrowseTopics={() => console.log("Browse Topics clicked")}
    />
  );
}
