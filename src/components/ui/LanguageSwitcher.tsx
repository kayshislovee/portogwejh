import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl border text-sm transition-all duration-200"
        style={{ background: "var(--surface-secondary)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
      >
        <span>{current.flag}</span>
        <span className="font-medium hidden sm:block">{current.code.toUpperCase()}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={13} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-40 rounded-xl border overflow-hidden shadow-lg z-50"
            style={{ background: "var(--surface)", borderColor: "var(--border)", boxShadow: "0 8px 24px var(--shadow)" }}
          >
            {languages.map((lang) => {
              const isActive = lang.code === i18n.language;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-all duration-150"
                  style={{
                    background: isActive ? "var(--accent-soft)" : "transparent",
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "var(--surface-secondary)"; }}
                  onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <span className="text-base">{lang.flag}</span>
                  {lang.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
