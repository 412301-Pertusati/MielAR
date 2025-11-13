import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { FeaturedProducts } from "@/components/featured-products"
import { FeaturedProducers } from "@/components/featured-producers"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <FeaturedProducts />
      <FeaturedProducers />
      <Footer />
    </main>
  )
}
