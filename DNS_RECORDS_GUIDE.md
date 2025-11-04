# DNS Records Guide - What to Keep vs What to Change

## Important: Keep These Records (DO NOT DELETE)

When updating DNS to point to Vercel, you must **KEEP** these records:

### ✅ TXT Records (Email Authentication)
- **SPF Record:** `v=spf1 include:spf.efwd.registrar-servers.com ~all`
  - This is for email authentication
  - **DO NOT DELETE** - Keep this record
- **DKIM Records:** (if you have any)
  - Keep all DKIM TXT records
- **DMARC Records:** (if you have any)
  - Keep all DMARC TXT records
- **Domain Verification Records:** (if you have any)
  - Keep any verification TXT records

### ✅ MX Records (Email)
- **MX Records:** (if you use email)
  - Keep all MX records
  - These are for receiving email

### ✅ Other Important Records
- **CAA Records:** (if you have any)
  - Keep these for SSL certificate authorization
- **SRV Records:** (if you have any)
  - Keep these for specific services

## What to CHANGE/REMOVE

### ❌ A Records (Old Hosting)
- **Delete any A records** pointing to old hosting IPs
- **Example:** A record with `@` pointing to Namecheap hosting IP
- **Add new A record:** `@` → Vercel IP (from Vercel dashboard)

### ❌ CNAME Records (Old Hosting)
- **Delete any CNAME records** pointing to old hosting
- **Add new CNAME record:** `www` → Vercel CNAME (from Vercel dashboard)

## Example DNS Setup

After updating, your DNS records should look like this:

```
✅ KEEP:
- TXT Record: @ → v=spf1 include:spf.efwd.registrar-servers.com ~all
- MX Record: @ → mail.privateemail.com (or your email provider)
- (Any other TXT records for email)

✅ ADD (for Vercel):
- A Record: @ → 76.76.21.21 (Vercel IP - check your Vercel dashboard)
- CNAME Record: www → cname.vercel-dns.com. (Vercel CNAME - check your Vercel dashboard)

❌ REMOVE:
- A Record: @ → (old hosting IP)
- CNAME Record: www → (old hosting)
```

## Step-by-Step in Namecheap

1. **Go to Advanced DNS** in Namecheap
2. **Identify all records:**
   - Look at each record type
   - TXT records with "spf1" → **KEEP**
   - MX records → **KEEP**
   - A records pointing to old hosting → **DELETE**
   - CNAME records pointing to old hosting → **DELETE**

3. **Delete only old hosting records:**
   - Click trash icon on old A records
   - Click trash icon on old CNAME records
   - **DO NOT delete TXT or MX records**

4. **Add Vercel records:**
   - Add new A record: `@` → Vercel IP
   - Add new CNAME record: `www` → Vercel CNAME

5. **Verify:**
   - You should have: TXT records (kept), MX records (kept), new A record (Vercel), new CNAME record (Vercel)
   - You should NOT have: old A/CNAME records pointing to old hosting

## Common Mistakes to Avoid

❌ **Don't delete the SPF TXT record** - This breaks email authentication
❌ **Don't delete MX records** - This breaks email receiving
❌ **Don't delete all records** - Only delete A and CNAME records for old hosting
✅ **Do keep email records** - TXT, MX, and other email-related records
✅ **Do add Vercel records** - A and CNAME records pointing to Vercel

## Need Help?

If you're unsure about a record:
- **TXT records** - Usually safe to keep (email, verification)
- **MX records** - Always keep (email)
- **A/CNAME records** - Check the value - if it points to old hosting, delete it

## Summary

**Keep:** TXT records (especially SPF), MX records, and any email-related records
**Change:** A and CNAME records to point to Vercel instead of old hosting

