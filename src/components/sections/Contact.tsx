import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { socialLinks, personalInfo } from "../../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#252423]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Kontak</p>
          <h2 className="text-4xl font-bold text-white mb-5">Mari berkolaborasi!</h2>
          <p className="text-gray-400 leading-relaxed mb-10">
            Saya terbuka untuk diskusi proyek, kesempatan kerja, atau sekadar ngobrol soal teknologi.
          </p>

          <a
            href={`mailto:kamu@email.com`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-amber-400 transition-all duration-300 mb-12"
          >
            <Send size={16} />
            Kirim Email
          </a>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-gray-600 text-sm">atau temukan saya di</span>
            <div className="flex-1 h-px bg-white/5" />
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-[#1a1918] border border-white/10 hover:border-amber-500/40 hover:text-amber-300 text-gray-400 rounded-xl text-sm font-medium transition-all duration-200"
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
