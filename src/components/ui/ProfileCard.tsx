import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipCard from "./FlipCard";
import { personalInfo } from "../../data/portfolioData";

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
        style={{
          background: "var(--surface-secondary)",
          filter: hovered ? "grayscale(0)" : "grayscale(1)",
          transition: "filter 0.7s ease",
        }}
      >
        <FlipCard images={images} interval={3000} />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute bottom-5 left-5 right-5 backdrop-blur-md p-4 rounded-xl border"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              style={{ background: "var(--bg)dd", borderColor: "var(--border)" }}
            >
              <p className="font-medium text-sm" style={{ color: "var(--text)" }}>
                {personalInfo.name}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {personalInfo.role}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProfileCard;