
"use client";
import { FlickeringGrid } from "../magicui/flickering-grid";
import { useEffect, useState } from "react";

export default function FlickeringGridBg() {
  const [size, setSize] = useState({ width: 1920, height: 1200 });
  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <FlickeringGrid
      className="fixed inset-0 z-0 size-full"
      squareSize={4}
      gridGap={18}
      color="#6B7280"
      maxOpacity={0.18}
      flickerChance={0.8}
      height={size.height}
      width={size.width}
    />
  );
}
