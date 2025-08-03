"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      let found = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) found = section.id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById(`nav-${active}`);
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md rounded-full px-6 py-3 flex gap-2 shadow-lg border border-primary/30" style={{ width: 'fit-content', minHeight: 56 }}>
      <ul className="flex gap-2 relative">
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <Link
              id={`nav-${section.id}`}
              href={`#${section.id}`}
              className={`px-4 py-1.5 font-semibold text-base rounded-full transition-colors duration-200 ${active === section.id ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
              onClick={() => setActive(section.id)}
            >
              {section.label}
            </Link>
          </li>
        ))}
        <span
          className="absolute bottom-0 h-[4px] rounded-full bg-gradient-to-r from-primary to-primary-purple transition-all duration-300"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            boxShadow: 'inset 0 0 16px 6px #3B82F6, inset 0 0 32px 12px #8B5CF6',
          }}
        />
      </ul>
    </nav>
  );
}
