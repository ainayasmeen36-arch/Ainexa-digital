import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { TrustedBy } from "@/components/home/trusted-by";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ServicesPreview } from "@/components/home/services-preview";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { HomeCta } from "@/components/home/home-cta";
import { COMPANY } from "@/lib/data";
import { DEFAULT_DESCRIPTION, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
return (
    <>
      <div style={{background: 'yellow', padding: '10px', textAlign: 'center'}}>
        Hello - Ye Mera Naya Design Hai! - Aina Test
      </div>
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