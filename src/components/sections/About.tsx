import { motion } from "framer-motion";
import { Rocket, Code2, Cpu } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
const profilePhoto = new URL("../../assets/images/roblox.png", import.meta.url).href;

const stats = [
  { value: "2", label: "Years Learning", icon: <Rocket size={18} />, color: "var(--accent)" },
  { value: "5+", label: "Projects Done", icon: <Code2 size={18} />, color: "#818cf8" },
  { value: "5+", label: "Technologies", icon: <Cpu size={18} />, color: "#a78bfa" },
];

const About = () => {
  return (
    
    <section id="about" className="section-dots py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
      {/* Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "var(--orb-1)", opacity: 0.5 }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: "var(--orb-2)", opacity: 0.4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-72 h-72 rounded-full border" style={{ borderColor: "var(--border)" }} />
            <div className="absolute w-96 h-96 rounded-full border" style={{ borderColor: "var(--border)" }} />

            <div
              className="relative w-60 h-60 rounded-full overflow-hidden border-2 shadow-xl z-10"
              style={{ borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)", boxShadow: `0 16px 48px var(--shadow)` }}
            >
              <img src={profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {stats.map((stat, i) => {
              const positions = [
                "-top-4 -left-4 md:left-0",
                "-bottom-4 -right-4 md:right-0",
                "bottom-10 -left-8 md:-left-4",
              ];
              const delays = [0.3, 0.5, 0.7];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: i === 1 ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delays[i] }}
                  className={`absolute ${positions[i]} z-20 flex items-center gap-3 rounded-2xl px-4 py-3`}
                  style={{
                    background: "var(--surface)",
                    border: `1px solid var(--border)`,
                    boxShadow: `0 8px 24px var(--shadow)`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--accent-soft)", color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p className="font-bold text-xl leading-none" style={{ color: "var(--text)" }}>{stat.value}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
              Tentang Saya
            </p>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--text)" }}>Siapa saya?</h2>
            <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>{personalInfo.about}</p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Node.js", "Figma"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent-soft-text)",
                    borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;