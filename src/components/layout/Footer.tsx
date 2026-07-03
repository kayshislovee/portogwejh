import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "../../data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  mail: <Mail size={18} />,
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#1a1918] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="p-2 text-gray-600 hover:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-all duration-200"
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
