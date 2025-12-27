import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';
import { profileData, ExperienceID } from '../data/profile';
import { Heading, Text, ButtonText } from '../components/typography';
import { Badge } from '../components/ui';
import { Navigation } from '../components/layout/Navigation';
import { SocialButton } from '../components/social';

// Utility function to create URL-friendly slugs
function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Find project by slug
function findProjectBySlug(slug: string) {
  return profileData.projects.find((project) => createSlug(project.title) === slug);
}

// Get experience entry by ID (prefer one with a logo if multiple exist)
function getExperienceById(experienceId: ExperienceID) {
  const matching = profileData.experience.filter(
    (exp) => exp.id === experienceId
  );
  // Prefer an entry with a logo if available
  return matching.find(exp => exp.logo) || matching[0];
}

// Create anchor ID for experience
function createExperienceAnchor(experienceId: ExperienceID): string {
  return `experience-${experienceId}`;
}

function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? findProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <Heading variant="section" className="mb-4">
              Project Not Found
            </Heading>
            <Text variant="muted" className="mb-8">
              The project you're looking for doesn't exist.
            </Text>
            <Link
              to="/#projects"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
            >
              <ButtonText>Back to Projects</ButtonText>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Find current project index and calculate previous/next
  const currentIndex = profileData.projects.findIndex(
    (p) => createSlug(p.title) === slug
  );
  const totalProjects = profileData.projects.length;
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : totalProjects - 1;
  const nextIndex = currentIndex < totalProjects - 1 ? currentIndex + 1 : 0;
  const previousProject = profileData.projects[previousIndex];
  const nextProject = profileData.projects[nextIndex];

  const badgeVariant = 'primary';
  const relatedExperience = project.experienceId ? getExperienceById(project.experienceId) : null;
  const accentColor = 'hsl(var(--accent-primary))';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header with back link */}
      <section className="relative pt-24 pb-6 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => navigate(-1)}
              className="transition-colors duration-fast flex items-center gap-2 text-foreground-muted hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              <Text variant="link">Back</Text>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      {project.image && (
        <section className="relative bg-surface border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[600px] object-cover"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = 'none';
                }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Content */}
      <article className="relative py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading variant="display" className="mb-6">
              {project.title}
            </Heading>

            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {/* Company Logo and Name */}
              {project.experienceId && relatedExperience && (
                <Link
                  to={`/experience#${createExperienceAnchor(project.experienceId)}`}
                  className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-fast"
                >
                  {relatedExperience.logo && relatedExperience.logo.trim() ? (
                    <img
                      src={relatedExperience.logo}
                      alt={`${relatedExperience.company} logo`}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <div 
                      className="w-6 h-6 rounded-sm flex items-center justify-center text-xs font-bold"
                      style={{ 
                        backgroundColor: `${accentColor}15`,
                        color: accentColor
                      }}
                    >
                      {relatedExperience.company.substring(0, 2).toUpperCase()}
                    </div>
                  )}
                  <Text 
                    variant="body" 
                    className="font-semibold group-hover:underline"
                    style={{ color: accentColor }}
                  >
                    {relatedExperience.company}
                  </Text>
                </Link>
              )}

              {/* Date Range */}
              {(project.startDate || project.endDate) && (
                <>
                  {project.experienceId && <span className="text-foreground-muted">•</span>}
                  <div className="flex items-center gap-2 text-foreground-muted">
                    <Calendar className="w-5 h-5" />
                    <Text variant="body">
                      {project.startDate}
                      {project.endDate && ` - ${project.endDate}`}
                    </Text>
                  </div>
                </>
              )}
            </div>

            <Text variant="lead" relaxed className="mb-8">
              {project.description}
            </Text>

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <Heading variant="card" className="mb-4">
                  Technologies
                </Heading>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant={badgeVariant} size="md" interactive>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Related Position */}
            {project.experienceId && relatedExperience && (
              <div className="mb-8">
                <Heading variant="card" className="mb-4">
                  Related Position
                </Heading>
                <Link
                  to={`/experience#${createExperienceAnchor(project.experienceId)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-elevated border border-border rounded-sm hover:bg-elevated-hover hover:border-primary transition-all duration-fast text-foreground group"
                >
                  <Briefcase className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
                  <Text variant="body" className="font-medium">
                    View position at {relatedExperience.company}
                  </Text>
                </Link>
              </div>
            )}

            {/* Links */}
            {(project.link || project.github) && (
              <div className="mb-8">
                <Heading variant="card" className="mb-4">
                  Links
                </Heading>
                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <SocialButton
                      href={project.link}
                      icon={ExternalLink}
                      variant="primary"
                      size="lg"
                    >
                      View Live Demo
                    </SocialButton>
                  )}
                  {project.github && (
                    <SocialButton
                      href={project.github}
                      icon={Github}
                      variant="outline-primary"
                      size="lg"
                    >
                      View on GitHub
                    </SocialButton>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>

      {/* Project Navigation */}
      <section className="relative py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            {/* Previous Project */}
            <Link
              to={`/projects/${createSlug(previousProject.title)}`}
              className="flex-1 w-full sm:w-auto group"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-elevated border border-border rounded-sm hover:bg-elevated-hover hover:border-primary transition-all duration-fast text-left">
                <ArrowLeft className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <Text variant="small" className="text-foreground-muted mb-1">
                    Previous Project
                  </Text>
                  <Text variant="body" className="font-medium truncate">
                    {previousProject.title}
                  </Text>
                </div>
              </div>
            </Link>

            {/* Back to Projects */}
            <Link
              to="/#projects"
              className="px-6 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
            >
              <ButtonText>All Projects</ButtonText>
            </Link>

            {/* Next Project */}
            <Link
              to={`/projects/${createSlug(nextProject.title)}`}
              className="flex-1 w-full sm:w-auto group"
            >
              <div className="flex items-center gap-3 px-6 py-4 bg-elevated border border-border rounded-sm hover:bg-elevated-hover hover:border-primary transition-all duration-fast text-left">
                <div className="flex-1 min-w-0">
                  <Text variant="small" className="text-foreground-muted mb-1">
                    Next Project
                  </Text>
                  <Text variant="body" className="font-medium truncate">
                    {nextProject.title}
                  </Text>
                </div>
                <ArrowRight className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;

