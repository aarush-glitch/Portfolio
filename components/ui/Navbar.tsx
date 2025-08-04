"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let found = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const offset = el.offsetTop;
          if (scrollY + 120 >= offset) found = section.id;
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
    <>
      {/* Blurred overlay perfectly centered and symmetrical behind navbar. Adjust w-[fit-content] and h-[56px] to match nav. */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-40 bg-white rounded-full pointer-events-none px-6 py-3" style={{ width: 'fit-content', minHeight: 56 }} />
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-6 py-3 flex gap-2 shadow-lg border border-primary/30" style={{ width: 'fit-content', minHeight: 56 }}>
        <ul className="flex gap-2 relative">
          {sections.map((section) => (
            <li key={section.id} className="relative">
              <Link
                id={`nav-${section.id}`}
                href={`#${section.id}`}
                className={`px-4 py-1.5 font-semibold text-base rounded-full transition-colors duration-200 text-black`}
                onClick={e => {
                  e.preventDefault();
                  const el = document.getElementById(section.id);
                  if (el) {
                    window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
                    setActive(section.id);
                  }
                }}
              >
                {section.label}
              </Link>
            </li>
          ))}
          <span
            className="absolute bottom-0 h-[4px] rounded-full bg-gradient-to-r from-[#a259ff] to-[#7f37ff] transition-all duration-300 shadow-navbar-line"
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
            }}
          />
        </ul>
      </nav>
    </>
  );
}
