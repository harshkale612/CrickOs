import { LandingHero } from '@/features/landing/hero';
import { LandingStats } from '@/features/landing/stats';
import { LandingFeatures } from '@/features/landing/features';
import { LandingFixtures } from '@/features/landing/fixtures';
import { LandingStandings } from '@/features/landing/standings';
import { LandingTestimonials } from '@/features/landing/testimonials';
import { LandingCTA } from '@/features/landing/cta';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <LandingHero />
      <LandingStats />
      <LandingFeatures />
      <LandingFixtures />
      <LandingStandings />
      <LandingTestimonials />
      <LandingCTA />
      <Footer />
    </main>
  );
}
