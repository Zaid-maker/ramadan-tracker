---
name: seo-fundamentals
description: "Use when doing technical SEO setup or audits for websites, including metadata checks, canonical rules, sitemap and robots validation, Google Search Console troubleshooting, and indexing readiness. Trigger phrases: SEO fundamentals, technical SEO, fix sitemap, GSC could not fetch, indexing issues, on-page SEO checklist."
---

# SEO Fundamentals

## Purpose
Use this skill to implement and validate SEO essentials so pages are crawlable, indexable, and ready for Google Search Console.

## Inputs
- Site base URL (for example `https://example.com`)
- Key page URLs (home and major landing pages)
- `sitemap.xml` URL
- `robots.txt` URL
- Current deployment platform (for example Vercel)

## Workflow

### 1. Validate Crawl Access
- Check `robots.txt` returns HTTP `200` and is publicly reachable.
- Confirm it does not block important paths by mistake.
- Keep sitemap declarations accurate and only include existing sitemap files.

Decision point:
- If robots blocks target pages or includes invalid sitemap links, fix `robots.txt` first.

### 2. Validate Sitemap Health
- Check `sitemap.xml` returns HTTP `200` and valid XML.
- Confirm `<loc>` URLs are absolute, canonical, and use the correct domain.
- Verify sample URLs from sitemap return `200` (or valid indexable status).
- Ensure sitemap size and URL count are reasonable for the site.

Decision point:
- If sitemap has wrong domain, stale URLs, or malformed XML, regenerate/fix before GSC resubmission.

### 3. Validate On-Page Basics
For each key page, verify:
- One clear `<title>` and one useful meta description.
- Correct canonical URL pointing to the preferred page URL.
- `meta robots` allows indexing where intended.
- Proper heading structure and meaningful page content.
- Open Graph and Twitter tags are present for share previews.

Decision point:
- If canonical, robots, or title tags conflict, correct tags before indexing requests.

### 4. Validate Platform and Routing
- Confirm deployed routes match sitemap URLs.
- For static hosts (for example Vercel), ensure paths like `/city-slug/` resolve correctly.
- Remove stale generation artifacts that cause duplicate or broken paths.

Decision point:
- If deployed route returns `404`, fix folder structure or routing config before SEO submission.

### 5. Submit and Troubleshoot in GSC
- Submit full sitemap URL in the correct property scope.
- If GSC shows "Couldn’t fetch":
  - Re-check HTTP status and content type from external request.
  - Confirm property URL matches protocol/host exactly.
  - Remove and re-submit sitemap after fixes.
  - Wait for cache refresh and recheck.

Decision point:
- If live checks are `200` but GSC still fails, assume GSC cache/property mismatch and retry with exact property URL.

### 6. Final Verification
- Confirm `robots.txt` and `sitemap.xml` are reachable in production.
- Confirm at least 2-5 sitemap URLs are live and indexable.
- Confirm no placeholder domains remain.
- Confirm deployment includes latest SEO file changes.

## Quality Criteria
Treat task as complete only when all are true:
- `robots.txt` is valid, minimal, and references only real sitemap files.
- `sitemap.xml` is valid XML and uses the live canonical domain.
- Sample sitemap URLs return valid responses (typically `200`).
- Key pages include title, meta description, canonical, and indexable robots directives.
- GSC submission uses the exact matching property and sitemap URL.

## Common Mistakes to Catch
- Placeholder domain still present in sitemap or canonicals.
- `robots.txt` referencing non-existent sitemap files.
- Property mismatch in GSC (`http` vs `https`, subdomain mismatch).
- Sitemap works in browser but was previously cached as failed in GSC.
- Deployed routes differ from generated URLs.

## Output Format
When using this skill, produce:
1. Findings list ordered by severity.
2. Exact files/URLs fixed.
3. Verification results (status codes and key checks).
4. Next action in GSC (submit/re-submit/wait and recheck timeline).
