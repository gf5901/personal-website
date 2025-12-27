import { defineConfig } from 'tsup';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm'],
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  publicDir: 'public',
  minify: process.env.NODE_ENV === 'production',
  treeshake: true,
  target: 'es2022',
  noExternal: [/.*/], // Bundle all dependencies
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'css',
      '.md': 'text',
    };
    
    // Replace process.env for browser compatibility
    options.define = {
      ...options.define,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env': '{"NODE_ENV":' + JSON.stringify(process.env.NODE_ENV || 'production') + '}',
    };
    
    // Inject process polyfill for browser
    const nodeEnv = process.env.NODE_ENV || 'production';
    options.banner = {
      ...options.banner,
      js: `if(typeof process==="undefined"){var process={};process.env={};process.env.NODE_ENV=${JSON.stringify(nodeEnv)};}`,
    };
    
    // Handle ?raw imports for markdown files
    options.plugins = [
      ...(options.plugins || []),
      {
        name: 'markdown-raw-loader',
        setup(build) {
          // Intercept imports ending with ?raw
          build.onResolve({ filter: /\.md\?raw$/ }, (args) => {
            return {
              path: args.path.replace('?raw', ''),
              namespace: 'md-raw',
            };
          });

          // Load the file as text and export as default
          build.onLoad({ filter: /.*/, namespace: 'md-raw' }, (args) => {
            const filePath = join(process.cwd(), args.path);
            const contents = readFileSync(filePath, 'utf-8');
            return {
              contents: `export default ${JSON.stringify(contents)};`,
              loader: 'js',
            };
          });
        },
      },
    ];
  },
  onSuccess: async () => {
    // Copy and process index.html to dist
    try {
      const htmlPath = join(process.cwd(), 'index.html');
      const distHtmlPath = join(process.cwd(), 'dist', 'index.html');
      let htmlContent = readFileSync(htmlPath, 'utf-8');
      
      // Replace development script reference with production build
      // First, add CSS link to head (before closing </head>)
      htmlContent = htmlContent.replace(
        /(<\/head>)/,
        '    <link rel="stylesheet" href="/index.css" />\n$1'
      );
      
      // Then replace the script tag
      htmlContent = htmlContent.replace(
        /<script\s+type="module"\s+src="\/src\/index\.tsx"><\/script>/,
        '<script type="module" src="/index.js"></script>'
      );
      
      // Write the processed HTML to dist
      writeFileSync(distHtmlPath, htmlContent, 'utf-8');
    } catch (error) {
      console.error('Error processing index.html:', error);
    }
  },
});

