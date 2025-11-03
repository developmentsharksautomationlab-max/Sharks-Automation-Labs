# LiteSpeed Web Server Configuration for The Shark Retail

## CRITICAL: Fix Directory Listing Issue

Your server is currently showing directory listings instead of your Next.js application. Follow these steps:

## Step 1: Disable Directory Indexing in LiteSpeed

1. **Login to LiteSpeed Web Admin Console** (usually `https://your-server-ip:7080`)

2. **Navigate to Virtual Hosts:**
   - Click "Virtual Hosts" in the left menu
   - Find and click on your domain (`thesharkretail.com` or `www.thesharkretail.com`)

3. **Disable Directory Indexing:**
   - Go to the "General" tab
   - Find "Enable Indexes" setting
   - Set it to **"No"** (disable it)
   - Click "Save"

4. **Set Document Root:**
   - In the same "General" tab
   - Set "Document Root" to your Next.js application directory (where your `.next` folder is)
   - Example: `/home/username/thesharkretail` or `/var/www/thesharkretail`

5. **Set Index Files:**
   - In "Index Files" section
   - Add: `index.html`, `index.php`
   - Remove any `index.html` or similar that might cause directory listing

6. **Restart the Virtual Host:**
   - Click "Graceful Restart" or "Restart" button

## Step 2: Configure for Next.js Application

### Option A: If Using Node.js (Recommended)

1. **Enable Node.js in LiteSpeed:**
   - Go to "Script Handler" tab
   - Add a new script handler:
     - Suffix: `js`
     - Handler: `lsnode`
     - Type: `Node`

2. **Set Node.js App:**
   - Go to "External App" tab
   - Add new "Node.js Application":
     - Name: `thesharkretail-node`
     - Run on port: `3000` (or your Next.js port)
     - Application root: `/home/username/thesharkretail`
     - Application startup file: `server.js` or `server/index.js`
     - Or use PM2 (see below)

3. **Use PM2 (Process Manager):**
   ```bash
   # SSH into your server
   npm install -g pm2
   cd /path/to/your/app
   npm run build
   pm2 start npm --name "thesharkretail" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up Reverse Proxy in LiteSpeed:**
   - Go to "Rewrites" tab
   - Add rewrite rules to proxy requests to Node.js:
     ```
     RewriteCond %{REQUEST_URI} !^/\.well-known/
     RewriteRule ^(.*)$ http://127.0.0.1:3000$1 [P,L]
     ```

### Option B: If Using Static Export

If you're using static export (`output: 'export'` in next.config.ts):

1. **Build for static export:**
   ```bash
   npm run build
   ```

2. **Set Document Root to `out` folder:**
   - In LiteSpeed, set Document Root to: `/path/to/your/app/out`
   - This will serve the static files directly

## Step 3: Upload .htaccess File

1. **Upload the `.htaccess` file** to your server root directory
2. **Ensure it's in the same directory** as your Next.js app or the `out` folder (if static)

## Step 4: Test Configuration

1. **Test your website:**
   - Visit: `https://thesharkretail.com`
   - Visit: `https://www.thesharkretail.com`
   - Both should show your website, NOT directory listings

2. **Test directory access:**
   - Try: `https://thesharkretail.com/cgi-bin/`
   - Should return 403 Forbidden or 404 Not Found

## Step 5: Request Google to Remove Directory Listing

1. **Go to Google Search Console:**
   - Visit: https://search.google.com/search-console
   - Add your property if not already added

2. **Request Removal:**
   - Go to "Removals" in the left menu
   - Click "New Request"
   - Enter the directory listing URL: `https://thesharkretail.com/`
   - Select "Remove this URL"
   - Submit the request

3. **Request Re-indexing:**
   - Go to "URL Inspection" tool
   - Enter: `https://thesharkretail.com`
   - Click "Request Indexing"

## Verification Checklist

- [ ] Directory indexing disabled in LiteSpeed
- [ ] Document root set correctly
- [ ] `.htaccess` file uploaded to server
- [ ] Next.js app running (if using Node.js)
- [ ] Website loads correctly (not directory listing)
- [ ] cgi-bin returns 403/404
- [ ] Google Search Console removal requested

## Common Issues

**Issue: Still seeing directory listing**
- Solution: Check LiteSpeed "Enable Indexes" is set to "No"
- Solution: Restart the virtual host
- Solution: Clear browser cache and test in incognito mode

**Issue: 500 Internal Server Error**
- Solution: Check `.htaccess` syntax
- Solution: Check LiteSpeed error logs
- Solution: Verify file permissions

**Issue: Next.js app not loading**
- Solution: Ensure Node.js is running (check with `pm2 list`)
- Solution: Verify port 3000 is accessible
- Solution: Check LiteSpeed reverse proxy configuration

## Need Help?

If issues persist:
1. Check LiteSpeed error logs: `/usr/local/lsws/logs/error.log`
2. Check Next.js logs if using PM2: `pm2 logs thesharkretail`
3. Verify all files are uploaded correctly

