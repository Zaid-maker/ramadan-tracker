#!/bin/bash
# Quick Setup Script for Ramadan Times Website
# Usage: bash setup.sh youractual.com

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🌙 Ramadan Times - Quick Setup${NC}\n"

# Check if domain is provided
if [ -z "$1" ]; then
    echo -e "${RED}❌ Please provide your domain${NC}"
    echo "Usage: bash setup.sh youractual.com"
    exit 1
fi

DOMAIN=$1

echo -e "${YELLOW}📝 Updating domain to: $DOMAIN${NC}\n"

# Check if on macOS or Linux
if [[ "$OSTYPE" == "linux-gnu"* ]] || [[ "$OSTYPE" == "darwin"* ]]; then
    echo "✓ Updating city page files..."
    find . -maxdepth 2 -name "index.html" -path "./*/index.html" -type f -exec sed -i.bak "s/yourdomain.com/$DOMAIN/g" {} \;
    
    echo "✓ Updating sitemap.xml..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" sitemap.xml
    
    echo "✓ Updating robots.txt..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" robots.txt
    
    echo "✓ Updating index.html..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" index.html
    
    # Clean up backup files
    find . -name "*.bak" -delete
else
    echo -e "${RED}❌ This script is for Linux/Mac. Use setup.ps1 for Windows${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}\n"
echo "📋 Next Steps:"
echo "1. Commit changes: git add -A && git commit -m 'Update domain to $DOMAIN'"
echo "2. Push to Vercel: git push"
echo "3. Visit: https://$DOMAIN/lahore-ramadan-times/"
echo ""
