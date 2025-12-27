# Images Directory

This directory contains images for your personal website.

## Directory Structure

```
images/
├── companies/     # Company logos for experience section
├── projects/     # Project images/screenshots
└── education/    # University/school logos
```

## How to Add Images

### Option 1: Use Online Logos (Current Setup)
The profile data currently uses Clearbit logo API which automatically fetches logos from company domains:
- `https://logo.clearbit.com/company-domain.com`

### Option 2: Use Local Images
1. Add your image files to the appropriate subdirectory:
   - Company logos → `companies/`
   - Project images → `projects/`
   - Education logos → `education/`

2. Update `src/data/profile.ts` to use local paths:
   ```typescript
   logo: '/images/companies/blueprint.png',
   image: '/images/projects/blueprint-biomarkers.png',
   ```

### Where to Get Images

**Company Logos:**
- Official company websites (usually in About/Media/Press sections)
- LinkedIn company pages
- [Clearbit Logo API](https://clearbit.com/logo) (already in use)
- [LogoDix](https://logodix.com/)
- [SeekLogo](https://seeklogo.com/)

**Project Images:**
- Screenshots of your projects
- App store listings
- Project websites
- Your own portfolio images

**Education Logos:**
- University official websites
- LinkedIn school pages
- Clearbit Logo API

## Image Guidelines

- **Format**: PNG or SVG (preferred for logos), JPG for photos
- **Size**: 
  - Logos: 200x200px to 400x400px
  - Project images: 800x600px to 1200x800px
- **Optimization**: Compress images before adding to reduce load times
- **Naming**: Use lowercase with hyphens (e.g., `blueprint-logo.png`)

## Current Image Sources

The profile data uses Clearbit's logo API which automatically fetches logos. If a logo fails to load, the image will be hidden gracefully.

To use local images instead, simply replace the URL with a local path like `/images/companies/logo-name.png`.

