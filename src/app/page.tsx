import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import Whychooseus from "@/components/Whychooseus";
import Testimonialcars from "@/components/Testimonialcars";
import Upcomningwebnaars from "@/components/Upcomningwebnaars";
import Instructer from "@/components/Instructer";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <Whychooseus />
      <Testimonialcars />
      <Upcomningwebnaars />
      <Instructer />
      <Footer />
    </main>
  )
}
