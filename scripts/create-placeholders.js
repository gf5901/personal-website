#!/usr/bin/env node

/**
 * Creates placeholder images for missing logos
 * These are simple colored rectangles that can be replaced later
 */

import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Simple SVG placeholder generator
function createPlaceholderSVG(text, width = 200, height = 200, color = '#FF4655') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${color}" opacity="0.1"/>
  <rect width="${width}" height="${height}" fill="none" stroke="${color}" stroke-width="2"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
        fill="${color}" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

// Images to create
const images = [
  { path: 'public/images/companies/blueprint.png', text: 'BP', color: '#FF4655' },
  { path: 'public/images/companies/dont-die.png', text: 'DD', color: '#FF4655' },
  { path: 'public/images/companies/opto-investments.png', text: 'OI', color: '#FFD700' },
  { path: 'public/images/companies/eoflix.png', text: 'EF', color: '#00FFFF' },
  { path: 'public/images/projects/blueprint-biomarkers.png', text: 'BB', color: '#FF4655' },
  { path: 'public/images/projects/dont-die-app.png', text: 'DD', color: '#FF4655' },
  { path: 'public/images/projects/eoflix.png', text: 'EF', color: '#00FFFF' },
  { path: 'public/images/education/neumont.png', text: 'NU', color: '#FFD700' },
];

console.log('🎨 Creating placeholder images...\n');

images.forEach(({ path, text, color }) => {
  const fullPath = join(rootDir, path);
  const dir = dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create SVG placeholder
  const svg = createPlaceholderSVG(text, 200, 200, color);
  const svgPath = fullPath.replace('.png', '.svg');
  
  fs.writeFileSync(svgPath, svg);
  console.log(`✅ Created: ${path.replace('.png', '.svg')}`);
});

console.log('\n💡 Note: Created SVG placeholders. Update profile.ts to use .svg instead of .png');
console.log('   Or convert these to PNG using an image converter tool.');

