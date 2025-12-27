import { motion } from "framer-motion";
import { Heading, Text } from "../components/typography";
import { Section } from "../components/layout";
import { Navigation } from "../components/layout/Navigation";
import { parseMarkdown } from "../lib/utils";
import aboutContent from "../content/about.md?raw";

function About() {
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
              About
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              A little biography of me
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Markdown Content */}
      <Section background="surface">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            {parseMarkdown(aboutContent)}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default About;
