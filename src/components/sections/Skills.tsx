import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe } from "lucide-react";
import { skills, categoryInfo } from "../../data/portfolioData";
import type { Skill } from "../../types";
import { useState, useRef, useEffect } from "react";

const categories: Skill["category"][] = ["Language", "Framework", "Tool"];

const categoryLabel: Record<Skill["category"], string> = {
  Language: "Languages",
  Framework: "Frameworks",
  Tool: "Design Tools",
};

const Skills = () => {
  // State untuk melacak kartu yang sedang di-hover
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // State untuk tracking posisi kursor
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Motion values untuk smooth cursor
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animation untuk efek smooth
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothCursorX = useSpring(cursorX, springConfig);
  const smoothCursorY = useSpring(cursorY, springConfig);

  // Transform cursor size berdasarkan hover
  const cursorScale = useTransform(
    useSpring(isHovering ? 1.5 : 1, springConfig),
    [1, 1.5],
    [1, 1.5]
  );

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPosition({ x, y });
        cursorX.set(x);
        cursorY.set(y);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
      section.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
        section.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, [cursorX, cursorY]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-24 px-6 bg-[#1a1918] relative overflow-hidden cursor-none"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothCursorX,
          y: smoothCursorY,
          scale: cursorScale,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer circle */}
        <div className="w-8 h-8 rounded-full border-2 border-amber-500/50" />
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-amber-500" />
      </motion.div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-amber-500/10 rounded-full blur-[50px] sm:blur-[100px] animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue-500/5 rounded-full blur-[60px] sm:blur-[120px] animate-pulse" 
          style={{ animationDuration: '7s' }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Skills & Tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">saya</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kumpulan alat dan teknologi yang saya gunakan untuk menghadirkan produk digital.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, catIdx) => {
            const filtered = skills.filter((s) => s.category === category);
            const info = categoryInfo[category];
            const isActive = activeCategory === category;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`
                  relative rounded-2xl p-1 transition-all duration-500 ease-out
                  ${isActive ? 'scale-[1.03] z-10' : 'hover:scale-[1.02]'}
                `}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-2xl opacity-100" />
                <div className={`
                  absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-transparent rounded-2xl opacity-0 transition-opacity duration-500
                  ${isActive ? 'opacity-100' : 'group-hover:opacity-50'}
                `} />

                {/* Card Content */}
                <div className={`
                  relative h-full bg-[#252423] backdrop-blur-xl rounded-[22px] p-6 sm:p-8 border border-white/5 overflow-hidden flex flex-col transition-all duration-300
                  ${isActive ? 'border-amber-500/30 shadow-lg shadow-amber-500/10' : 'border-white/10'}
                `}>
                  
                  {/* Top row: icon + globe */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Category icon */}
                    <motion.div 
                      className={`
                        w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 cursor-none
                        ${isActive 
                          ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30' 
                          : 'bg-[#1a1918] text-amber-500 border border-white/10 hover:bg-white/10'
                        }
                      `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {info.icon}
                    </motion.div>

                    {/* Globe icon dengan animasi muncul */}
                    <motion.div 
                      className={`
                        transition-all duration-300 cursor-none
                        ${isActive 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-4'
                        }
                      `}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.2,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                    >
                      <Globe size={18} className="text-gray-500 mt-1" />
                    </motion.div>
                  </div>

                  {/* Title & description */}
                  <h3 className="text-white font-bold text-xl mb-2">
                    {categoryLabel[category]}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 min-h-[40px]">
                    {info.description}
                  </p>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {filtered.map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className={`
                          px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-none
                          ${isActive 
                            ? 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.1)]' 
                            : 'bg-[#1a1918] text-gray-300 border-white/10 hover:border-amber-500/20 hover:text-amber-200/80'
                          }
                        `}
                        style={{
                          transitionDelay: `${i * 50}ms`
                        }}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
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