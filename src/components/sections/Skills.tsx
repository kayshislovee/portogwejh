import { motion } from "framer-motion";
import { skills, categoryInfo } from "../../data/portfolioData";
import type { Skill } from "../../types";



const categories: Skill["category"][] = ["Language", "Framework", "Tool"];
const categoryLabel: Record<Skill["category"], string> = {
  Language: "Languages",
  Framework: "Frameworks",
  Tool: "Design Tools",
};

const Skills = () => {
  return (
  <section id="skills" className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--bg)" }}>
    
      {/* Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{ background: "var(--orb-2)", opacity: 0.5 }}
        />
        <div
          className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: "var(--orb-3)", opacity: 0.4 }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Keahlian
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "var(--text)" }}>Tech Stack saya</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => {
            const filtered = skills.filter((s) => s.category === category);
            const info = categoryInfo[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 32px 6px color-mix(in srgb, var(--accent) 25%, transparent)",
                }}
                className="cursor-target relative rounded-2xl p-6 border transition-all duration-300 group"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "color-mix(in srgb, var(--accent) 50%, transparent)";
                  el.style.background = "color-mix(in srgb, var(--accent) 6%, var(--surface))";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--surface)";
                }}
              >
                <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: "var(--accent)" }} />
                <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: "var(--accent)" }} />
                <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: "var(--accent)" }} />
                <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 rounded-br opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderColor: "var(--accent)" }} />

                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                  >
                    {typeof info.icon === "string" ? info.icon : <info.icon />}
                  </div>
                </div>

                <h3 className="font-bold text-xl mb-2" style={{ color: "var(--text)" }}>
                  {categoryLabel[category]}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                  {info.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {filtered.map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border"
                      style={{
                        background: "var(--accent-soft)",
                        color: "var(--accent-soft-text)",
                        borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;