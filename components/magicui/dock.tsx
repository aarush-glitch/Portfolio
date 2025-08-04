"use client";
import React, { useState, useEffect } from "react";

export function Dock({ items = [], className = "" }) {
  const [active, setActive] = useState("");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let found = items[0]?.href?.substring(1) || "";
      
      for (const item of items) {
        const sectionId = item.href?.substring(1);
        if (!sectionId) continue;
        
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = el.offsetTop;
          if (scrollY + 120 >= offset) found = sectionId;
        }
      }
      
      setActive(found);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  useEffect(() => {
    const el = document.getElementById(`dock-${active}`);
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [active]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.substring(1);
    const el = document.getElementById(sectionId);
    
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setActive(sectionId);
    }
  };

  return (
    <nav className={`flex items-center justify-center gap-2 py-2 px-6 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-primary/30 ${className}`}>
      <ul className="flex gap-2 relative">
        {items.map((item, idx) => {
          const sectionId = item.href?.substring(1) || "";
          const isActive = active === sectionId;
          
          return (
            <li key={idx} className="relative">
              <a
                id={`dock-${sectionId}`}
                href={item.href}
                className={`px-4 py-1.5 font-semibold text-base rounded-full transition-colors duration-200 text-black flex items-center`}
                onClick={(e) => handleClick(e, item.href)}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
        <span
          className="absolute bottom-0 h-[4px] rounded-full bg-gradient-to-r from-[#a259ff] to-[#7f37ff] transition-all duration-300 shadow-[0_0_10px_rgba(162,89,255,0.7)]"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </ul>
    </nav>
  );
}
