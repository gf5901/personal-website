import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Heading, Text } from "../typography";
import { Badge } from "../ui";

import { ExperienceID } from "../../data/profile";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  startDate?: string;
  endDate?: string;
  experienceId?: ExperienceID; // Experience ID to link to experience entry
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  accentColor: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

// Utility function to create URL-friendly slugs
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  accentColor,
  className = "",
}) => {
  const navigate = useNavigate();
  const badgeVariant =
    index % 3 === 0 ? "primary" : index % 3 === 1 ? "secondary" : "tertiary";
  const projectSlug = createSlug(project.title);

  const handleCardClick = () => {
    navigate(`/projects/${projectSlug}`);
  };

  // Generate a unique ID for this card instance to scope styles
  const cardId = React.useMemo(() => {
    return `project-card-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
  }, [project.title, index]);

  return (
    <>
      <style>{`
        .${cardId} {
          --accent-color: ${accentColor};
        }
        .${cardId}::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 20;
          box-shadow: inset 0 0 0 0px transparent;
          transition: box-shadow 0.2s ease;
        }
        .${cardId}.group:hover::before {
          box-shadow: inset 0 0 0 2px var(--accent-color) !important;
        }
      `}</style>
      <motion.div
        key={project.title}
        id={cardId}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{
          y: -8,
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
        onClick={handleCardClick}
        className={`${cardId} group relative p-8 bg-elevated border border-border rounded-md cursor-pointer overflow-hidden transition-shadow duration-normal ${className}`}
      >
      <div className="relative z-10">
        {project.image && (
          <div className="mb-6 -mx-8 -mt-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover bg-elevated"
              onError={(e) => {
                // Show placeholder if image fails to load
                const img = e.currentTarget;
                img.style.display = "none";
                const placeholder = document.createElement("div");
                placeholder.className =
                  "w-full h-48 bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center";
                const text = document.createElement("div");
                text.className = "text-foreground-muted text-sm font-semibold";
                text.textContent = project.title;
                placeholder.appendChild(text);
                img.parentElement?.appendChild(placeholder);
              }}
            />
          </div>
        )}

        <Heading variant="card" className="mb-4">
          {project.title}
        </Heading>

        {(project.startDate || project.endDate) && (
          <div className="flex items-center gap-2 mb-4 text-sm text-foreground-muted">
            <Calendar className="w-4 h-4" />
            <span>
              {project.startDate}
              {project.endDate && ` - ${project.endDate}`}
            </span>
          </div>
        )}

        <Text variant="muted" relaxed className="mb-6">
          {project.description}
        </Text>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant={badgeVariant} size="sm" interactive>
              {tech}
            </Badge>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className="flex gap-4">
            {project.link && (
              <Text
                as="a"
                variant="link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Text>
            )}
            {project.github && (
              <Text
                as="a"
                variant="link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Text>
            )}
          </div>
        )}
      </div>
    </motion.div>
    </>
  );
};
