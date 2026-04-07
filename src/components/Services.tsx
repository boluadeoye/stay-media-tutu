"use client";
import { motion } from "framer-motion";

export default function Services({ services }: { services: any[] }) {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] font-bold tracking-[0.4em] text-[#3B0B58]/70 uppercase mb-4">What We Do</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#3B0B58] font-medium tracking-tight">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {services.slice(0, 3).map((service, i) => {
            const imageUrl = service._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                /* FIXED: aspect-[2/3] makes cards elegantly tall on desktop */
                className="group relative aspect-[3/4] md:aspect-[2/3] rounded-[24px] overflow-hidden shadow-2xl bg-white"
              >
                {imageUrl && (
                  <img 
                    src={imageUrl} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    alt="Service"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold tracking-[0.15em] text-white/80 uppercase">Cocktail By TÚTÙ</p>
                    <h3 className="font-serif text-3xl text-white font-medium leading-tight" dangerouslySetInnerHTML={{ __html: service.title.rendered || 'Event Supply' }} />
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#3B0B58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
