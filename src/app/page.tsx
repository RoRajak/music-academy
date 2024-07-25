import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import MusicsTestimonialCard from "@/components/TestimonialCard";
import WhyCHooseUS from "@/components/WhyCHooseUs";
import UpComingWebinar from "@/components/UpComingWebinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeatureCourses/>
      <WhyCHooseUS/>
      <MusicsTestimonialCard/>
      <UpComingWebinar/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
