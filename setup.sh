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

echo -e "${YELLOW}📝 Updating domain: $DOMAIN${NC}\n"

# Check if on macOS or Linux
if [[ "$OSTYPE" == "linux-gnu"* ]] || [[ "$OSTYPE" == "darwin"* ]]; then
    echo "✓ Updating HTML files..."
    find cities -name "*.html" -type f -exec sed -i.bak "s/yourdomain.com/$DOMAIN/g" {} \;
    
    echo "✓ Updating sitemap.xml..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" sitemap.xml
    
    echo "✓ Updating sitemap-index.xml..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" sitemap-index.xml
    
    echo "✓ Updating robots.txt..."
    sed -i.bak "s/yourdomain.com/$DOMAIN/g" robots.txt
    
    # Clean up backup files
    find . -name "*.bak" -delete
else
    echo -e "${RED}❌ Please use Windows PowerShell script for setup.ps1${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Setup Complete!${NC}\n"
echo "📋 Next Steps:"
echo "1. Deploy cities/ folder to your web server"
echo "2. Upload sitemap.xml and robots.txt to domain root"
echo "3. Go to https://search.google.com/search-console"
echo "4. Add property: https://$DOMAIN/"
echo "5. Verify ownership"
echo "6. Submit sitemap: https://$DOMAIN/sitemap.xml"
echo ""
echo -e "${YELLOW}ℹ️  For detailed instructions, see GSC-SUBMISSION-GUIDE.md${NC}"
