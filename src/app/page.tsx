import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import data from "@/data/content.json";

export const dynamic = 'force-dynamic';

export default async function LandingPage() {
  // Map Hero Data
  const pageData = { 
    acf: { 
      hero_title: data.hero.title, 
      hero_subtitle: data.hero.subtitle, 
      hero_image: data.hero.image, 
      cta_text: data.hero.cta 
    } 
  };

  // Map Services Data
  const servicesData = data.services.map(s => ({
    id: s.id,
    title: { rendered: s.title },
    _embedded: { 'wp:featuredmedia': [{ source_url: s.image }] }
  }));

  // Map Testimonials Data (Now using the Cloudinary Avatar)
  const testimonialsData =[{
    id: 1,
    title: { rendered: data.testimonial.name },
    content: { rendered: data.testimonial.quote },
    acf: { role: data.testimonial.role },
    _embedded: { 'wp:featuredmedia': [{ source_url: data.testimonial.image }] }
  }];

  // Map Blog Posts Data
  const postsData = data.posts.map(p => ({
    id: p.id,
    date: p.date,
    title: { rendered: p.title },
    _embedded: { 'wp:featuredmedia': [{ source_url: p.image }] }
  }));

  return (
    <main className="min-h-screen overflow-x-hidden selection:bg-[#3B0B58] selection:text-white">
      <Hero data={pageData} />
      
      <div className="relative bg-gradient-to-b from-[#FDFCFD] via-[#F3F0F5] to-[#E8E3ED]">
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 A20 20 0 0 1 40 40 A20 20 0 0 1 40 0 M0 40 A20 20 0 0 0 40 40 M40 40 A20 20 0 0 0 80 40 M40 40 A20 20 0 0 1 40 80' fill='none' stroke='%233B0B58' stroke-width='1' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} 
        />
        
        <div className="relative z-10">
          <Services services={servicesData} />
          <Testimonials data={testimonialsData} />
          <Blog posts={postsData} />
        </div>
      </div>

      <Footer />
    </main>
  );
}
