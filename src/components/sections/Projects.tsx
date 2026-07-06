import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="section-diagonal py-24 px-6" style={{ background: "var(--bg-secondary)" }}>
      {/* Orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "var(--orb-1)", opacity: 0.4 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{ background: "var(--orb-3)", opacity: 0.3 }}
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
            Portofolio
          </p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>Proyek saya</h2>
          <p className="max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            Beberapa proyek yang pernah saya kerjakan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;