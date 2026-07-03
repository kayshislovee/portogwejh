import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#1a1918]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Portofolio</p>
          <h2 className="text-4xl font-bold text-white mb-4">Proyek saya</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Beberapa proyek yang pernah saya kerjakan, mulai dari proyek pembelajaran hingga proyek nyata.
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
