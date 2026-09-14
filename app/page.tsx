import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesPreview } from "@/components/home/services-preview";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/home-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <TrustedBy />
      <ServicesPreview />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <HomeCta />
    </>
  );
}
