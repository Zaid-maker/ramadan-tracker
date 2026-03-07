# Quick Setup Script for Ramadan Times Website (Windows)
# Usage: .\setup.ps1 -domain youractual.com

param(
    [Parameter(Mandatory=$true)]
    [string]$domain
)

Write-Host "🌙 Ramadan Times - Quick Setup" -ForegroundColor Green
Write-Host ""

Write-Host "📝 Updating domain to: $domain" -ForegroundColor Yellow
Write-Host ""

# Update all HTML files in cities folder
Write-Host "✓ Updating HTML files..." -ForegroundColor Green
Get-ChildItem -Path "cities" -Filter "*.html" -Recurse | ForEach-Object {
    $content = (Get-Content $_.FullName) -replace 'yourdomain.com', $domain
    Set-Content $_.FullName $content
}

# Update sitemap.xml
Write-Host "✓ Updating sitemap.xml..." -ForegroundColor Green
$content = (Get-Content "sitemap.xml") -replace 'yourdomain.com', $domain
Set-Content "sitemap.xml" $content

# Update sitemap-index.xml
Write-Host "✓ Updating sitemap-index.xml..." -ForegroundColor Green
$content = (Get-Content "sitemap-index.xml") -replace 'yourdomain.com', $domain
Set-Content "sitemap-index.xml" $content

# Update robots.txt
Write-Host "✓ Updating robots.txt..." -ForegroundColor Green
$content = (Get-Content "robots.txt") -replace 'yourdomain.com', $domain
Set-Content "robots.txt" $content

Write-Host ""
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Deploy cities/ folder to your web server"
Write-Host "2. Upload sitemap.xml and robots.txt to domain root"
Write-Host "3. Go to https://search.google.com/search-console"
Write-Host "4. Add property: https://$domain/"
Write-Host "5. Verify ownership"
Write-Host "6. Submit sitemap: https://$domain/sitemap.xml"
Write-Host ""
Write-Host "ℹ️  For detailed instructions, see GSC-SUBMISSION-GUIDE.md" -ForegroundColor Yellow
