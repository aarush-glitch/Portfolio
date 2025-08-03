import Image from "next/image";
import FloatingIcons from "../animations/FloatingIcons";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-[90vh] w-full py-16">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full max-w-5xl mx-auto">
        <div className="relative flex items-center justify-center" style={{ width: 440, height: 440 }}>
          {/* Floating icons above, profile image below */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <FloatingIcons radius={250} grayscale />
          </div>
          <div className="relative z-20 flex items-center justify-center">
            <div className="rounded-full bg-gradient-to-br from-primary/40 to-primary-purple/30 shadow-[0_8px_32px_0_rgba(59,130,246,0.45)] p-2" style={{ boxShadow: '0 0 60px 10px #3B82F6, 0 0 120px 30px #8B5CF6' }}>
              <Image
                src="/profile.jpg"
                alt="Aarush Gupta profile"
                width={440}
                height={440}
                className="rounded-full border-8 border-primary bg-background object-cover w-[440px] h-[440px] mx-auto animate-glow shadow-3xl"
                priority
                style={{ filter: 'drop-shadow(0 8px 32px #3B82F6) drop-shadow(0 0 32px #8B5CF6)', transform: 'perspective(800px) rotateY(-12deg) rotateX(8deg) scale(1.04)' }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-foreground drop-shadow-xl tracking-tight text-center md:text-left">
            Aarush Gupta
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center md:text-left">
            Final-year CSE Student · Software Developer
          </h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-lg text-foreground/80">
            <span>New Delhi, India</span>
            <span className="hidden md:inline">·</span>
            <a href="mailto:aarush9604@gmail.com" className="underline underline-offset-4 hover:text-primary transition">aarush9604@gmail.com</a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-base">
            <span className="bg-accent/70 px-4 py-1.5 rounded-full font-medium">8.3/10 CGPA @ JIIT</span>
            <span className="bg-accent/70 px-4 py-1.5 rounded-full font-medium">Top 3% Amazon ML Summer School</span>
            <span className="bg-accent/70 px-4 py-1.5 rounded-full font-medium">500+ DSA Problems</span>
            <span className="bg-accent/70 px-4 py-1.5 rounded-full font-medium">2nd Place Coding Wizards Hackathon</span>
          </div>
        </div>
      </div>
      {/* Mouse trail and scroll indicator can be added here later */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Optionally add a background effect or animated gradient here */}
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary/80">
        <span className="block w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
        </span>
        <span className="text-sm mt-1 block">Scroll</span>
      </div>
    </section>
  );
}
