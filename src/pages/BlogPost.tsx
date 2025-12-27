import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { profileData } from '../data/profile';
import { Heading, Text, ButtonText } from '../components/typography';
import { Badge } from '../components/ui';
import { Navigation } from '../components/layout/Navigation';
import { parseMarkdown } from '../lib/utils';

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = profileData.blog?.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <Heading variant="section" className="mb-4">
            Post Not Found
          </Heading>
          <Text variant="muted" className="mb-8">
            The blog post you're looking for doesn't exist.
          </Text>
          <Link
            to="/articles"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
          >
            <ButtonText>Back to Articles</ButtonText>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const badgeVariant = 'primary';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      {/* Header with back link */}
      <section className="relative pt-24 pb-12 bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Text
              as={Link}
              variant="link"
              to="/articles"
              className="transition-colors duration-fast flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Text>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="relative py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading variant="display" className="mb-6">
              {post.title}
            </Heading>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-foreground-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant={badgeVariant} size="sm" interactive>
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            <div className="prose prose-invert max-w-none">
              {parseMarkdown(post.content)}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="relative py-12 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:bg-primary-hover transition-all duration-fast ease-out glow-primary"
            >
              <ButtonText>Back to Blog</ButtonText>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;

