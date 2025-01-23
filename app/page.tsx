import { HeroSection } from '@/components/hero-section'
import { FeatureGrid } from '@/components/feature-grid'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-black"
  style={{
    background: "radial-gradient(circle, rgb(128, 128, 187) 20%, rgb(5, 5, 97) 100%)",
  }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">What We Offer</h2>
          <FeatureGrid />
        </div>
      </section>
    </div>
  )
}

