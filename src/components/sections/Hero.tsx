import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight,MapPin,Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import FlipCard from "../ui/FlipCard";

const robloxImg = new URL("../../assets/images/roblox.png", import.meta.url).href;
const robloxImg2 = new URL("../../assets/images/roblox2.png", import.meta.url).href;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};
const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
  id="hero"
  className="min-h-screen flex items-center justify-center relative overflow-hidden"
  style={{ background: "var(--bg)" }}
>
  
  {/* Grid pattern */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: `
        linear-gradient(var(--grid-line) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
    }}
  />

  {/* Gradient orbs */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[100px]"
      style={{ background: "var(--orb-1)" }}
    />
    <motion.div
      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[100px]"
      style={{ background: "var(--orb-2)" }}
    />
    <motion.div
      animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-[80px]"
      style={{ background: "var(--orb-3)" }}
    />
  </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1"
          >
           
            <motion.div variants={item} className="mb-4 lg:mb-6">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {personalInfo.name.split(" ").slice(0, -1).join(" ")} <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(to right, var(--accent), #818cf8)" }}
                >
                  {personalInfo.name.split(" ").slice(-1)}
                </span>
              </h2>

              <p
                className="mt-3 text-base sm:text-lg md:text-xl font-medium max-w-xl"
                style={{ color: "var(--accent-soft-text)" }}
              >
                {personalInfo.role}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Perkenalkan Saya{" "}
              <span className="font-semibold" style={{ color: "var(--text)" }}>{personalInfo.name}</span>.{" "}
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col items-start gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-target group px-8 py-4 font-bold rounded-full flex items-center gap-2 transition-all duration-300"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  boxShadow: `0 8px 24px var(--shadow)`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                Lihat Proyek
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.icon === "mail" ? undefined : "_blank"}
                    rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                    aria-label={link.platform}
                    className="cursor-target p-3 rounded-full border transition-all duration-300"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    }}
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>

              <motion.div
                variants={item}
                className="flex flex-wrap gap-3 justify-start text-sm font-mono"
                style={{ color: "var(--text-muted)" }}
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <MapPin size={14} style={{ color: "var(--accent)" }} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <Sparkles size={14} style={{ color: "#a78bfa" }} />
                  <span>{personalInfo.role}</span>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

        {/* Visual card — 5 kolom */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed rounded-full pointer-events-none"
              style={{ borderColor: "var(--accent)33" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-dashed rounded-full pointer-events-none"
              style={{ borderColor: "var(--border)" }}
            />

            <motion.div
              className="cursor-target relative h-full w-full rounded-[32px] p-2 border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "0 24px 64px var(--shadow)",
                rotate: "3deg",
              }}
              whileHover={{ rotate: "0deg", scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              onFocus={() => setHovered(true)}
              onBlur={() => setHovered(false)}
              tabIndex={0}
            >
              <div
                className="h-full w-full rounded-[24px] overflow-hidden relative"
                style={{
                  background: "var(--surface-secondary)",
                 
                }}
              >
                <FlipCard
                  images={[robloxImg, robloxImg2]}
                  interval={3000}
                />
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
          </div>
        </motion.div>

        </div>
      </div>

      <button
        aria-label="Scroll ke bawah"
        onClick={scrollToNext}
        className="cursor-target absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300 group"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={22} />
        </motion.div>
      </button>
    </section>
  );
};

export default Hero;