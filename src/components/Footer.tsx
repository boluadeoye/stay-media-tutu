export default function Footer() {
  return (
    <footer className="bg-[#3B0B58] text-white pt-8 pb-6 md:pt-20 md:pb-12 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 mb-6 md:pb-16 md:mb-16 gap-4 md:gap-10">
          <p className="text-[9px] md:text-[11px] font-bold tracking-[0.25em] uppercase max-w-[200px] leading-tight opacity-90">
            Sign up now for exclusive special offers:
          </p>
          <div className="flex flex-col md:flex-row w-full max-w-3xl gap-4 md:gap-8">
            <div className="flex flex-col w-full gap-4 md:flex-row md:gap-8">
              <input type="text" placeholder="Full Name*" className="bg-transparent border-b border-white/20 py-1 text-[10px] w-full focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-sans" />
              <input type="email" placeholder="Email Address*" className="bg-transparent border-b border-white/20 py-1 text-[10px] w-full focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-sans" />
            </div>
            <button className="bg-white text-[#3B0B58] px-8 py-3 text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap w-fit self-end md:self-auto">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="relative flex flex-col items-start">
          <h2 className="font-serif text-[18vw] md:text-[15vw] leading-[0.7] tracking-tighter text-white mb-6 md:mb-16 select-none">TÚTÙ</h2>
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-[9px] font-bold tracking-[0.15em] uppercase text-white/50">
              <a href="#" className="hover:text-white transition-colors">Help</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Term of Use</a>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
              <div className="flex gap-6 text-white/50">
                {/* Inline SVGs for absolute stability */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" /></svg>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <p className="text-[7px] md:text-[8px] text-white/20 uppercase tracking-[0.15em]">Copyright 2025. All right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
