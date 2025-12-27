# Personal Website

A modern personal website built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **tsup** - Fast bundler
- **Node 22** - Runtime
- **Yarn** - Package manager

## Getting Started

### Prerequisites

- Node.js 22 or higher
- Yarn

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

This will start the development server with hot reloading.

### Build

```bash
yarn build
```

This will create a production build in the `dist` directory.

### Preview

```bash
yarn preview
```

This will build and serve the production build locally.

## Deployment

The project includes a deployment script for AWS S3 and CloudFront.

### Setup

Set the following environment variables:

```bash
export S3_BUCKET=your-s3-bucket-name
export CLOUDFRONT_DISTRIBUTION_ID=your-cloudfront-distribution-id
```

### Deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

The script will:
1. Build the project
2. Sync files to S3
3. Invalidate CloudFront cache

## Adding shadcn/ui Components

To add shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
```

## Design Guidelines

This project follows design principles inspired by Riot Games' approach to web design. See [DESIGN_GUIDELINES.md](./DESIGN_GUIDELINES.md) for comprehensive design system documentation including:

- Color system and palettes
- Typography scale and usage
- Component patterns
- Animation guidelines
- Accessibility standards

## Project Structure

```
.
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions
│   ├── App.tsx        # Main app component
│   ├── index.tsx      # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── dist/              # Build output
├── deploy.sh          # Deployment script
├── DESIGN_GUIDELINES.md  # Design system documentation
└── package.json       # Dependencies

```

