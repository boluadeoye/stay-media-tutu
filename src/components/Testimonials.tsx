"use client";
import { motion } from "framer-motion";

export default function Testimonials({ data }: { data: any[] }) {
  const testimonial = data?.[0] || {
    title: { rendered: "Edward Steen" },
    content: { rendered: "Facere aliquam itaque quia recusandae, corporis fugit fugiat eaque, accusamus officiis reprehenderit. Velit id facilis odit aliquid laudantium. Tempore, sequi. Harum nesciunt, magni aperiam est?" },
    acf: { role: "CEO" }
  };

  const avatar = testimonial._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop";

  const rawContent = testimonial.content.rendered;
  const cleanContent = rawContent
    .replace(/<[^>]*>?/gm, '')
    .replace(/Very Good Cocktail/gi, '')
    .trim();

  return (
    <section id="testimonials" className="py-12 md:py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3B0B58] mb-8 md:mb-12 leading-tight font-medium">
            3,009 happy customers and counting...
          </h2>
          <div className="w-full h-[1px] bg-[#3B0B58]/10 mb-8" />
          <span className="text-[8px] md:text-[9px] font-bold tracking-[0.4em] text-[#3B0B58]/50 uppercase">
            Top Best Reviews of Cocktail by TÚTÙ
          </span>
        </div>

        {/* Increased max-width of the relative wrapper to allow arrows to sit further out */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* FIGMA ABSOLUTE: Navigation Arrows pushed away from text */}
          <div className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#3B0B58]/10 flex items-center justify-center cursor-pointer hover:bg-white transition-all z-20 group">
            <span className="text-[#3B0B58] text-sm opacity-40 group-hover:opacity-100">←</span>
          </div>
          <div className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#3B0B58]/10 flex items-center justify-center cursor-pointer hover:bg-white transition-all z-20 group">
            <span className="text-[#3B0B58] text-sm opacity-40 group-hover:opacity-100">→</span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            /* Increased horizontal padding to ensure text never touches arrows */
            className="flex flex-col items-center text-center px-16 md:px-28"
          >
            {/* Avatar */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 md:mb-8 border-2 border-white shadow-xl">
              <img src={avatar} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Review Content */}
            <h3 className="font-serif text-2xl md:text-4xl text-[#3B0B58] mb-4 md:mb-6 font-medium">Very Good Cocktail</h3>
            
            <p className="font-serif italic text-[#3B0B58] text-lg md:text-2xl leading-relaxed max-w-2xl mb-8 md:mb-12 font-light">
              "{cleanContent}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
              <span className="font-sans text-[10px] md:text-[11px] font-bold tracking-widest text-[#3B0B58] uppercase">
                {testimonial.title.rendered}
              </span>
              
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-[#D4AF37] text-xs md:text-sm">★</span>
                ))}
              </div>

              <span className="text-[7px] md:text-[8px] font-bold tracking-[0.3em] text-[#3B0B58]/50 uppercase">
                {testimonial.acf?.role || "CEO"}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-10 md:mt-12">
              <div className="w-1 h-1 rounded-full bg-[#3B0B58]/10" />
              <div className="w-1 h-1 rounded-full bg-[#3B0B58]" />
              <div className="w-1 h-1 rounded-full bg-[#3B0B58]/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
