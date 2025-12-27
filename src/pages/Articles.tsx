import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Heading, Text } from '../components/typography';
import { BlogCard } from '../components/blog';
import { Section, SectionHeading } from '../components/layout';
import { Navigation } from '../components/layout/Navigation';

function Articles() {
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
              Articles
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Thoughts on software development, technology, and building products
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Articles List */}
      {profileData.blog && profileData.blog.length > 0 ? (
        <Section background="background">
          <SectionHeading>All Articles</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {profileData.blog.map((post, index) => {
              const accentColor = accentColors[index % accentColors.length];

              return (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <BlogCard
                    post={post}
                    index={index}
                    accentColor={accentColor}
                  />
                </motion.div>
              );
            })}
          </div>
        </Section>
      ) : (
        <Section background="background">
          <div className="text-center py-12">
            <Text variant="muted" className="text-lg">
              No articles yet. Check back soon!
            </Text>
          </div>
        </Section>
      )}
    </div>
  );
}

export default Articles;

