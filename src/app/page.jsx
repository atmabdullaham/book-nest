import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import CTA from "@/components/sections/CTA";
import FeaturedBooks from "@/components/sections/FeaturedBooks";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Reviews from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedBooks />
      <About />
      <HowItWorks />
      <Reviews />
      <CTA />
    </>
  );
}
