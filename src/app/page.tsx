import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { CvSection } from '@/components/cv-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { RecommendationTool } from '@/components/recommendation-tool';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CvSection />
        <PortfolioSection />
        <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <RecommendationTool />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
