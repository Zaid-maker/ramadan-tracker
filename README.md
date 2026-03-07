# Ramadan Times - Static Page Generator for SEO

A Node.js script to generate 100+ static HTML pages for Ramadan prayer times across major cities worldwide. Perfect for building a SEO-friendly Ramadan times website with local pages for each city.

## 📊 What This Generates

- **100 Static HTML Pages** - One for each major city with unique content
- **Multilingal City URLs** - `/lahore-ramadan-times`, `/karachi-iftar-sehri`, etc.
- **XML Sitemaps** - For Google Search Console submission
- **Robots.txt** - Optimized for search engines
- **Structured Data** - Schema.org markup for rich snippets
- **Mobile Responsive** - All pages optimized for mobile devices

## 🚀 Quick Start

### 1. **Install Dependencies** (Optional for basic generation)
```bash
npm install
```

### 2. **Run Page Generation**
```bash
node generate-pages-enhanced.js
```

This will create:
- `cities/` folder with 100 subdirectories
- `sitemap.xml` - Main sitemap
- `sitemap-index.xml` - Sitemap index  
- `robots.txt` - Search engine directives

### 3. **Customize Your Domain**
Replace all instances of `yourdomain.com` with your actual domain:

```bash
# Option A: Find and Replace in your editor
# Cmd+H (Find and Replace)
# Find: yourdomain.com
# Replace: youractual.com

# Option B: Using sed (Linux/Mac)
sed -i 's/yourdomain.com/youractual.com/g' generate-pages-enhanced.js

# Option B: Using PowerShell (Windows)
(Get-Content generate-pages-enhanced.js) -replace 'yourdomain.com','youractual.com' | Set-Content generate-pages-enhanced.js
```

Then regenerate:
```bash
node generate-pages-enhanced.js
```

### 4. **Update Prayer Times (Optional but Recommended)**
By default, times are placeholder values. For real prayer times:

```bash
npm install prayer-times
```

Modify the calculator in the script to use actual prayer times from an API.

## 📁 File Structure

```
ramadan-tracker/
├── cities/
│   ├── lahore-ramadan-times/
│   │   └── index.html
│   ├── karachi-iftar-sehri/
│   │   └── index.html
│   ├── islamabad-ramadan-times/
│   │   └── index.html
│   └── ... (100 cities total)
├── cities-data.js              # City coordinates and slugs
├── generate-pages-enhanced.js  # Main generator script
├── generate-pages.js           # Alternative simpler generator
├── sitemap.xml                 # Main XML sitemap
├── sitemap-index.xml           # Sitemap index
├── robots.txt                  # Search engine directives
├── package.json                # Node.js metadata
└── index.html                  # Homepage
```

## 🌍 Cities Included

The script includes **80+ cities** across:
- 🇵🇰 **Pakistan** (Lahore, Karachi, Islamabad, Rawalpindi, etc.)
- 🇸🇦 **Saudi Arabia** (Medina, Riyadh, Jeddah, Mecca)
- 🇦🇪 **UAE** (Dubai, Abu Dhabi, Sharjah)
- 🇪🇬 **Egypt** (Cairo, Alexandria, Giza)
- 🇧🇩 **Bangladesh** (Dhaka, Chittagong)
- 🇲🇾 **Malaysia** (Kuala Lumpur, Penang)
- 🇮🇩 **Indonesia** (Jakarta, Surabaya)
- 🇮🇳 **India** (Delhi, Mumbai, Bengaluru)
- 🇹🇷 **Turkey** (Istanbul, Ankara)
- 🇯🇴 **Jordan** (Amman, Zarqa)
- 🇬🇧 **UK** (London, Manchester, Birmingham)
- 🇺🇸 **USA** (New York, Los Angeles, Chicago)
- 🇨🇦 **Canada** (Toronto, Vancouver)
- 🇦🇺 **Australia** (Sydney, Melbourne)
- And more...

## 📄 Page Features

Each generated page includes:

### SEO Elements
- ✅ Unique title tags
- ✅ Meta descriptions
- ✅ Keywords for local search
- ✅ Canonical URLs
- ✅ Hreflang tags
- ✅ Open Graph tags
- ✅ Twitter Card meta tags
- ✅ Geo-location meta tags
- ✅ Schema.org structured data
  - WebSite schema
  - LocalBusiness schema
  - BreadcrumbList schema

