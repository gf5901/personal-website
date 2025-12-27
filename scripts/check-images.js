#!/usr/bin/env node

/**
 * Diagnostic script to check if images exist and paths are correct
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Read profile data directly (simple approach)
import { readFileSync } from 'fs';
const profileFile = readFileSync(join(rootDir, 'src/data/profile.ts'), 'utf-8');

// Extract image paths using regex (simple parsing)
const experienceLogos = profileFile.match(/logo:\s*['"]([^'"]+)['"]/g) || [];
const projectImages = profileFile.match(/image:\s*['"]([^'"]+)['"]/g) || [];
const educationLogos = profileFile.match(/logo:\s*['"]([^'"]+)['"]/g) || [];

// Parse the actual paths
const getImagePaths = (matches) => {
  return matches
    .map(m => m.match(/['"]([^'"]+)['"]/)?.[1])
    .filter(Boolean)
    .filter(p => p.startsWith('/images/'));
};

console.log('🔍 Checking image files...\n');

let missingCount = 0;
let foundCount = 0;

// Check all image paths
const allImagePaths = [
  ...getImagePaths(experienceLogos),
  ...getImagePaths(projectImages),
  ...getImagePaths(educationLogos)
];

// Remove duplicates
const uniquePaths = [...new Set(allImagePaths)];

console.log('📁 Checking image files...\n');

uniquePaths.forEach(imagePath => {
  const fullPath = join(rootDir, 'public', imagePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    console.log(`  ✅ ${imagePath} (${(stats.size / 1024).toFixed(2)} KB)`);
    foundCount++;
  } else {
    console.log(`  ❌ ${imagePath} - FILE NOT FOUND`);
    console.log(`     Expected at: ${fullPath}`);
    missingCount++;
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log(`📊 Summary: ${foundCount} found, ${missingCount} missing`);

if (missingCount > 0) {
  console.log('\n💡 To fix:');
  console.log('   1. Run: node scripts/download-images.mjs');
  console.log('   2. Or manually download images to public/images/');
  console.log('   3. See scripts/README.md for details');
} else {
  console.log('\n✅ All images are present!');
}

