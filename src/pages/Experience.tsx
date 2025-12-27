import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { profileData } from "../data/profile";
import { Heading, Text, ButtonText } from "../components/typography";
import { ExperienceCard } from "../components/experience";
import { Navigation } from "../components/layout/Navigation";
import { TimelineContainer, TimelineItem } from "../components/timeline";

function Experience() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const location = useLocation();

  // Scroll to anchor on mount if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Expand the card if it's expandable
          const index = profileData.experience.findIndex((exp) => {
            const anchorId = `experience-${exp.id}`;
            return `#${anchorId}` === location.hash;
          });
          if (index !== -1) {
            setExpandedCards(new Set([index]));
          }
        }, 100);
      }
    }
  }, [location.hash]);

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
    "hsl(var(--accent-primary))",
    "hsl(var(--accent-secondary))",
    "hsl(var(--accent-tertiary))",
  ];

  const badgeVariants = ["primary", "secondary", "tertiary"] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Header with back link */}
      <section className="relative pt-24 pb-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link
              to="/"
              className="text-base font-semibold font-body text-primary hover:text-primary-hover transition-colors duration-fast flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <Heading variant="display" className="mb-4">
              Experience
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              A comprehensive overview of my professional journey
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Experience List with Timeline */}
      {profileData.experience && profileData.experience.length > 0 && (
        <section className="relative py-24 sm:py-32 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <TimelineContainer>
              {profileData.experience.map((exp, index) => {
                const accentColor = accentColors[index % accentColors.length];
                const badgeVariant =
                  badgeVariants[index % badgeVariants.length];
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
          </div>
        </section>
      )}

      {/* Back to Home CTA */}
      <section className="relative py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
            >
              <ButtonText>Back to Home</ButtonText>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
