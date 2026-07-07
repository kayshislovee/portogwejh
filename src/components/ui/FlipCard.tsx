// src/components/ui/FlipCard.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlipCardProps {
  images: string[];
  interval?: number; // ms, default 4000
}

const FlipCard: React.FC<FlipCardProps> = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="profile"
          className="w-full h-full object-cover"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ backfaceVisibility: "hidden" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/400x500/252423/f59e0b?text=Foto";
          }}
        />
      </AnimatePresence>

      {/* Dot indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-amber-400 w-4" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlipCard;