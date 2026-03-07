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

# Update all city index.html files
Write-Host "✓ Updating city page files..." -ForegroundColor Green
Get-ChildItem -Path "." -Filter "index.html" -Recurse -Depth 2 | Where-Object { $_.FullName -notlike "*node_modules*" } | ForEach-Object {
    $content = (Get-Content $_.FullName -Raw) -replace 'yourdomain\.com', $domain
    Set-Content $_.FullName $content
}

# Update sitemap.xml
Write-Host "✓ Updating sitemap.xml..." -ForegroundColor Green
$content = (Get-Content "sitemap.xml" -Raw) -replace 'yourdomain\.com', $domain
Set-Content "sitemap.xml" $content

# Update robots.txt
Write-Host "✓ Updating robots.txt..." -ForegroundColor Green
$content = (Get-Content "robots.txt" -Raw) -replace 'yourdomain\.com', $domain
Set-Content "robots.txt" $content

# Update root index.html
Write-Host "✓ Updating root index.html..." -ForegroundColor Green
$content = (Get-Content "index.html" -Raw) -replace 'yourdomain\.com', $domain
Set-Content "index.html" $content

Write-Host ""
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Commit changes: git add -A && git commit -m 'Update domain to $domain'"
Write-Host "2. Push to Vercel: git push"
Write-Host "3. Visit: https://$domain/lahore-ramadan-times/"
Write-Host ""
