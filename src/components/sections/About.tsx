import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";

const profilePhoto = new URL("../../assets/image/roblox.png", import.meta.url).href;

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#1a1918]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-72 h-72 mx-auto md:mx-0">
              <div className="absolute inset-0 border-2 border-amber-500/20 rounded-2xl translate-x-3 translate-y-3" />
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/300x300/252423/f59e0b?text=Foto";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">
              Tentang Saya
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">Siapa saya?</h2>
            <p className="text-gray-400 leading-relaxed mb-6">{personalInfo.about}</p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={14} className="text-amber-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
              {[
                { value: "2+", label: "Tahun belajar" },
                { value: "10+", label: "Proyek selesai" },
                { value: "5+", label: "Tech dikuasai" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
