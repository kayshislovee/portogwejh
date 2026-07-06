import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-xl flex items-center justify-center border overflow-hidden"
      style={{
        background: "var(--surface-secondary)",
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      {/* Background glow saat hover */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        animate={{
          background: isDark
            ? "radial-gradient(circle, rgba(79,126,248,0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)",
        }}
        transition={{ duration: 0.4 }}
      />

      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            className="absolute flex items-center justify-center"
            initial={{ opacity: 0, y: 12, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -12, rotate: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ color: "#f59e0b" }}
          >
            <Sun size={15} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            className="absolute flex items-center justify-center"
            initial={{ opacity: 0, y: 12, rotate: -30 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -12, rotate: 30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ color: "#6366f1" }}
          >
            <Moon size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;