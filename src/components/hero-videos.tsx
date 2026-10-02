import { useEffect, useState } from "react";
import v1 from "@/assets/hero-video-1.mp4.asset.json";
import v2 from "@/assets/hero-video-2.mp4.asset.json";

const videos = [v1.url, v2.url];

/** Looping, crossfading background videos served from the site's own files. */
export function HeroVideos() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % videos.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {videos.map((src, i) => (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${i === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
}
