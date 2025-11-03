# Deployment Guide for The Shark Retail - Vercel + Namecheap

## Overview

Your website is hosted on **Vercel** (Next.js) with domain name from **Namecheap**.

## Quick Start

1. **Vercel Deployment:** Your Next.js app is automatically deployed on Vercel
2. **Namecheap DNS:** Configure DNS in Namecheap to point to Vercel
3. **SSL/HTTPS:** Vercel automatically provisions SSL certificates

See `VERCEL_NAMECHEAP_SETUP.md` for detailed step-by-step instructions.

## Why You're Seeing Directory Listings

The directory listing you're seeing in Google search is because:

1. **DNS is pointing to old hosting** - Your domain may still be pointing to old Namecheap hosting instead of Vercel
2. **DNS hasn't propagated** - If you just changed DNS, it can take 24-48 hours

## Solution: Point DNS to Vercel

Follow the detailed instructions in `VERCEL_NAMECHEAP_SETUP.md` to:
- Configure DNS records in Namecheap
- Point your domain to Vercel
- Remove directory listings from search results

## Files in This Repository

- `vercel.json` - Vercel configuration (redirects, headers, security)
- `VERCEL_NAMECHEAP_SETUP.md` - Complete setup guide for Vercel + Namecheap
- `.htaccess` - Not used on Vercel (only for traditional hosting)

## Important Notes

- **Vercel doesn't use .htaccess** - Configuration is done via `vercel.json`
- **No directory listings on Vercel** - Once DNS points to Vercel, listings will disappear
- **Automatic HTTPS** - Vercel handles SSL certificates automatically
- **Global CDN** - Vercel provides fast global CDN automatically

## Support

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **Detailed Setup:** See `VERCEL_NAMECHEAP_SETUP.md`

