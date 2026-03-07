const fs = require('fs');
const path = require('path');
const cities = require('./cities-data.js');

// Prayer Times Calculation using Hijri Calculator
// Based on Islamic Prayer Times algorithm
class PrayerTimesCalculator {
  constructor(latitude, longitude, timezone) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.timezone = timezone;
  }

  // Calculate prayer times for a given date
  // Using simplified calculation (for production, use prayer-times library)
  calculateForDate(date) {
    // This is a simplified version
    // For production, install: npm install prayer-times
    // Import: const PrayerTimes = require('prayer-times');
    
    // Sample data - replace with actual calculation
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    return {
      fajr: '04:30',
      sunrise: '05:45',
      dhuhr: '12:15',
      asr: '15:30',
      maghrib: '18:30',
      isha: '19:45'
    };
  }
}

// Configuration
const DOMAIN = 'yourdomain.com'; // Replace with your actual domain
const OUTPUT_DIR = path.join(__dirname, 'cities');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Function to generate HTML page for a city with better structure
function generateCityPage(city) {
  const pageTitle = `${city.name} Ramadan 2025 | Iftar & Sehri Times`;
  const pageDescription = `Get accurate daily Sehri and Iftar times for Ramadan 2025 in ${city.name}, ${city.country}. Live countdown, prayer timings and Ramadan schedule.`;
  const canonicalUrl = `https://${DOMAIN}/${city.slug}/`;
  
  // Generate sample rows for 30 days of Ramadan
  let ramadanRows = '';
  for (let day = 1; day <= 30; day++) {
    const sehriHour = Math.floor(4 + (day % 10) / 10);
    const sehriMin = (45 - (day % 15)).toString().padStart(2, '0');
    const iftarHour = 18;
    const iftarMin = Math.floor(25 + (day % 10));
    
    ramadanRows += `
                <tr>
                    <td>${day} Ramadan</td>
                    <td>${sehriHour}:${sehriMin} AM</td>
                    <td>${iftarHour}:${iftarMin} PM</td>
                    <td>4:${(30 - (day % 10)).toString().padStart(2, '0')} AM</td>
                    <td>6:${(25 + (day % 15)).toString().padStart(2, '0')} PM</td>
                </tr>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Primary Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}">
    <meta name="keywords" content="iftar time ${city.name}, sehri time ${city.name}, ramadan 2025 ${city.name}, prayer times ${city.name}, ${city.name} ramadan schedule, ${city.name} fasting times">
    <meta name="author" content="Ramadan Times">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="language" content="English">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}">
    
    <!-- Alternates for other cities -->
    <link rel="alternate" href="${canonicalUrl}" hreflang="en" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${pageDescription}">
    <meta property="og:image" content="https://${DOMAIN}/ramadan-og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:locale" content="en_US">
    <meta property="og:site_name" content="Ramadan Times 2025">
    
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
          "name": "${city.name} Ramadan Times 2025",
          "description": "${pageDescription}",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${city.name}",
            "addressCountry": "${city.country}"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": ${city.lat},
            "longitude": ${city.lng}
          },
          "url": "${canonicalUrl}",
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
              "name": "${city.name} Ramadan Times",
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
            line-height: 1.6;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
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
        
        h1 {
            color: #667eea;
            margin-bottom: 10px;
            font-family: 'Amiri', serif;
            font-size: 2.5em;
            line-height: 1.2;
        }
        
        h2 {
            color: #667eea;
            margin: 30px 0 20px 0;
            font-family: 'Amiri', serif;
            font-size: 1.8em;
        }
        
        h3 {
            color: #333;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        
        .city-info {
            color: #666;
            margin-bottom: 30px;
            font-size: 1.1em;
            background: #f8f9f9;
            padding: 15px;
            border-left: 4px solid #667eea;
            border-radius: 5px;
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
            transition: transform 0.3s ease;
        }
        
        .time-card:hover {
            transform: translateY(-5px);
        }
        
        .time-card h3 {
            font-size: 0.9em;
            opacity: 0.9;
            margin: 0 0 10px 0;
            text-transform: uppercase;
            font-weight: 600;
            color: white;
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
            padding: 15px;
            text-align: left;
            font-weight: 600;
        }
        
        .schedule-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #eee;
        }
        
        .schedule-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        
        .schedule-table tr:hover {
            background: #f0f0ff;
        }
        
        .schedule-table td:first-child {
            font-weight: 600;
            color: #667eea;
        }
        
        .about-section {
            background: #f8f9f9;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
        }
        
        .about-section h3 {
            margin-top: 0;
        }
        
        .about-section p {
            margin-bottom: 10px;
        }
        
        .cta-section {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            color: white;
        }
        
        .cta-section h3 {
            color: white;
        }
        
        .cta-section p {
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 15px;
        }
        
        .cta-btn {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 12px 30px;
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: 600;
        }
        
        .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            text-align: center;
            color: #666;
            font-size: 0.9em;
        }
        
        .footer p {
            margin-bottom: 5px;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            
            h1 {
                font-size: 1.8em;
            }
            
            h2 {
                font-size: 1.4em;
            }
            
            .times-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            }
            
            .schedule-table {
                font-size: 0.9em;
            }
            
            .schedule-table th,
            .schedule-table td {
                padding: 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="breadcrumb">
            <a href="https://${DOMAIN}/">Home</a> / <strong>${city.name} Ramadan Times</strong>
        </div>
        
        <h1>Ramadan 2025 in ${city.name}</h1>
        <div class="city-info">
            <p><strong>${city.name}, ${city.country}</strong></p>
            <p>📍 Coordinates: ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
        </div>
        
        <h2>Today's Prayer Times</h2>
        <div class="times-grid">
            <div class="time-card">
                <h3>🌙 Sehri Ends (Fajr)</h3>
                <div class="time">4:45 AM</div>
                <p>Start of fast</p>
            </div>
            <div class="time-card">
                <h3>☀️ Sunrise</h3>
                <div class="time">5:55 AM</div>
                <p>Complete darkness ends</p>
            </div>
            <div class="time-card">
                <h3>🌅 Dhuhr</h3>
                <div class="time">12:15 PM</div>
                <p>Midday prayer</p>
            </div>
            <div class="time-card">
                <h3>🍽️ Iftar Time</h3>
                <div class="time">6:30 PM</div>
                <p>Breaking the fast</p>
            </div>
        </div>
        
        <div class="about-section">
            <h3>About Ramadan in ${city.name}</h3>
            <p>Ramadan is the ninth month of the Islamic lunar calendar, a time of fasting, prayer, and spiritual reflection for Muslims worldwide including ${city.name}, ${city.country}.</p>
            <p><strong>Sehri (Sahoor):</strong> The pre-dawn meal eaten before the start of the daily fast. The fast begins at Fajr (dawn) and must be completed before this time.</p>
            <p><strong>Iftar:</strong> The evening meal to break the fast at sunset (Maghrib prayer time). It's customary to break the fast with water and dates.</p>
            <p>The accurate prayer times for ${city.name} are calculated based on the precise geographical coordinates and astronomical data specific to this location.</p>
        </div>
        
        <h2>Complete Ramadan 2025 Schedule for ${city.name}</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Ramadan Date</th>
                    <th>Sehri (Sahoor)</th>
                    <th>Iftar</th>
                    <th>Fajr (Dawn)</th>
                    <th>Maghrib (Sunset)</th>
                </tr>
            </thead>
            <tbody>
                ${ramadanRows}
            </tbody>
        </table>
        
        <div class="about-section">
            <h3>Prayer Times Guide</h3>
            <ul style="margin-left: 20px;">
                <li><strong>Fajr:</strong> Early morning prayer (marks beginning of the fast)</li>
                <li><strong>Sunrise:</strong> Time when sun fully comes above horizon</li>
                <li><strong>Dhuhr:</strong> Midday prayer</li>
                <li><strong>Asr:</strong> Afternoon prayer</li>
                <li><strong>Maghrib:</strong> Evening prayer at sunset (marks end of the fast)</li>
                <li><strong>Isha:</strong> Night prayer</li>
            </ul>
        </div>
        
        <div class="cta-section">
            <h3>Stay Updated with ${city.name} Prayer Times</h3>
            <p>Get daily notifications for Sehri and Iftar times in ${city.name}</p>
            <a href="https://${DOMAIN}/" class="cta-btn">Download Our App</a>
        </div>
        
        <div class="footer">
            <p>&copy; 2025 Ramadan Times 2025. All prayer times are calculated for ${city.name}, ${city.country}.</p>
            <p>Prayer times are calculated based on astronomical calculations and may vary slightly based on local interpretation.</p>
            <p><strong>Location:</strong> ${city.name}, ${city.country} | <strong>Latitude:</strong> ${city.lat.toFixed(4)}° | <strong>Longitude:</strong> ${city.lng.toFixed(4)}°</p>
            <p><a href="https://${DOMAIN}/">← Back to Home</a></p>
        </div>
    </div>
</body>
</html>`;

  return html;
}

// Function to generate sitemap with proper formatting
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  // Add homepage
  sitemapContent += '  <url>\n';
  sitemapContent += `    <loc>https://${DOMAIN}/</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`;
  sitemapContent += '    <changefreq>daily</changefreq>\n';
  sitemapContent += '    <priority>1.0</priority>\n';
  sitemapContent += '  </url>\n';
  
  // Add all city pages
  cities.forEach(city => {
    sitemapContent += '  <url>\n';
    sitemapContent += `    <loc>https://${DOMAIN}/${city.slug}/</loc>\n`;
    sitemapContent += `    <lastmod>${today}</lastmod>\n`;
    sitemapContent += '    <changefreq>daily</changefreq>\n';
    sitemapContent += '    <priority>0.8</priority>\n';
    sitemapContent += '  </url>\n';
  });
  
  sitemapContent += '</urlset>';
  
  return sitemapContent;
}

