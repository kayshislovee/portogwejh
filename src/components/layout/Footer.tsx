import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Mail, MapPin, Code2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { personalInfo } from "../../data/portfolioData";
import { useState } from "react";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/username", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/username", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://instagram.com/username", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "https://twitter.com/username", label: "Twitter" },
];

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const services = [
    { icon: <Code2 size={15} />, label: t("footer.services.web") },
    { icon: <Sparkles size={15} />, label: t("footer.services.frontend") },
  ];

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
      style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[100px]" style={{ background: "var(--orb-1)", opacity: 0.3 }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest px-1.5 py-0.5 rounded" style={{ background: "var(--accent-soft)", color: "var(--text-muted)" }}>
                {personalInfo.name.toUpperCase().slice(0, 2)}
              </span>
              <span className="text-lg font-bold" style={{ color: "var(--text)" }}>
                {personalInfo.name.split(" ")[0]}
              </span>
            </div>
            <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{t("footer.portfolio")}</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{t("footer.tagline")}</p>
            <div className="flex flex-col gap-2.5">
              {services.map((s) => (
                <div key={s.label} className="flex items-center gap-2.5" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent)" }}>{s.icon}</span>
                  <span className="text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tautan Cepat */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t("footer.quick_links")}</h4>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
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

          {/* Hubungi Kami */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t("footer.contact")}</h4>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:ilham.offc1012@email.com"
                className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "var(--accent)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}
              >
                <Mail size={15} style={{ color: "var(--accent)" }} />
                ilham.offc1012@email.com
              </a>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <MapPin size={15} style={{ color: "var(--accent)" }} />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                {t("footer.available")}
              </div>
            </div>
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
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text-muted)" }}
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

          {/* Tetap Terupdate */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-0.5" style={{ background: "var(--accent)" }} />
              <h4 className="font-semibold text-sm" style={{ color: "var(--text)" }}>{t("footer.stay_updated")}</h4>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              {t("footer.stay_updated_desc")}
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder={t("footer.email_placeholder")}
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
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
                onMouseEnter={(e) => { if (!submitted) (e.currentTarget as HTMLElement).style.background = "var(--accent-hover)"; }}
                onMouseLeave={(e) => { if (!submitted) (e.currentTarget as HTMLElement).style.background = "var(--accent)"; }}
              >
                {submitted ? `✓ ${t("footer.subscribed")}` : t("footer.subscribe")}
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 relative" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-3">
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold" style={{ color: "var(--accent)" }}>{personalInfo.name}</span>
            {" "}. {t("footer.rights")}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{t("footer.built_with")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;