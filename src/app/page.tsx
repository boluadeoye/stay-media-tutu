import { getPageData, getCollection } from "@/lib/wp";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic';

export default async function LandingPage() {
  const [pageData, servicesData, testimonialsData, postsData] = await Promise.all([
    getPageData(6),
    getCollection("services"),
    getCollection("testimonials"),
    getCollection("posts")
  ]);

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-[#3B0B58] selection:text-white">
      <Hero data={pageData} />
      
      <div className="relative bg-gradient-to-b from-[#F4EFF8] via-[#E2D6EB] to-[#D1C2DB]">
        {/* FIGMA ABSOLUTE: Ultra-faint pattern for maximum text legibility */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.15'%3E%3Ccircle cx='0' cy='0' r='40'/%3E%3Ccircle cx='80' cy='0' r='40'/%3E%3Ccircle cx='0' cy='80' r='40'/%3E%3Ccircle cx='80' cy='80' r='40'/%3E%3Ccircle cx='40' cy='40' r='40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} 
        />
        
        <div className="relative z-10">
          <Services services={servicesData} />
          <Testimonials data={testimonialsData} />
        </div>
      </div>

      <Blog posts={postsData} />
      <Footer />
    </main>
  );
}
