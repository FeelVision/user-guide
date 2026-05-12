# FeelVision User Guide

This is the official user guide documentation for FeelVision smart glasses, built as a GitHub Pages site.

## Overview

FeelVision is a smart glasses system for visually impaired individuals. This user guide provides comprehensive documentation on:

- Getting started with the system
- Hardware setup and configuration
- Android app installation
- Seven specialized modes (Default, OCR, Navigate, Face, Currency, Educational, Narrate)
- Face recognition setup and usage
- Troubleshooting common issues
- Frequently asked questions

## Local Development

### Prerequisites

- Ruby 2.5 or higher
- Bundler
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/feelvision/feelvision.git
   cd feelvision/user-guide
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000/user-guide/`

### Building for Production

```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Project Structure

```
user-guide/
├── _config.yml          # Jekyll configuration
├── _includes/           # Reusable includes
├── _layouts/            # Page layouts
├── _posts/              # Blog posts (if any)
├── assets/              # Static assets
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── images/         # Images
│       ├── hardware/   # Hardware images
│       ├── modes/      # Mode demonstration images
│       ├── setup/      # Setup screenshots
│       └── screenshots/ # App screenshots
├── pages/               # Documentation pages
│   ├── getting-started.md
│   ├── hardware-setup.md
│   ├── app-installation.md
│   ├── modes.md
│   ├── face-recognition.md
│   ├── troubleshooting.md
│   └── faq.md
├── index.md            # Homepage
└── README.md           # This file
```

## Adding New Content

### Adding a New Page

1. Create a new markdown file in the `pages/` directory
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   subtitle: Optional subtitle
   toc: true
   ---
   ```
3. Write your content in Markdown
4. Add the page to the navigation in `_config.yml`

### Adding Images

1. Place images in the appropriate subdirectory under `assets/images/`
2. Reference images in markdown:
   ```markdown
   ![Alt text](/assets/images/hardware/module-front.jpg)
   ```
3. Follow the image specifications in each directory's README

### Modifying Styles

Edit `assets/css/main.css` to modify the site's appearance.

### Modifying JavaScript

Edit `assets/js/main.js` to add or modify interactive features.

## Deployment to GitHub Pages

### Automatic Deployment

1. Push this repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select the `user-guide` directory as source
4. The site will be automatically deployed

### Manual Deployment

1. Build the site:
   ```bash
   bundle exec jekyll build
   ```
2. Push the `_site` directory to your `gh-pages` branch

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Navigation menu
- Social links
- Analytics settings

### Theme Colors

Edit the CSS variables in `assets/css/main.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... other variables */
}
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This documentation is licensed under the same license as the FeelVision project.

## Support

For issues with the documentation:
- Open an issue on GitHub
- Contact: support@feelvision.org
- Community: community.feelvision.org

## Resources

- [FeelVision Main Repository](https://github.com/feelvision/feelvision)
- [FeelVision Website](https://feelvision.org)
- [Community Forum](https://community.feelvision.org)
