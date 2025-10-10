# 🚀 Netlify Deployment Guide

**Complete guide for deploying your overhauled StudentsForPalestine.org site to Netlify.**

---

## Prerequisites

Before deploying, you need:
- GitHub account with your repository
- Netlify account (free tier is fine)
- Domain configured (if using custom domain)

---

## Step 1: Prepare Your Repository

### Install Dependencies Locally First

```bash
cd /Users/brennan/Documents/GitHub/StudentsForPalestine

# Install Ruby dependencies
bundle install

# Test build locally
bundle exec jekyll serve

# Visit http://localhost:4000 to test
```

**Check that:**
- ✅ All pages load
- ✅ Navigation works
- ✅ Collapsible sections work
- ✅ Links are functional

### Commit Everything

```bash
git add .
git commit -m "Major site overhaul: Modern Jekyll + water.css + sub-pages"
git push origin main
```

---

## Step 2: Connect to Netlify

### Option A: Netlify UI (Recommended for First Time)

1. **Go to [netlify.com](https://netlify.com)**

2. **Sign up/Login**
   - Use GitHub account for easy connection

3. **Click "Add new site" → "Import an existing project"**

4. **Connect to GitHub**
   - Authorize Netlify to access your repos
   - Select `StudentsForPalestine` repository

5. **Configure Build Settings:**

   **Branch to deploy:** `main`
   
   **Build command:**
   ```
   bundle exec jekyll build
   ```
   
   **Publish directory:**
   ```
   _site
   ```
   
   **Build environment variables:**
   ```
   RUBY_VERSION = 2.7.2
   JEKYLL_ENV = production
   ```

6. **Click "Deploy site"**

### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Follow prompts:
# - Link to existing site or create new
# - Build command: bundle exec jekyll build
# - Publish directory: _site

# Deploy
netlify deploy --prod
```

---

## Step 3: Configure Custom Domain

### If You Own watermelonclub.org:

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `watermelonclub.org`

2. **Configure DNS:**

   **If using Netlify DNS (Easiest):**
   - Follow Netlify's nameserver instructions
   - Update at your domain registrar (GoDaddy, Namecheap, etc.)
   - Point nameservers to Netlify's

   **If using your own DNS:**
   - Add DNS records at your registrar:
     ```
     A Record:  @  →  75.2.60.5
     CNAME:  www  →  your-site.netlify.app
     ```
   
   **Note:** DNS propagation takes 24-48 hours

3. **Enable HTTPS:**
   - Netlify does this automatically with Let's Encrypt
   - Wait for DNS to propagate
   - Then enable "Force HTTPS" in Domain settings

---

## Step 4: Verify Deployment

### Check These URLs:

**Homepage:**
- `https://your-site.netlify.app/` or `https://watermelonclub.org/`

**Key Pages:**
- `/start-here`
- `/campus-organizing`
- `/take-action`
- `/education`
- `/support`
- `/people-to-follow`

**Sub-pages:**
- `/education/palestine-101`
- `/education/resources`
- `/education/media-literacy`
- `/campus-organizing/weekly-actions`
- `/support/legal`

### Test Functionality:

☐ **Navigation:** All links work  
☐ **Collapsible sections:** Click headers to expand/collapse  
☐ **Mobile:** Test on phone  
☐ **Sticky header:** Scrolls with page  
☐ **Hash navigation:** Links like `#section` expand collapsibles  
☐ **Forms:** Any contact forms work  
☐ **Images:** All images load  
☐ **External links:** Open in new tab  

---

## Step 5: Set Up Continuous Deployment

**Good news:** This is automatic!

Now whenever you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Netlify will:
1. Detect the push
2. Run build command
3. Deploy new version
4. Usually takes 1-2 minutes

**Monitor builds:**
- Go to Netlify Dashboard → Deploys
- See build logs
- Check for errors

---

## Step 6: Configure Netlify Settings

### Enable These Features:

**Forms (if you add contact forms later):**
- Site settings → Forms
- Enable form detection

**Analytics (optional):**
- Site settings → Analytics
- Consider Netlify Analytics (privacy-friendly)

**Headers & Redirects:**
- Already configured in `netlify.toml`
- Verify they're applied: Check deploy log

**Build Hooks (optional):**
- Settings → Build & deploy → Build hooks
- Create hook for manual deploys or scheduled rebuilds

---

## Troubleshooting

### Build Fails

**Check build log for errors:**

**Common issues:**

1. **Ruby version mismatch**
   ```toml
   # In netlify.toml, try different version:
   RUBY_VERSION = "3.0.0"
   ```

2. **Missing gems**
   ```bash
   # Make sure Gemfile.lock is committed
   git add Gemfile.lock
   git commit -m "Add Gemfile.lock"
   git push
   ```

3. **Jekyll command not found**
   ```toml
   # Ensure build command uses bundler:
   command = "bundle install && bundle exec jekyll build"
   ```

### Site Deploys But Looks Wrong

**CSS not loading:**
- Check browser console for 404s
- Verify `/assets/css/custom.css` exists
- Check baseurl in `_config.yml` (should be empty for root domain)

**Images not loading:**
- External images (like from i.ibb.co) need internet access
- Check image URLs are correct

**JavaScript not working:**
- Check browser console for errors
- Verify `/assets/js/collapsible.js` and `/assets/js/navigation.js` exist

### Collapsible Sections Not Working

**Debug steps:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify files loaded: Network tab → JS files
4. Try clicking sections, check console

**Fixes:**
```javascript
// In collapsible.js, add at top:
console.log('Collapsible script loaded');

// Check if it appears in console
```

### Domain Not Working

**DNS not propagated:**
- Wait 24-48 hours
- Check with: `dig watermelonclub.org`
- Or: `nslookup watermelonclub.org`

**Wrong DNS records:**
- Verify records match Netlify's requirements
- Remove conflicting records (old A/CNAME)

**HTTPS issues:**
- Wait for DNS propagation first
- Then Netlify auto-provisions SSL
- Can take a few hours after DNS propagates

---

## Maintenance & Updates

### Regular Content Updates

**Update content:**

1. Edit markdown files locally
2. Test with `bundle exec jekyll serve`
3. Commit and push
4. Auto-deploys via Netlify

**Update urgent actions (weekly):**
- Edit `index.md` - "Current Urgent Actions" section
- Update dates and priorities
- Push to deploy

**Add new resources:**
- Edit appropriate page
- Add to navigation if new page
- Push to deploy

### Check Broken Links (Monthly)

```bash
# Install link checker
gem install html-proofer

# Build site
bundle exec jekyll build

# Check links
htmlproofer ./_site --assume-extension --check-html --allow-hash-href --url-ignore "/localhost/,/example.com/"
```

### Monitor Analytics

**Netlify Analytics (if enabled):**
- Dashboard → Analytics
- See page views, top pages
- Identify popular content

### Backup

**Your code is backed up on GitHub, but also:**

```bash
# Periodic full backup
cd /Users/brennan/Documents/GitHub/StudentsForPalestine
tar -czf backup-$(date +%Y%m%d).tar.gz .

# Or use Time Machine / cloud backup for the directory
```

---

## Environment Variables

**If you need to add secrets (API keys, etc.):**

1. **Never commit secrets to Git**
   - Add to `.gitignore`

2. **Add to Netlify:**
   - Site settings → Build & deploy → Environment
   - Add variable: `KEY_NAME` = `value`

3. **Access in Jekyll:**
   ```liquid
   {{ site.env.KEY_NAME }}
   ```

---

## Performance Optimization

**Already configured in `netlify.toml`:**
- CSS minification ✅
- JS minification ✅
- Image compression ✅
- Caching headers ✅

**Additional optimizations:**

**Enable Netlify Image CDN (if images slow):**
- Settings → Asset optimization
- Enable image optimization

**Enable Netlify CDN:**
- Automatic with Netlify
- Global CDN distribution

---

## Rollback If Needed

**If deployment breaks something:**

1. **Go to Netlify Dashboard → Deploys**

2. **Find last working deploy**

3. **Click "⋮" → "Publish deploy"**

4. **Fix issue locally, then redeploy**

**Or rollback Git:**
```bash
git log  # Find last good commit
git revert HEAD  # Undo last commit
git push
```

---

## Development Workflow

**Local development:**
```bash
# Start local server
bundle exec jekyll serve

# Or with drafts:
bundle exec jekyll serve --drafts

# Or with future posts:
bundle exec jekyll serve --future

# Auto-rebuild on file changes
bundle exec jekyll serve --livereload
```

**Creating new content:**

1. **New page:** Create markdown in appropriate `_collection` folder
2. **New post:** Would go in `_posts` if you add a blog
3. **Test locally** before pushing

**Best practices:**
- Always test locally first
- Commit frequently with clear messages
- Push when ready to deploy
- Monitor Netlify deploy log

---

## Security

**Headers already configured in `netlify.toml`:**
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Content-Security-Policy
- Permissions-Policy

**Additional security:**

**Enable Netlify Security features:**
- Settings → Security
- Configure as needed

**Monitor for vulnerabilities:**
```bash
# Check dependencies
bundle audit

# Update gems
bundle update
```

---

## Cost

**Netlify Free Tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month
- HTTPS
- CDN
- Continuous deployment

**Should be more than enough for this site.**

**If you exceed:**
- Upgrade to Pro ($19/month)
- Or optimize (images, caching)

---

## Support & Resources

**Netlify Documentation:**
- [docs.netlify.com](https://docs.netlify.com/)
- [Jekyll on Netlify](https://docs.netlify.com/configure-builds/common-configurations/jekyll/)

**Jekyll Documentation:**
- [jekyllrb.com/docs/](https://jekyllrb.com/docs/)

**Community Support:**
- [Netlify Community](https://answers.netlify.com/)
- [Jekyll Talk](https://talk.jekyllrb.com/)

**Your Support:**
- Email: [mail@berryhouse.ca](mailto:mail@berryhouse.ca)

---

## Checklist: Pre-Launch

☐ Local build successful  
☐ All pages tested locally  
☐ Navigation works  
☐ Collapsibles work  
☐ Mobile responsive  
☐ Links checked  
☐ Content reviewed for typos  
☐ Contact info correct  
☐ Git committed and pushed  
☐ Netlify site created  
☐ Build settings configured  
☐ First deploy successful  
☐ Custom domain configured (if applicable)  
☐ HTTPS enabled  
☐ All pages accessible  
☐ Functionality tested on live site  

---

## Checklist: Post-Launch

☐ Announced on social media  
☐ Emailed community members  
☐ Updated any old links  
☐ Monitored for issues  
☐ Gathered feedback  
☐ Scheduled regular updates  

---

## Quick Reference

**Local development:**
```bash
bundle exec jekyll serve
# Visit http://localhost:4000
```

**Deploy:**
```bash
git add .
git commit -m "Update"
git push
# Auto-deploys to Netlify
```

**Emergency rollback:**
- Netlify Dashboard → Deploys → Publish previous deploy

---

**Ready to launch? Let's go! 🚀**

**Questions?** Email [mail@berryhouse.ca](mailto:mail@berryhouse.ca)
