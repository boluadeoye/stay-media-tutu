"use client";
import { motion } from "framer-motion";

export default function Hero({ data }: { data: any }) {
  const acf = data?.acf || {};
  const featuredImage = data?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const imageUrl = featuredImage || (typeof acf.hero_image === 'string' ? acf.hero_image : acf.hero_image?.url);

  return (
    <section className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <img src={imageUrl} alt="" className="w-full h-full object-cover opacity-75 object-[center_35%]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* FIGMA ABSOLUTE: Prominent Pagination Dots */}
      <div className="absolute left-5 md:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        <div className="w-2 h-2 rounded-full border border-white/40 bg-transparent" />
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        <div className="w-2 h-2 rounded-full border border-white/40 bg-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-center px-12 md:px-40">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-[34px] md:text-[72px] text-white leading-[1] tracking-tight mb-6 md:mb-8">
            The Most <span className="italic font-light opacity-95">Delicious</span> <br />
            Cocktails In A <br />
            Can
          </h1>
          
          <div className="flex items-center gap-3 group cursor-pointer w-fit border-b border-white/20 pb-1 hover:border-white transition-all">
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-white uppercase">
              GET IN TOUCH
            </span>
            <span className="text-white text-sm md:text-lg group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
