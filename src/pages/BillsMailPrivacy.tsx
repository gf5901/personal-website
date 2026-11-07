import { motion } from "framer-motion";
import { Heading, Text } from "../components/typography";
import { Section } from "../components/layout";
import { Navigation } from "../components/layout/Navigation";
import { parseMarkdown } from "../lib/utils";
import privacyContent from "../content/bills-mail-privacy.md?raw";

// Privacy policy for the personal "bills-mail" Google OAuth app.
// Google's OAuth consent screen links here (gregoryfong.io/privacy/bills-mail).
function BillsMailPrivacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative pt-24 pb-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <Heading variant="display" className="mb-4">
              bills-mail Privacy Policy
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              How my personal bill-tracking tool handles Gmail data
            </Text>
          </motion.div>
        </div>
      </section>

      <Section background="surface">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          {parseMarkdown(privacyContent)}
        </div>
      </Section>
    </div>
  );
}

export default BillsMailPrivacy;
