# Namecheap Hosting Configuration for The Shark Retail

## CRITICAL: Fix Directory Listing Issue on Namecheap

Your website is showing directory listings instead of your Next.js application. Follow these steps for Namecheap hosting:

## Step 1: Access cPanel

1. **Login to Namecheap:**
   - Go to https://www.namecheap.com/
   - Login to your account
   - Go to "Hosting List" → Click "Manage" next to your domain

2. **Access cPanel:**
   - Click "cPanel" button (or go to Advanced → cPanel)
   - You'll be redirected to cPanel dashboard

## Step 2: Disable Directory Indexing

1. **In cPanel, find "Indexes" or "Directory Privacy":**
   - Look for "Indexes" in the "Advanced" section
   - OR look for "Directory Privacy" in the "Security" section

2. **Disable Directory Indexing:**
   - Click on "Indexes"
   - Select your domain's public_html folder (or root directory)
   - Click "Disable Indexing" or select "No Indexing"
   - This will disable directory listings

3. **Alternative Method - Using .htaccess:**
   - In cPanel, go to "File Manager" (in Files section)
   - Navigate to `public_html` folder (or your domain root)
   - Create or edit `.htaccess` file
   - Add this line at the top: `Options -Indexes`
   - Save the file

## Step 3: Upload .htaccess File

1. **In cPanel File Manager:**
   - Navigate to your domain root (usually `public_html` or `public_html/thesharkretail`)
   - Click "Upload" button
   - Upload the `.htaccess` file from your project
   - OR create/edit the `.htaccess` file directly in File Manager

2. **Verify .htaccess is uploaded:**
   - Make sure the file is in the root directory
   - File name should be exactly `.htaccess` (with the dot at the beginning)
   - In cPanel File Manager, you may need to enable "Show Hidden Files" to see it

## Step 4: Configure Next.js Deployment

### Option A: Static Export (Easiest for Namecheap)

1. **Update `next.config.ts` for static export:**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     // ... rest of config
   };
   ```

2. **Build for static export:**
   ```bash
   npm run build
   ```

3. **Upload the `out` folder:**
   - In cPanel File Manager, go to `public_html`
   - Upload all contents from the `out` folder
   - Make sure `index.html` is in the root of `public_html`

### Option B: Node.js Application (If Supported)

1. **Check if Node.js is available:**
   - In cPanel, look for "Node.js" or "Node.js Selector" in the Software section
   - If available, you can set up Node.js app

2. **Set up Node.js App:**
   - Click "Node.js Selector"
   - Create a new Node.js application
   - Set Application Root to your domain folder
   - Set Application URL to your domain
   - Set Application Startup File to `server.js` or `server.js`
   - Save

3. **Install dependencies and start:**
   ```bash
   # SSH into your server (if available)
   cd ~/public_html/thesharkretail
   npm install
   npm run build
   npm start
   ```

## Step 5: Set Up Domain and Subdomain

1. **In cPanel, go to "Domains" or "Subdomains":**
   - If you want `www.thesharkretail.com` to redirect to `thesharkretail.com`
   - Go to "Redirects" in cPanel
   - Create a redirect from `www.thesharkretail.com` to `thesharkretail.com`

2. **Or use .htaccess redirect** (already included in the .htaccess file)

## Step 6: SSL Certificate (HTTPS)

1. **In cPanel, go to "SSL/TLS Status":**
   - Find your domain
   - Click "Run AutoSSL" if available
   - Or install a free Let's Encrypt certificate

2. **Force HTTPS:**
   - The `.htaccess` file already includes HTTPS redirect
   - After SSL is installed, the redirect will work automatically

## Step 7: Test Your Website

1. **Test your website:**
   - Visit: `https://thesharkretail.com`
   - Visit: `https://www.thesharkretail.com`
   - Both should show your website, NOT directory listings

2. **Test directory access:**
   - Try: `https://thesharkretail.com/cgi-bin/`
   - Should return 403 Forbidden or 404 Not Found

## Step 8: Request Google to Remove Directory Listing

1. **Go to Google Search Console:**
   - Visit: https://search.google.com/search-console
   - Add your property: `https://thesharkretail.com`

2. **Verify Ownership:**
   - Follow Google's instructions to verify your domain
   - You can use HTML file upload method (upload to `public_html`)

3. **Request Removal:**
   - Go to "Removals" in the left menu
   - Click "New Request"
   - Enter the directory listing URL: `https://thesharkretail.com/`
   - Select "Remove this URL"
   - Submit the request

4. **Request Re-indexing:**
   - Go to "URL Inspection" tool
   - Enter: `https://thesharkretail.com`
   - Click "Request Indexing"

## File Upload Instructions

### Using cPanel File Manager:
1. Login to cPanel
2. Go to "File Manager"
3. Navigate to `public_html` (or your domain folder)
4. Click "Upload" button
5. Upload the `.htaccess` file
6. Make sure it's in the root directory

### Using FTP:
1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Namecheap hosting
3. FTP details are in cPanel → "FTP Accounts"
4. Upload `.htaccess` to `public_html` folder
5. Make sure file permissions are set to 644

## Verification Checklist

- [ ] Directory indexing disabled in cPanel
- [ ] `.htaccess` file uploaded to `public_html` root
- [ ] Next.js app files uploaded (or static export)
- [ ] Website loads correctly (not directory listing)
- [ ] HTTPS redirect working
- [ ] www redirect working (if configured)
- [ ] cgi-bin returns 403/404
- [ ] Google Search Console removal requested

## Common Issues on Namecheap

**Issue: Still seeing directory listing**
- Solution: Make sure `.htaccess` is in `public_html` root (not in a subfolder)
- Solution: Check cPanel "Indexes" is disabled
- Solution: Clear browser cache and test in incognito mode
- Solution: Verify file name is exactly `.htaccess` (case-sensitive)

**Issue: 500 Internal Server Error**
- Solution: Check `.htaccess` syntax in cPanel → "Error Log"
- Solution: Temporarily rename `.htaccess` to `.htaccess.bak` to test
- Solution: Contact Namecheap support if issues persist

**Issue: Can't see .htaccess file**
- Solution: In File Manager, click "Settings" → Enable "Show Hidden Files"
- Solution: Files starting with `.` are hidden by default

**Issue: Next.js not working**
- Solution: For Namecheap shared hosting, use static export (Option A)
- Solution: Node.js may not be available on all Namecheap plans
- Solution: Contact Namecheap support to check if Node.js is supported

## Namecheap Support

If you need help:
- **Namecheap Support:** https://www.namecheap.com/support/
- **Live Chat:** Available 24/7
- **Email:** support@namecheap.com

## Next Steps After Configuration

1. Wait 24-48 hours for Google to re-crawl
2. Monitor Google Search Console for indexing status
3. Check that directory listings are removed from search results
4. Verify your website appears correctly in Google search

