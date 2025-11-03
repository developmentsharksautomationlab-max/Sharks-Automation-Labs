# Deployment Guide for The Shark Retail

## Server Configuration Issue - Directory Listing

If you're seeing a directory listing in Google search results, your server needs to be configured to serve the Next.js application properly.

## Solution Options

### Option 1: Deploy as Node.js Application (Recommended)

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

3. **Use a process manager (PM2) to keep it running:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "thesharkretail" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure LiteSpeed Web Server:**
   - Point your domain to the application running on port 3000 (or your configured port)
   - Use LiteSpeed's Node.js adapter or reverse proxy to port 3000
   - Disable directory listing in LiteSpeed Web Admin Console

### Option 2: Static Export (Alternative)

If you prefer static hosting, update `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  // ... rest of config
};
```

Then build and upload the `out` folder to your server.

## LiteSpeed Server Configuration

1. **Disable Directory Listing:**
   - Login to LiteSpeed Web Admin Console
   - Go to Virtual Hosts → your domain → General
   - Set "Enable Indexes" to "No"
   - Save and restart

2. **Configure Document Root:**
   - Point to your Next.js application directory
   - Ensure `.htaccess` file is in the root directory

3. **Node.js Configuration:**
   - Enable Node.js in LiteSpeed
   - Set Node.js App Root to your project directory
   - Set Node.js Entry Point to `server.js` or use PM2

## Important Files

- `.htaccess` - Disables directory listing and handles routing
- `robots.txt` - Blocks search engines from indexing directory listings
- Ensure these files are uploaded to your server root

## After Deployment

1. Test your site: `https://thesharkretail.com`
2. Request Google to re-crawl in Google Search Console
3. Monitor for directory listing removal

