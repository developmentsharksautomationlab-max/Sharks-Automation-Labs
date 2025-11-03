# Vercel + Namecheap Domain Setup for The Shark Retail

## Overview

Your website is hosted on **Vercel** (perfect for Next.js) and uses **Namecheap** for the domain name. This guide will help you configure both properly.

## Step 1: Deploy to Vercel

### If Not Already Deployed:

1. **Connect Repository to Vercel:**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository

2. **Configure Project Settings:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `.next` (default for Next.js)

3. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

## Step 2: Configure Domain in Vercel

1. **Go to Project Settings:**
   - In your Vercel project dashboard
   - Click "Settings" → "Domains"

2. **Add Your Domain:**
   - Enter: `thesharkretail.com`
   - Click "Add"
   - Vercel will show you DNS configuration instructions

3. **Add www Domain (Optional):**
   - Also add: `www.thesharkretail.com`
   - Vercel will automatically redirect to the non-www version

## Step 3: Configure DNS in Namecheap

1. **Login to Namecheap:**
   - Go to https://www.namecheap.com/
   - Login to your account
   - Go to "Domain List"
   - Click "Manage" next to `thesharkretail.com`

2. **Go to Advanced DNS:**
   - Click "Advanced DNS" tab

3. **Add DNS Records:**
   Vercel will provide you with specific values, but typically you need:

   **For Apex Domain (thesharkretail.com):**
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   - TTL: Automatic (or 30 min)

   **For www Subdomain:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com.` (or check Vercel for exact value)
   - TTL: Automatic (or 30 min)

   **Alternative: Use ANAME/ALIAS Record (if available):**
   - Type: `ANAME` or `ALIAS`
   - Host: `@`
   - Value: `cname.vercel-dns.com.` (check Vercel dashboard)
   - TTL: Automatic

4. **Remove/Update Existing Records:**
   - Remove any conflicting A records pointing to old hosting
   - Keep only the Vercel DNS records

5. **Save Changes:**
   - Click "Save All Changes"
   - DNS propagation can take 24-48 hours (usually faster)

## Step 4: Configure Vercel Project Settings

1. **Environment Variables (if needed):**
   - Go to Settings → Environment Variables
   - Add any required environment variables

2. **Build Settings:**
   - Framework: Next.js (should be auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Redirects & Headers:**
   - Check `vercel.json` for any custom redirects
   - Vercel handles Next.js routing automatically

## Step 5: Enable HTTPS/SSL

1. **Vercel automatically provisions SSL:**
   - Once DNS is configured correctly
   - Vercel will automatically get SSL certificate from Let's Encrypt
   - Usually takes a few minutes after DNS propagation

2. **Force HTTPS:**
   - Vercel automatically redirects HTTP to HTTPS
   - No additional configuration needed

## Step 6: Fix Directory Listing Issue

The directory listing you're seeing is likely from:

1. **Old DNS Records:**
   - If DNS is still pointing to old hosting
   - Update DNS records in Namecheap to point to Vercel

2. **Vercel Preview Deployments:**
   - Vercel doesn't show directory listings
   - Make sure you're accessing the production domain, not a preview URL

3. **Check DNS Propagation:**
   - Use https://dnschecker.org/
   - Check if `thesharkretail.com` points to Vercel's IP
   - Wait for global DNS propagation (24-48 hours)

## Step 7: Verify Deployment

1. **Check Vercel Dashboard:**
   - Go to your project in Vercel
   - Check "Deployments" tab
   - Ensure latest deployment is "Ready"

2. **Test Your Website:**
   - Visit: `https://thesharkretail.com`
   - Visit: `https://www.thesharkretail.com`
   - Both should show your Next.js website

3. **Check SSL:**
   - Verify HTTPS is working (green lock icon)
   - Test SSL: https://www.ssllabs.com/ssltest/

## Step 8: Google Search Console

1. **Add Property:**
   - Go to https://search.google.com/search-console
   - Add `https://thesharkretail.com`

2. **Verify Ownership:**
   - Use DNS verification method (easiest with Namecheap)
   - Add TXT record in Namecheap Advanced DNS
   - Copy the TXT record value from Google
   - Add in Namecheap: Type: TXT, Host: @, Value: (Google's value)

3. **Request Removal of Directory Listings:**
   - Once verified, go to "Removals"
   - Request removal of any directory listing URLs
   - Request re-indexing of your homepage

## Troubleshooting

### Issue: Still seeing directory listing

**Solution:**
1. Check DNS records in Namecheap - must point to Vercel
2. Clear browser cache and test in incognito
3. Check if DNS has propagated: https://dnschecker.org/
4. Wait 24-48 hours for full DNS propagation

### Issue: Domain not pointing to Vercel

**Solution:**
1. Verify DNS records in Namecheap match Vercel's instructions
2. Remove any conflicting A/CNAME records
3. Wait for DNS propagation
4. Check Vercel dashboard for DNS configuration status

### Issue: SSL not working

**Solution:**
1. Wait for DNS to fully propagate
2. Check Vercel dashboard → Domains → SSL status
3. Vercel will automatically provision SSL once DNS is correct
4. Can take up to 24 hours after DNS propagation

### Issue: 404 errors

**Solution:**
1. Check Vercel deployment is successful
2. Verify `vercel.json` configuration (if custom)
3. Check Next.js routing in your app
4. Review Vercel deployment logs

## Vercel Configuration Files

### vercel.json (if needed for custom config)

Create `vercel.json` in project root if you need custom redirects:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Important Notes

- **Vercel doesn't use .htaccess** - Vercel uses `vercel.json` for configuration
- **DNS propagation** can take 24-48 hours globally
- **Vercel automatically handles** HTTPS, CDN, and optimizations
- **No server configuration needed** - Vercel handles everything
- **Directory listings won't appear** once DNS points to Vercel

## Next Steps

1. ✅ Configure DNS in Namecheap to point to Vercel
2. ✅ Wait for DNS propagation (check with dnschecker.org)
3. ✅ Verify website loads correctly on Vercel domain
4. ✅ Request Google to remove directory listings
5. ✅ Monitor Google Search Console for indexing

## Support

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **Vercel Docs:** https://vercel.com/docs