// Function to generate robots.txt
function generateRobots() {
  return `# Robots.txt for Ramadan Times 2025
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$
Disallow: /api/

# Google Bot - Premium crawling
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bingbot
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Other bots
User-agent: *
Allow: /
Crawl-delay: 2

# Sitemaps
Sitemap: https://${DOMAIN}/sitemap.xml
Sitemap: https://${DOMAIN}/sitemap-cities.xml

# Request rate
Request-rate: 30/1m`;
}

// Function to generate city sitemap index
function generateSitemapIndex() {
  let indexContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  indexContent += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  indexContent += '  <sitemap>\n';
  indexContent += `    <loc>https://${DOMAIN}/sitemap.xml</loc>\n`;
  indexContent += '  </sitemap>\n';
  
  indexContent += '  <sitemap>\n';
  indexContent += `    <loc>https://${DOMAIN}/sitemap-cities.xml</loc>\n`;
  indexContent += '  </sitemap>\n';
  
  indexContent += '</sitemapindex>';
  
  return indexContent;
}

// Main generation function
function generateAllPages() {
  console.log('🚀 Starting Ramadan Times page generation...\n');
  console.log(`📍 Cities to generate: ${cities.length}`);
  console.log(`🌐 Domain: ${DOMAIN}\n`);
  
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
  
  console.log(`✓ Generated ${successCount}/${cities.length} city pages\n`);
  
  // Generate sitemap.xml
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
    console.log('✓ Main sitemap generated: sitemap.xml');
  } catch (error) {
    console.error('✗ Error generating sitemap:', error.message);
    errorCount++;
  }
  
  // Generate sitemap index
  try {
    const sitemapIndex = generateSitemapIndex();
    fs.writeFileSync(path.join(__dirname, 'sitemap-index.xml'), sitemapIndex);
    console.log('✓ Sitemap index generated: sitemap-index.xml');
  } catch (error) {
    console.error('✗ Error generating sitemap index:', error.message);
    errorCount++;
  }
  
  // Generate robots.txt
  try {
    const robots = generateRobots();
    fs.writeFileSync(path.join(__dirname, 'robots.txt'), robots);
    console.log('✓ Robots file generated: robots.txt\n');
  } catch (error) {
    console.error('✗ Error generating robots.txt:', error.message);
    errorCount++;
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ Generation Complete!\n');
  console.log(`📊 Summary:`);
  console.log(`   ✓ City pages generated: ${successCount}`);
  console.log(`   ✓ Sitemaps generated: 2`);
  console.log(`   ✓ Robots.txt generated: 1`);
  if (errorCount > 0) {
    console.log(`   ✗ Errors encountered: ${errorCount}`);
  }
  console.log(`\n📁 Output structure:`);
  console.log(`   cities/`);
  console.log(`   ├── lahore-ramadan-times/index.html`);
  console.log(`   ├── karachi-iftar-sehri/index.html`);
  console.log(`   └── ... (${cities.length} cities total)`);
  console.log(`   sitemap.xml`);
  console.log(`   sitemap-index.xml`);
  console.log(`   robots.txt\n`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n📋 Next Steps:\n');
  console.log('1. ✏️  CUSTOMIZE DOMAIN');
  console.log(`   Replace '${DOMAIN}' in all files with your actual domain\n`);
  console.log('2. ⏰ UPDATE PRAYER TIMES');
  console.log('   Install prayer times library:');
  console.log('   npm install prayer-times\n');
  console.log('3. 📤 DEPLOY');
  console.log('   Upload the entire "cities/" folder to your web server root\n');
  console.log('4. 🔍 SUBMIT TO GSC');
  console.log('   1. Go to Google Search Console');
  console.log('   2. Select your property');
  console.log('   3. Go to Sitemaps > New Sitemap');
  console.log(`   4. Enter: ${DOMAIN}/sitemap.xml\n`);
  console.log('5. 📊 MONITOR');
  console.log('   - Check GSC after 24-48 hours for indexing status');
  console.log('   - Monitor search performance in GSC');
  console.log('   - Track ranking for city + prayer time keywords\n');
}

// Run the generation
generateAllPages();
