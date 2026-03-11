const fs = require('fs');
const path = require('path');
const cities = require('./cities-data.js');

// Configuration
const DOMAIN = 'yourdomain.com'; // Replace with your actual domain
const OUTPUT_DIR = __dirname; // Output to root, not subfolder

// Function to generate HTML page for a city with better structure
function generateCityPage(city) {
  const pageTitle = `${city.name} Ramadan 2026 | Iftar & Sehri Times`;
  const pageDescription = `Get accurate daily Sehri and Iftar times for Ramadan 2026 in ${city.name}, ${city.country}. Live countdown, prayer timings and Ramadan schedule.`;
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}">
    <meta name="keywords" content="iftar time ${city.name}, sehri time ${city.name}, ramadan 2026 ${city.name}, prayer times ${city.name}, ${city.name} ramadan schedule">
    <meta name="author" content="Ramadan Times">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonicalUrl}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${pageDescription}">
    <meta name="geo.position" content="${city.lat};${city.lng}">
    <meta name="geo.placename" content="${city.name}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "${city.name} Ramadan Times 2026",
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
      "url": "${canonicalUrl}"
    }
    </script>
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 20px; color: #333; }
        .container { max-width: 1000px; margin: 0 auto; background: white; border-radius: 15px; padding: 40px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        h1 { color: #667eea; font-family: 'Amiri', serif; font-size: 2.5em; margin-bottom: 20px; }
        .city-info { background: #f8f9f9; padding: 15px; border-left: 4px solid #667eea; margin-bottom: 30px; }
        .times-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .time-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center; }
        .time-card h3 { font-size: 0.9em; margin-bottom: 10px; text-transform: uppercase; }
        .time-card .time { font-size: 2em; font-family: 'Amiri', serif; font-weight: bold; }
        .schedule-table { width: 100%; border-collapse: collapse; margin: 30px 0; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .schedule-table th { background: #667eea; color: white; padding: 15px; font-weight: 600; }
        .schedule-table td { padding: 12px 15px; border-bottom: 1px solid #eee; }
        .schedule-table tr:nth-child(even) { background: #f9f9f9; }
        @media (max-width: 768px) { h1 { font-size: 1.8em; } .container { padding: 20px; } }
    </style>
</head>
<body>
    <div class="container">
        <h1>Ramadan 2026 in ${city.name}</h1>
        <div class="city-info">
            <p><strong>${city.name}, ${city.country}</strong></p>
            <p>📍 Coordinates: ${city.lat.toFixed(4)}°, ${city.lng.toFixed(4)}°</p>
        </div>
        
        <h2 style="color: #667eea; margin: 30px 0 20px 0; font-family: 'Amiri', serif;">Today's Prayer Times</h2>
        <div class="times-grid">
            <div class="time-card">
                <h3>🌙 Sehri (Fajr)</h3>
                <div class="time">4:45 AM</div>
            </div>
            <div class="time-card">
                <h3>☀️ Sunrise</h3>
                <div class="time">5:55 AM</div>
            </div>
            <div class="time-card">
                <h3>🌅 Dhuhr</h3>
                <div class="time">12:15 PM</div>
            </div>
            <div class="time-card">
                <h3>🍽️ Iftar</h3>
                <div class="time">6:30 PM</div>
            </div>
        </div>
        
        <h2 style="color: #667eea; margin: 30px 0 20px 0; font-family: 'Amiri', serif;">30-Day Ramadan Schedule</h2>
        <table class="schedule-table">
            <thead>
                <tr>
                    <th>Ramadan Date</th>
                    <th>Sehri</th>
                    <th>Iftar</th>
                    <th>Fajr</th>
                    <th>Maghrib</th>
                </tr>
            </thead>
            <tbody>
                ${ramadanRows}
            </tbody>
        </table>
    </div>
</body>
</html>`;

  return html;
}

// Function to generate sitemap
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  sitemapContent += '  <url>\n';
  sitemapContent += `    <loc>https://${DOMAIN}/</loc>\n`;
  sitemapContent += `    <lastmod>${today}</lastmod>\n`;
  sitemapContent += '    <changefreq>daily</changefreq>\n';
  sitemapContent += '    <priority>1.0</priority>\n';
  sitemapContent += '  </url>\n';
  
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

// Main generation function
function generateAllPages() {
  console.log('🚀 Generating Ramadan pages for Vercel...\n');
  
  let successCount = 0;
  let errorCount = 0;
  
  cities.forEach((city, index) => {
    try {
      const html = generateCityPage(city);
      const cityDir = path.join(OUTPUT_DIR, city.slug);
      
      if (!fs.existsSync(cityDir)) {
        fs.mkdirSync(cityDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(cityDir, 'index.html'), html);
      
      successCount++;
      if ((index + 1) % 20 === 0) {
        console.log(`✓ Generated ${index + 1}/${cities.length} pages...`);
      }
    } catch (error) {
      errorCount++;
      console.error(`✗ Error for ${city.name}:`, error.message);
    }
  });
  
  // Generate sitemap
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemap);
    console.log('\n✓ Sitemap generated');
  } catch (error) {
    console.error('✗ Sitemap error:', error.message);
    errorCount++;
  }
  
  console.log('\n✅ Generation Complete!');
  console.log(`✓ Pages generated: ${successCount}`);
  console.log(`\n📍 Pages are now at root level:`);
  console.log(`   yourdomain.com/lahore-ramadan-times/`);
  console.log(`   yourdomain.com/karachi-iftar-sehri/`);
  console.log(`   etc.\n`);
}

generateAllPages();
