import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Check, Code, Layers, Wrench, Sparkles, Briefcase, Users, Award, BookOpen } from 'lucide-react';
import { profileData } from './data/profile';
import { Heading, Text, ButtonText } from './components/typography';
import { ExperienceCard } from './components/experience';
import { Section, SectionHeading, ScrollIndicator, Navigation } from './components/layout';
import { ProjectCard } from './components/projects';
import { SocialButton } from './components/social';
import { EducationCard } from './components/education';
import { SkillsCategoryCard } from './components/skills';
import { BlogCard } from './components/blog';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1] as [number, number, number, number],
      },
    },
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={itemVariants}>
            <Heading variant="hero" className="mb-4 sm:mb-6">
              <span className="text-gradient-primary">Hi, I'm</span>
              <br />
              <span className="text-foreground">{profileData.name}</span>
            </Heading>
          </motion.div>
          
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-8 sm:mb-12">
            <Text variant="lead" className="text-lg sm:text-xl">
              {profileData.tagline}
            </Text>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12"
          >
            <div className="flex items-center gap-2 text-foreground-muted">
              <Briefcase className="w-5 h-5" style={{ color: 'hsl(var(--accent-primary))' }} />
              <Text variant="small" className="font-semibold">
                15+ Years
              </Text>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <Users className="w-5 h-5" style={{ color: 'hsl(var(--accent-secondary))' }} />
              <Text variant="small" className="font-semibold">
                100K+ Users
              </Text>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <Award className="w-5 h-5" style={{ color: 'hsl(var(--accent-tertiary))' }} />
              <Text variant="small" className="font-semibold">
                Full-Stack
              </Text>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary CTA - View My Work */}
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Briefcase className="w-5 h-5" />
              <ButtonText>View My Work</ButtonText>
            </motion.a>

            {profileData.social.linkedin && (
              <SocialButton
                href={profileData.social.linkedin}
                icon={Linkedin}
                variant="outline-primary"
              >
                Connect on LinkedIn
              </SocialButton>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* About Section */}
      {profileData.about && (
        <Section background="surface">
          <SectionHeading>{profileData.about.heading}</SectionHeading>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <Text variant="body" relaxed className="mb-8 text-lg">
              {profileData.about.description}
            </Text>

            {profileData.about.highlights && profileData.about.highlights.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profileData.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <Text variant="muted">{highlight}</Text>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </Section>
      )}

      {/* Experience Section */}
      {profileData.experience && profileData.experience.length > 0 && (
        <Section background="background">
          <SectionHeading>Experience</SectionHeading>

          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            {profileData.experience.slice(0, 3).map((exp, index) => {
              const accentColors = [
                'hsl(var(--accent-primary))',
                'hsl(var(--accent-secondary))',
                'hsl(var(--accent-tertiary))',
              ];
              const accentColor = accentColors[index % accentColors.length];
              const badgeVariants = ['primary', 'secondary', 'tertiary'] as const;
              const badgeVariant = badgeVariants[index % badgeVariants.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ExperienceCard
                    experience={exp}
                    index={index}
                    accentColor={accentColor}
                    badgeVariant={badgeVariant}
                    showExpandable={false}
                  />
                </motion.div>
              );
            })}
          </div>

          {profileData.experience.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Link
                to="/experience"
                className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
              >
                <ButtonText>View All Experience ({profileData.experience.length} positions)</ButtonText>
              </Link>
            </motion.div>
          )}
        </Section>
      )}

      {/* Skills Section */}
      {profileData.skills && (
        <Section background="surface">
          <SectionHeading>Skills</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(profileData.skills).map(([category, skills], categoryIndex) => {
              const categoryIcons = {
                languages: Code,
                frameworks: Layers,
                tools: Wrench,
                other: Sparkles,
              };
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Sparkles;

              return (
                <SkillsCategoryCard
                  key={category}
                  category={category}
                  skills={skills}
                  icon={IconComponent}
                  index={categoryIndex}
                />
              );
            })}
          </div>
        </Section>
      )}

      {/* Projects Section */}
      {profileData.projects && profileData.projects.length > 0 && (
        <Section id="projects" background="background">
          <SectionHeading>Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {profileData.projects.map((project, index) => {
              const accentColors = [
                'hsl(var(--accent-primary))',
                'hsl(var(--accent-secondary))',
                'hsl(var(--accent-tertiary))',
              ];
              const accentColor = accentColors[index % accentColors.length];

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  accentColor={accentColor}
                />
              );
            })}
          </div>
        </Section>
      )}

      {/* Education Section */}
      {profileData.education && profileData.education.length > 0 && (
        <Section background="surface">
          <SectionHeading>Education</SectionHeading>

          <div className="space-y-8 max-w-4xl mx-auto">
            {profileData.education.map((edu, index) => (
              <EducationCard key={index} education={edu} index={index} />
            ))}
          </div>
        </Section>
      )}

      {/* Articles Section */}
      {profileData.blog && profileData.blog.length > 0 && (
        <Section id="articles" background="background">
          <SectionHeading>Articles</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {profileData.blog.slice(0, 3).map((post, index) => {
              const accentColors = [
                'hsl(var(--accent-primary))',
                'hsl(var(--accent-secondary))',
                'hsl(var(--accent-tertiary))',
              ];
              const accentColor = accentColors[index % accentColors.length];

              return (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  accentColor={accentColor}
                />
              );
            })}
          </div>

          {profileData.blog.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Link
                to="/articles"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary flex items-center gap-2 mx-auto"
              >
                <BookOpen className="w-5 h-5" />
                <ButtonText>View All Articles ({profileData.blog.length} articles)</ButtonText>
              </Link>
            </motion.div>
          )}
        </Section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading variant="section" className="mb-6 uppercase">
              Let's <span className="text-gradient-primary">Connect</span>
            </Heading>
            <Text variant="lead" className="mb-8 max-w-2xl mx-auto">
              Would love to chat about anything and everything.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {profileData.social.email && (
                <SocialButton
                  href={`mailto:${profileData.social.email}`}
                  icon={Mail}
                  variant="secondary"
                  size="lg"
                  withGlow
                  external={false}
                >
                  Send Email
                </SocialButton>
              )}
              {profileData.social.linkedin && (
                <SocialButton
                  href={profileData.social.linkedin}
                  icon={Linkedin}
                  variant="outline-secondary"
                  size="lg"
                >
                  LinkedIn
                </SocialButton>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;

