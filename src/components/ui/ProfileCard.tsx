import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipCard from "./FlipCard";

interface ProfileCardProps {
  images: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ images }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="cursor-target relative h-full w-full rounded-[32px] p-2 border"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        boxShadow: "0 24px 64px var(--shadow)",
        rotate: "3deg",
      }}
      whileHover={{ rotate: "0deg", scale: 1.02 } as any}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div
        className="h-full w-full rounded-[24px] overflow-hidden relative"
        style={{ background: "var(--surface-secondary)" }}
      >
        <FlipCard images={images} interval={3000} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

        <AnimatePresence>
          {hovered && (
            <motion.div
  className="absolute bottom-0 left-0 right-0 backdrop-blur-md px-5 py-4 border-t"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ type: "spring", stiffness: 200, damping: 22 }}
  style={{
    background: "rgba(20,20,30,0.75)",
    borderColor: "rgba(255,255,255,0.08)",
  }}
>
  <p className="font-semibold text-sm !text-white">
    Ilham Fathurohman
  </p>
  <p className="text-xs !text-white/60 mt-0.5">
    Frontend Developer
  </p>
</motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProfileCard;