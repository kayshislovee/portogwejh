import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { socialLinks } from "../../data/portfolioData";
import ProfileCard from "../ui/ProfileCard";

const robloxImg = new URL("../../assets/images/gwejh.jpeg", import.meta.url).href;

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
  const { t } = useTranslation();

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
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
           

            <motion.h2
  variants={item}
 
className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
  style={{ color: "var(--text)" }}
>
  {t("hero.greeting")} <br />
  <span
    className="text-transparent bg-clip-text"
    style={{ backgroundImage: "linear-gradient(to right, var(--accent), #818cf8)" }}
  >
    Ilham Fathurohman
  </span>
</motion.h2>

            <motion.p
              variants={item}
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--accent)" }}
            >
              {t("hero.role")}
            </motion.p>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="cursor-target group px-8 py-4 font-bold rounded-full flex items-center gap-2 transition-all duration-300"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  boxShadow: `0 8px 24px var(--shadow)`,
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
              >
                {t("hero.cta")}
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
                    style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--accent)";
                      el.style.color = "#fff";
                      el.style.borderColor = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--surface)";
                      el.style.color = "var(--text-secondary)";
                      el.style.borderColor = "var(--border)";
                    }}
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start text-sm font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <MapPin size={14} style={{ color: "var(--accent)" }} />
                <span>{t("hero.location")}</span>
              </div>
              
             
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                <Sparkles size={14} style={{ color: "#38bdf8" }} />
                <span>{t("hero.role")}</span>
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
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-2 border-dashed rounded-full pointer-events-none"
                style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-dashed rounded-full pointer-events-none"
                style={{ borderColor: "var(--border)" }}
              />
              <ProfileCard images={[robloxImg]} />
            </div>
          </motion.div>

        </div>
      </div>

      <button
        aria-label="Scroll"
        onClick={scrollToNext}
        className="cursor-target absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300 group"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          {t("hero.scroll")}
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={22} />
        </motion.div>
      </button>
    </section>
  );
};

export default Hero;