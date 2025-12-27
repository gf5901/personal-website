import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { Text } from '../components/typography';
import { Heading } from '../components/typography';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Simple markdown parser for basic formatting
 * Supports:
 * - Headers (# ## ###)
 * - Links [text](url)
 * - Code blocks (```)
 * - Paragraphs
 */
export function parseMarkdown(content: string): React.ReactNode {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let elementKey = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        // Process links in the text
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;
        
        while ((match = linkRegex.exec(text)) !== null) {
          if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
          }
          parts.push(
            <a
              key={`link-${elementKey}-${parts.length}`}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {match[1]}
            </a>
          );
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < text.length) {
          parts.push(text.substring(lastIndex));
        }

        elements.push(
          <Text key={elementKey++} variant="body" relaxed className="mb-4">
            {parts.length > 0 ? parts : text}
          </Text>
        );
      }
      currentParagraph = [];
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    // Code blocks
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        flushParagraph();
        elements.push(
          <pre key={elementKey++} className="bg-elevated p-4 rounded-md overflow-x-auto mb-4">
            <code className="text-sm font-mono">{codeBlockContent.join('\n')}</code>
          </pre>
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        flushParagraph();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    // Headers
    if (trimmed.startsWith('# ')) {
      flushParagraph();
      elements.push(
        <Heading key={elementKey++} variant="section" className="mb-4 mt-8">
          {trimmed.substring(2)}
        </Heading>
      );
      return;
    }
    if (trimmed.startsWith('## ')) {
      flushParagraph();
      elements.push(
        <Heading key={elementKey++} variant="card" className="mb-3 mt-6">
          {trimmed.substring(3)}
        </Heading>
      );
      return;
    }
    if (trimmed.startsWith('### ')) {
      flushParagraph();
      elements.push(
        <Heading key={elementKey++} variant="card" className="mb-2 mt-4 text-lg">
          {trimmed.substring(4)}
        </Heading>
      );
      return;
    }

    // Empty line
    if (!trimmed) {
      flushParagraph();
      return;
    }

    // Regular text
    currentParagraph.push(trimmed);
  });

  flushParagraph();

  return <>{elements}</>;
}

