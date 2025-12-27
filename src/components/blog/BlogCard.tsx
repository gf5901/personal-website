import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Heading, Text } from '../typography';
import { Badge } from '../ui';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime?: string;
}

export interface BlogCardProps {
  post: BlogPost;
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

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  index,
  accentColor,
  className = '',
}) => {
  const badgeVariant = index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary';
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={`group relative p-8 bg-elevated border border-border rounded-md cursor-pointer overflow-hidden ${className}`}
    >
      <Link to={`/articles/${post.id}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
      
      <div
        className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal pointer-events-none"
        style={{ borderColor: accentColor }}
      />

      <div className="relative z-0 pointer-events-none">
        <div className="flex items-start justify-between gap-4 mb-4">
          <Heading variant="card" className="flex-1 group-hover:text-primary transition-colors">
            {post.title}
          </Heading>
        </div>

        <Text variant="muted" relaxed className="mb-6 line-clamp-3">
          {post.excerpt}
        </Text>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-foreground-muted">
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
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant={badgeVariant} size="sm" interactive>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

