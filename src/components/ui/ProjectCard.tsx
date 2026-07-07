import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-target group relative rounded-2xl overflow-hidden border transition-all duration-300"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)44";
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px var(--shadow)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="relative h-48 overflow-hidden" style={{ background: "var(--surface-secondary)" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x300/dbeafe/3b82f6?text=Project";
          }}
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white rounded-lg text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white rounded-lg text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 transition-colors" style={{ color: "var(--text)" }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
          {t(project.description)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-full border"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent-soft-text)",
                borderColor: "var(--accent)22",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;