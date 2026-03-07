const fs = require('fs');
const path = require('path');
const cities = require('./cities-data.js');

// Configuration
const DOMAIN = 'yourdomain.com'; // Replace with your actual domain
const OUTPUT_DIR = path.join(__dirname, 'cities');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to generate HTML page for a city
function generateCityPage(city) {
  const pageTitle = `${city.name} Ramadan 2025 | Iftar & Sehri Times`;
  const pageDescription = `Get accurate daily Sehri and Iftar times for Ramadan 2025 in ${city.name}, ${city.country}. Live countdown, prayer timings and Ramadan schedule.`;
  const canonicalUrl = `https://${DOMAIN}/${city.slug}/`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Primary Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}">
    <meta name="keywords" content="iftar time ${city.name}, sehri time ${city.name}, ramadan 2025 ${city.name}, prayer times ${city.name}, ${city.name} ramadan schedule">
    <meta name="author" content="Ramadan Times">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${pageDescription}">
    <meta property="og:image" content="https://${DOMAIN}/ramadan-og-image.jpg">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${canonicalUrl}">
    <meta property="twitter:title" content="${pageTitle}">
    <meta property="twitter:description" content="${pageDescription}">
    <meta property="twitter:image" content="https://${DOMAIN}/ramadan-twitter-image.jpg">
    
    <!-- Geo Tags -->
    <meta name="geo.position" content="${city.lat};${city.lng}">
    <meta name="geo.placename" content="${city.name}">
    <meta name="geo.region" content="${city.country}">
    <meta name="ICBM" content="${city.lat}, ${city.lng}">
    
    <!-- Preconnect for Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    
    <!-- Structured Data - LocalBusiness + Prayer Times -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://${DOMAIN}/#website",
          "url": "https://${DOMAIN}/",
          "name": "Ramadan Times 2025",
          "description": "Accurate Ramadan prayer timings and schedules",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://${DOMAIN}/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "${canonicalUrl}#business",
          "name": "${city.name} Ramadan Times",
          "description": "${pageDescription}",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${city.name}",
            "addressCountry": "${city.country}"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "${city.lat}",
            "longitude": "${city.lng}"
          },
          "url": "${canonicalUrl}",
          "priceRange": "\$",
          "telephone": "",
          "image": "https://${DOMAIN}/ramadan-og-image.jpg"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "${canonicalUrl}#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://${DOMAIN}/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "${city.name}",
              "item": "${canonicalUrl}"
            }
          ]
        }
      ]
    }
    </script>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
            color: #333;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        h1 {
            color: #667eea;
            margin-bottom: 10px;
            font-family: 'Amiri', serif;
            font-size: 2.5em;
        }
        
        .city-info {
            color: #666;
            margin-bottom: 30px;
            font-size: 1.1em;
        }
        
        .breadcrumb {
            margin-bottom: 20px;
            font-size: 0.9em;
        }
        
        .breadcrumb a {
            color: #667eea;
            text-decoration: none;
        }
        
        .breadcrumb a:hover {
            text-decoration: underline;
        }
        
        .times-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .time-card {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        
        .time-card h3 {
            font-size: 0.9em;
            opacity: 0.9;
            margin-bottom: 10px;
            text-transform: uppercase;
        }
        
        .time-card .time {
            font-size: 2em;
            font-family: 'Amiri', serif;
            font-weight: bold;
        }
        
        .schedule-table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .schedule-table th {
            background: #667eea;
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
        }
        
        .schedule-table td {
            padding: 12px;
            border-bottom: 1px solid #eee;
        }
        
        .schedule-table tr:hover {
            background: #f9f9f9;
        }
        
        .cta-section {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: #f8f9f9;
            border-radius: 10px;
        }
        
        .cta-btn {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 12px 30px;
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .cta-btn:hover {
            background: #764ba2;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="breadcrumb">
            <a href="https://${DOMAIN}/">Home</a> / <strong>${city.name}</strong>
        </div>
        
        <h1>Ramadan 2025 in ${city.name}</h1>
        <div class="city-info">
            <p><strong>${city.name}, ${city.country}</strong> | Live Iftar & Sehri Times</p>
        </div>
        
        <div class="times-grid">
            <div class="time-card">
                <h3>Sehri Ends</h3>
                <div class="time">4:45 AM</div>
                <p>Today</p>
            </div>
            <div class="time-card">
                <h3>Iftar Time</h3>
                <div class="time">6:30 PM</div>
                <p>Today</p>
            </div>
            <div class="time-card">
                <h3>Fajr (Subah)</h3>
                <div class="time">4:30 AM</div>
                <p>Prayer</p>
            </div>
            <div class="time-card">
                <h3>Maghrib</h3>
                <div class="time">6:25 PM</div>
                <p>Prayer</p>
            </div>
        </div>
        
        <h2 style="color: #667eea; margin: 30px 0 20px 0; font-family: 'Amiri', serif;">Ramadan Schedule for ${city.name}</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Sehri</th>
                    <th>Iftar</th>
                    <th>Fajr</th>
                    <th>Maghrib</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1 Ramadan</td>
                    <td>4:45 AM</td>
                    <td>6:30 PM</td>
                    <td>4:30 AM</td>
                    <td>6:25 PM</td>
                </tr>
                <tr>
                    <td>2 Ramadan</td>
                    <td>4:44 AM</td>
                    <td>6:31 PM</td>
                    <td>4:29 AM</td>
                    <td>6:26 PM</td>
                </tr>
                <tr>
                    <td>3 Ramadan</td>
                    <td>4:43 AM</td>
                    <td>6:32 PM</td>
                    <td>4:28 AM</td>
                    <td>6:27 PM</td>
                </tr>
                <tr>
                    <td>4 Ramadan</td>
                    <td>4:42 AM</td>
                    <td>6:33 PM</td>
                    <td>4:27 AM</td>
                    <td>6:28 PM</td>
                </tr>
                <tr>
                    <td>5 Ramadan</td>
                    <td>4:41 AM</td>
                    <td>6:34 PM</td>
                    <td>4:26 AM</td>
                    <td>6:29 PM</td>
                </tr>
            </tbody>
        </table>
        
        <div class="cta-section">
            <h3>Get Full Schedule</h3>
            <p>View the complete 30-day Ramadan calendar with prayer times for ${city.name}</p>
            <a href="https://${DOMAIN}/" class="cta-btn">View Full Calendar</a>
        </div>
        
        <div class="footer">
            <p>&copy; 2025 Ramadan Times. All prayer times are calculated for ${city.name}, ${city.country}.</p>
            <p>Coordinates: ${city.lat.toFixed(4)}, ${city.lng.toFixed(4)}</p>
        </div>
    </div>
</body>
</html>`;

  return html;
}

// Function to generate sitemap
function generateSitemap() {
  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  sitemapContent += '  <url>\n';
  sitemapContent += `    <loc>https://${DOMAIN}/</loc>\n`;
  sitemapContent += '    <priority>1.0</priority>\n';
  sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  sitemapContent += '  </url>\n';
  
  // Add all city pages
  cities.forEach(city => {
    sitemapContent += '  <url>\n';
    sitemapContent += `    <loc>https://${DOMAIN}/${city.slug}/</loc>\n`;
    sitemapContent += '    <priority>0.8</priority>\n';
    sitemapContent += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    sitemapContent += '  </url>\n';
  });
  
  sitemapContent += '</urlset>';
  
  return sitemapContent;
}

// Function to generate robots.txt
function generateRobots() {
  return `# Robots.txt for Ramadan Times
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

# Sitemaps
Sitemap: https://${DOMAIN}/sitemap.xml

# Crawl Delay (milliseconds)
Crawl-delay: 1

# Request rate
Request-rate: 30/1m`;
}

// Main generation function
function generateAllPages() {
  console.log('🚀 Starting page generation...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  // Generate pages for each city
  cities.forEach((city, index) => {
    try {
      const html = generateCityPage(city);
      const cityDir = path.join(OUTPUT_DIR, city.slug);
      
      // Create city directory if it doesn't exist
      if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true });
      }
      
      // Write index.html in the city directory
      fs.writeFileSync(path.join(cityDir, 'index.html'), html);
      
      successCount++;
      if ((index + 1) % 10 === 0) {
        console.log(`✓ Generated ${index + 1}/${cities.length} city pages...`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ Error generating page for ${city.name}:`, error.message);
    }
  });
  
  // Generate sitemap.xml
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
    console.log('✓ Sitemap generated: sitemap.xml');
  } catch (error) {
    console.error('✗ Error generating sitemap:', error.message);
    errorCount++;
  }
  
  // Generate robots.txt
  try {
    const robots = generateRobots();
    fs.writeFileSync(path.join(__dirname, 'robots.txt'), robots);
    console.log('✓ Robots file generated: robots.txt');
  } catch (error) {
    console.error('✗ Error generating robots.txt:', error.message);
    errorCount++;
  }
  
  console.log('\n📊 Generation Complete!');
  console.log(`✓ Successfully generated: ${successCount} pages`);
  if (errorCount > 0) {
    console.log(`✗ Failed: ${errorCount} items`);
  }
  console.log(`📂 Output directory: ${OUTPUT_DIR}`);
  console.log(`\n💡 Next steps:`);
  console.log(`1. Replace '${DOMAIN}' with your actual domain`);
  console.log(`2. Update prayer times with actual API data`);
  console.log(`3. Deploy the 'cities' folder to your web server`);
  console.log(`4. Submit sitemap.xml to Google Search Console`);
}

// Run the generation
generateAllPages();
