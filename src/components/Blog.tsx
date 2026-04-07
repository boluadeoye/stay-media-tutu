"use client";
import { motion } from "framer-motion";

export default function Blog({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  // HARD FALLBACK: Ensures images always load even if WP API fails
  const fallbackImg = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="blogs" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-4">Blog</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3B0B58] font-medium">Our Latest Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl mx-auto">
          {posts.slice(0, 3).map((post, i) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || fallbackImg;
            const date = new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            
            return (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-slate-100">
                  <img 
                    src={imageUrl} 
                    alt={post.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                  {date}
                </p>
                
                <h3 
                  className="font-serif text-xl md:text-2xl text-[#3B0B58] leading-snug mb-6 group-hover:text-[#D4AF37] transition-colors flex-grow" 
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                />
                
                <div className="mt-auto">
                  <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] uppercase text-slate-400 border-b border-slate-300 pb-1 group-hover:border-[#3B0B58] group-hover:text-[#3B0B58] transition-all">
                    Read More
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
