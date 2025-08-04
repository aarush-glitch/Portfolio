import Image from "next/image";


export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[90vh] w-full py-16">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center" style={{ width: 440, height: 440 }}>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            {/* Animated, smaller, purplish neon glow */}
            <div className="rounded-full w-[78%] h-[78%] animate-glow-pulse bg-gradient-to-br from-[#a259ff99] to-[#7f37ff66] shadow-[0_0_32px_8px_#a259ffcc,0_0_64px_16px_#7f37ff99]" />
          </div>
          <div className="relative z-20 flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Aarush Gupta profile"
              width={440}
              height={440}
              className="rounded-full border-8 border-primary bg-background object-cover w-[440px] h-[440px] mx-auto animate-glow shadow-3xl"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center md:text-left">
            Hi, I'm Aarush
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left drop-shadow-[0_1px_8px_#a259ff55] animate-gradient-text bg-gradient-to-r from-[#a259ff] via-[#43e7ad] to-[#7f37ff] bg-[length:200%_200%] bg-clip-text text-transparent">
            Final-year CSE Student · Software Developer
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-lg text-[#ededed]">
            <span className="text-[#7f37ff] font-medium">New Delhi, India</span>
            <span className="hidden md:inline text-[#a259ff]">·</span>
            <a href="mailto:aarush9604@gmail.com" className="underline underline-offset-4 text-[#43e7ad] hover:text-[#a259ff] transition font-medium">aarush9604@gmail.com</a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-base">
            {[
              { text: "8.3/10 CGPA @ JIIT", color: "from-[#23213a] to-[#2a2d3e]" },
              { text: "Top 3% Amazon ML Summer School", color: "from-[#23213a] to-[#2a2d3e]" },
              { text: "500+ DSA Problems", color: "from-[#23213a] to-[#2a2d3e]" },
              { text: "2nd Place Coding Wizards Hackathon", color: "from-[#23213a] to-[#2a2d3e]" },
            ].map((item, idx) => (
              <span
                key={item.text}
                className={`relative px-5 py-2 rounded-xl font-semibold text-white shadow-lg backdrop-blur-md bg-gradient-to-br ${item.color} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_4px_#a259ff33] cursor-pointer border border-white/10`} 
                style={{ zIndex: 1, overflow: 'hidden' }}
              >
                <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 transition bg-white" style={{ pointerEvents: 'none' }} />
                <span className="relative z-10">{item.text}</span>
              </span>
            ))}
          </div>
          {/* Social media cards below achievement cards */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/aarush-glitch" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#43e7ad] transition bg-background/60 hover:bg-background/80 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#ededed" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
            </a>
            <a href="https://linkedin.com/in/aarush-gupta1" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#43e7ad] transition bg-background/60 hover:bg-background/80 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#ededed" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:aarush9604@gmail.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#43e7ad] transition bg-background/60 hover:bg-background/80 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#ededed" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-8.5 7a2 2 0 0 1-2.5 0L2 6"/></svg>
            </a>
            <a href="https://x.com/whois_aarush" target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/30 hover:border-[#43e7ad] transition bg-background/60 hover:bg-background/80 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#ededed" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Mouse trail and scroll indicator can be added here later */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Optionally add a background effect or animated gradient here */}
      </div>
      {/* Removed scroll indicator */}
    </section>
  );
}
