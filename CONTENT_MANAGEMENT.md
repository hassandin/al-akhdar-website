# Content Management Documentation

## Overview
The Al-Akhdar Sports Club website includes a simple content management system that allows easy updates to news articles, fixtures, and other content without requiring technical knowledge.

## Content Structure

### News Articles
News articles are stored in the JavaScript file and can be easily updated. Each article contains:
- `id`: Unique identifier
- `title`: Article headline (in both English and Arabic)
- `category`: Type of news (Match Report, Player News, Club News)
- `excerpt`: Brief summary
- `date`: Publication date
- `image`: Path to article image

### Fixtures
Fixture information includes:
- `id`: Unique identifier
- `date`: Day of the month
- `month`: Month name (in both languages)
- `homeTeam`: Home team name
- `awayTeam`: Away team name
- `time`: Match time
- `venue`: Stadium name (in both languages)

## How to Update Content

### Adding New News Articles
1. Open `/js/script.js`
2. Locate the `ContentManager` class
3. Add new articles to both `en` and `ar` sections
4. Follow the existing format for consistency

### Updating Fixtures
1. Open `/js/script.js`
2. Locate the fixtures section in the `ContentManager` class
3. Add or modify fixture information
4. Ensure both English and Arabic versions are updated

### Updating Images
1. Place new images in the `/images/` directory
2. Update the image paths in the content structure
3. Recommended image sizes:
   - News images: 400x300px
   - Team photos: 600x400px
   - Hero images: 1920x1080px

## Language Management

The website supports seamless switching between English and Arabic:

### Text Content
- All text elements use `data-en` and `data-ar` attributes
- The JavaScript automatically switches content based on selected language
- RTL (Right-to-Left) support is automatically applied for Arabic

### Adding New Translatable Text
1. Add `data-en="English text"` and `data-ar="Arabic text"` attributes to HTML elements
2. The language switcher will automatically handle the translation

## File Structure
```
al-akhdar-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── images/             # All website images
    ├── logo.png
    ├── hero-bg.jpg
    ├── news-1.jpg
    ├── news-2.jpg
    ├── news-3.jpg
    ├── senior-team.jpg
    ├── youth-team.jpg
    ├── club-history.jpg
    ├── opponent-logo.png
    └── opponent2-logo.png
```

## Best Practices

1. **Image Optimization**: Compress images before uploading to ensure fast loading
2. **Consistent Naming**: Use descriptive, lowercase filenames with hyphens
3. **Backup**: Always backup the website files before making changes
4. **Testing**: Test changes in both English and Arabic modes
5. **Mobile Compatibility**: Ensure new content displays well on mobile devices

## Future Enhancements

The current system can be extended with:
- Database integration for dynamic content
- Admin panel for non-technical users
- Automated image resizing
- SEO optimization features
- Social media integration

