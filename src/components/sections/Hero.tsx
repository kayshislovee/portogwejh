// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { personalInfo, socialLinks } from "../../data/portfolioData";
const robloxImg = new URL("../../assets/images/roblox.png", import.meta.url).href;
const heroBg = new URL("../../assets/images/bghero.jpg", import.meta.url).href;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
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
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a1918] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-amber-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[100px]"
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
            <motion.div variants={item} className="flex justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                </span>
                <span className="text-amber-200 text-xs font-medium tracking-wide uppercase">
                  Currently open to work
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              {personalInfo.role.split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                {personalInfo.role.split(" ").slice(-1)}
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Halo, saya{" "}
              <span className="text-white font-semibold">{personalInfo.name}</span>.{" "}
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              {/* 👇 cursor-target ditambah di tombol CTA */}
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-target group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-amber-400 transition-all duration-300"
              >
                Lihat Proyek
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target={link.icon === "mail" ? undefined : "_blank"}
                    rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                    aria-label={link.platform}
                    className="cursor-target p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black text-gray-300 transition-all duration-300"
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-500" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="hidden sm:block self-center w-1 h-1 bg-gray-700 rounded-full" />
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-blue-400" />
                <span>{personalInfo.role}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 -right-8 w-28 h-28 border-2 border-amber-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-8 -left-8 w-36 h-36 border-2 border-white/5 rounded-full border-dashed"
              />

              {/* 👇 cursor-target di card foto */}
              <div className="cursor-target group relative h-full w-full bg-[#252423] rounded-[32px] p-2 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[32px] pointer-events-none" />
                <div className="h-full w-full rounded-[24px] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 bg-[#2d2b29]">
                  <img
                    src={robloxImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/400x500/252423/f59e0b?text=Foto+Kamu";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-5 left-5 right-5 bg-[#1a1918]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-medium text-sm">{personalInfo.name}</p>
                    <p className="text-gray-400 text-xs">{personalInfo.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 👇 cursor-target di scroll indicator */}
      <button
        aria-label="Scroll ke bawah"
        onClick={scrollToNext}
        className="cursor-target absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-amber-400 transition-colors duration-300 group"
      >
        <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </button>
    </section>
  );
};

export default Hero;