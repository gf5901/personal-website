import { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Heading, Text } from '../components/typography';
import { ExperienceCard } from '../components/experience';
import { ProjectCard } from '../components/projects';
import { Section, SectionHeading } from '../components/layout';
import { Navigation } from '../components/layout/Navigation';
import { TimelineContainer, TimelineItem } from '../components/timeline';

function Work() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  const accentColors = [
    'hsl(var(--accent-primary))',
    'hsl(var(--accent-secondary))',
    'hsl(var(--accent-tertiary))',
  ];

  const badgeVariants = ['primary', 'secondary', 'tertiary'] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header */}
      <section className="relative pt-24 pb-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <Heading variant="display" className="mb-4">
              Work
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              My professional experience and projects
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      {profileData.experience && profileData.experience.length > 0 && (
        <Section background="background">
          <SectionHeading>Experience</SectionHeading>

          <TimelineContainer>
            {profileData.experience.map((exp, index) => {
              const accentColor = accentColors[index % accentColors.length];
              const badgeVariant = badgeVariants[index % badgeVariants.length];
              const isExpanded = expandedCards.has(index);

              return (
                <TimelineItem
                  key={index}
                  accentColor={accentColor}
                  index={index}
                  variants={itemVariants}
                >
                  <ExperienceCard
                    experience={exp}
                    index={index}
                    accentColor={accentColor}
                    badgeVariant={badgeVariant}
                    isExpanded={isExpanded}
                    onToggleExpand={() => toggleCard(index)}
                    showExpandable={true}
                  />
                </TimelineItem>
              );
            })}
          </TimelineContainer>
        </Section>
      )}

      {/* Projects Section */}
      {profileData.projects && profileData.projects.length > 0 && (
        <Section background="surface">
          <SectionHeading>Projects</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {profileData.projects.map((project, index) => {
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
    </div>
  );
}

export default Work;

