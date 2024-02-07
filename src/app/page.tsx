import HomeHero from "@/components/home/home-hero";
import HomeBlog from "@/components/home/home-blog";
import HomeProject from "@/components/home/home-project";
import HomeSkillset from "@/components/home/home-skillset";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeBlog /> 
      <HomeProject /> 
      <HomeSkillset />
    </>
  );
}
