import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { socialLinks } from "../../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-pattern py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      {/* Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "var(--orb-1)", opacity: 0.35 }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: "var(--orb-2)", opacity: 0.3 }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Kontak
          </p>
          <h2 className="text-4xl font-bold mb-5" style={{ color: "var(--text)" }}>Mari berkolaborasi!</h2>
          <p className="leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
            Saya terbuka untuk diskusi proyek, kesempatan kerja, atau sekadar ngobrol soal teknologi.
          </p>

          <a
            href="mailto:kamu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full transition-all duration-300 mb-12"
            style={{
              background: "var(--accent)",
              color: "#fff",
              boxShadow: `0 8px 24px var(--shadow)`,
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--accent)"}
          >
            <Send size={16} />
            Kirim Email
          </a>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>atau temukan saya di</span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium border transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "color-mix(in srgb, var(--accent) 40%, transparent)";
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                {iconMap[link.icon]}
                {link.platform}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;