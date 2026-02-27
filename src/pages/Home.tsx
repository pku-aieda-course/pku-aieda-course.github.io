import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseIntro from "@/components/CourseIntro";
import Syllabus from "@/components/Syllabus";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <Hero />
      <CourseIntro />
      {/* Staff section removed as requested */}
      <Syllabus />
      <Resources />
      <Footer />
    </div>
  );
}
