import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, MapPin, Code2, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { useState } from "react";

const footerLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

const services = [
  { icon: <Code2 size={15} />, label: "Pengembangan Web" },

  { icon: <Sparkles size={15} />, label: "Frontend Developer" },
];

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/kayshislovee", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ilham-offc-75b74541b/", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/bruh_hamm/", label: "Instagram" },
  
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="section-dots pt-16 pb-6"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Orb dekoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "var(--orb-1)", opacity: 0.3 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Kolom 1 — Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-bold tracking-widest px-1.5 py-0.5 rounded"
                style={{ background: "var(--accent-soft)", color: "var(--text-muted)" }}
              >
                {personalInfo.name.toUpperCase().slice(0, 2)}
              </span>
              <span className="text-lg font-bold" style={{ color: "var(--text)" }}>
                {personalInfo.name.split(" ")[0]}
              </span>
            </div>
            <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Portofolio</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col gap-2.5">
              {services.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent)" }}>{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 2 — Tautan Cepat */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>Tautan Cepat</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-left transition-colors duration-200 w-fit"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Kolom 3 — Hubungi Kami */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>Hubungi Kami</h4>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href={`mailto:kamu@email.com`}
                className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e: any) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                onMouseLeave={(e: any) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                <Mail size={15} style={{ color: "var(--accent)" }} />
                ilham.offc1012@email.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={15} style={{ color: "var(--accent)" }} />
                {personalInfo.location}
              </div>

            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "color-mix(in srgb, var(--accent) 50%, transparent)";
                    el.style.color = "var(--accent)";
                    el.style.background = "var(--accent-soft)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                    el.style.background = "var(--surface)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Kolom 4 — Tetap Terupdate */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>Tetap Terupdate</h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Ikuti untuk mendapatkan pembaruan terbaru tentang proyek dan hal menarik lainnya.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Masukkan email Anda"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
                onFocus={(e) => (e.currentTarget as HTMLElement).style.borderColor = "color-mix(in srgb, var(--accent) 60%, transparent)"}
                onBlur={(e) => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
              />
              <motion.button
                onClick={handleSubscribe}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
                style={{
                  background: submitted ? "#22c55e" : "var(--accent)",
                  color: "#fff",
                  boxShadow: "0 4px 12px var(--shadow)",
                }}
                onMouseEnter={(e) => {
                  if (!submitted)
                    (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)";
                }}
                onMouseLeave={(e) => {
                  if (!submitted)
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                }}
              >
                {submitted ? "✓ Berhasil!" : "Mengikuti"}
              </motion.button>
            </div>
          </div>

        </div>

        {/* Divider + copyright */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {/* Dot tengah dekoratif */}
         

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              {personalInfo.name}
            </span>
            {" "}. Semua hak dilindungi undang-undang.
          </p>

          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Dibuat dengan React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;