### Content
- 📌 City-specific prayer times table (30 days of Ramadan)
- 📍 Geographic coordinates  
- 🕐 Fajr/Sehri times
- 🍽️ Iftar times
- ☀️ Sunrise and Maghrib times
- 📱 Mobile-responsive design
- 🎨 Beautiful gradient styling
- 🔗 Internal linking

## 🔍 SEO Optimization

### XML Sitemap
The generated `sitemap.xml`:
- Lists all 100+ city pages
- Includes last modified dates
- Sets priority levels (homepage: 1.0, city pages: 0.8)
- Specifies change frequency (daily)

### Robots.txt
Optimized rules for:
- Google (faster crawling)
- Bing
- Other search engines
- Sitemap references

### Structured Data
Each page includes:
```json
{
  "@type": "LocalBusiness",
  "name": "${city.name} Ramadan Times 2025",
  "address": { "addressLocality": "${city.name}" },
  "geo": { 
    "latitude": ${lat},
    "longitude": ${lng}
  }
}
```

## 📤 Deployment

### 1. **Copy to Web Server**
```bash
# Upload entire "cities/" folder to your domain root
# So /cities/lahore-ramadan-times/index.html 
# becomes yoursite.com/lahore-ramadan-times/
```

### 2. **Upload Sitemaps & Robots**
```
yoursite.com/sitemap.xml
yoursite.com/sitemap-index.xml  
yoursite.com/robots.txt
```

### 3. **Submit to Google Search Console**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Click **Sitemaps** in left menu
4. Click **New sitemap**
5. Enter: `yourdomain.com/sitemap.xml`
6. Click **Submit**

### 4. **Monitor Results**
- ✅ Allow 24-48 hours for initial indexing
- 🔍 Monitor Coverage report in GSC
- 📊 Track Performance for "ramadan times [city]" keywords
- 📈 Check CTR and avg. position trends

## 🔧 Advanced Usage

### Add/Remove Cities
Edit `cities-data.js`:
```javascript
const cities = [
  { 
    name: 'Your City', 
    country: 'Your Country', 
    lat: 24.8607,      // Latitude
    lng: 67.0011,      // Longitude  
    slug: 'city-slug-format'  // URL slug
  },
  // ... more cities
];
```

Then regenerate:
```bash
node generate-pages-enhanced.js
```

### Customize Template
Edit the HTML template in `generateCityPage()` function:
- Change colors (gradient colors in CSS)
- Add/remove sections
- Update brand information
- Modify call-to-action buttons

### Use Alternative Generator
For simpler output:
```bash
node generate-pages.js
```

## 📊 SEO Keywords Targeting

Each city page targets keywords like:
- `iftar time [city]`
- `sehri time [city]` 
- `ramadan times [city]`
- `prayer times [city]`
- `[city] ramadan schedule`
- `[city] fasting times`

## 🎯 Expected Results

With proper optimization:
- 📈 **Organic traffic** to pages within 3-6 months
- 🔍 **Top 10 ranking** for "[city] iftar time" keywords
- 💬 **Long-tail traffic** from voice searches
- 📱 **Mobile traffic boost** during Ramadan
- 🌍 **Local search visibility** in Google Maps/Local

## 🛠️ Troubleshooting

### Pages not showing in GSC after submission?
- ✅ Verify robots.txt allows crawling
- ✅ Check canonical URLs are correct
- ✅ Ensure sitemap.xml is valid (test at [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html))
- ✅ Wait 48+ hours for Google to crawl
- ✅ Request indexing in GSC > URL Inspection

### Prayer times showing wrong values?
- Install real prayer times library: `npm install prayer-times`
- Implement proper calculation in the script
- Test with known city times first

### Domain/URL issues?
- Regenerate after updating domain name
- Check all files use consistent domain
- Verify folder paths match URL slugs

## 📚 Resources

- [Google Search Console](https://search.google.com/search-console)
- [XML Sitemap Protocol](https://www.sitemaps.org/)
- [Schema.org Documentation](https://schema.org/)
- [Prayer Times Library](https://www.npmjs.com/package/prayer-times)
- [Google Search Central Blog](https://developers.google.com/search/blog)

## 📝 License

MIT License - Feel free to use and modify for your needs.

## ✨ Support

For issues or questions:
1. Check the generated files in `cities/` folder
2. Validate sitemap.xml in XML validators
3. Test pages with [Lighthouse](https://developers.google.com/web/tools/lighthouse)
4. Use [Rich Results Test](https://search.google.com/test/rich-results) for structured data

---

**Generated** with ❤️ for Ramadan 2025 | Happy coding! 🌙
