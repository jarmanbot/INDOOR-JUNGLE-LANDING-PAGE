# Deployment Guide

Step-by-step instructions for deploying the Indoor Jungle landing page to GitHub Pages.

---

## Prerequisites

- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account with access to https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE

---

## Method 1: Using Git (Recommended)

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE.git
cd INDOOR-JUNGLE-LANDING-PAGE
```

### Step 2: Copy Files

Copy all files from this `landing-page/` folder into your cloned repository:

```bash
# Navigate to where you downloaded this folder
# Then copy everything to your cloned repo:

cp index.html /path/to/INDOOR-JUNGLE-LANDING-PAGE/
cp styles.css /path/to/INDOOR-JUNGLE-LANDING-PAGE/
cp script.js /path/to/INDOOR-JUNGLE-LANDING-PAGE/
cp README.md /path/to/INDOOR-JUNGLE-LANDING-PAGE/
cp -r images/ /path/to/INDOOR-JUNGLE-LANDING-PAGE/
```

Or simply drag and drop all files from `landing-page/` into your cloned repo folder.

### Step 3: Commit and Push

```bash
cd INDOOR-JUNGLE-LANDING-PAGE
git add .
git commit -m "Initial landing page setup"
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE/settings/pages
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch and **/ (root)** folder
4. Click **Save**

Wait a few minutes, then visit: https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/

---

## Method 2: Using GitHub Web Interface (No Git Required)

### Step 1: Navigate to Repository

Go to https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE

### Step 2: Upload Files

1. Click **Add file** → **Upload files**
2. Drag and drop all files from `landing-page/` folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. For the images folder, create it first:
   - Click **Add file** → **Create new file**
   - Type `images/logo.png` (this creates the folder)
   - Cancel and then upload `logo.png` to the images folder

### Step 3: Commit Changes

1. Scroll down to "Commit changes"
2. Add commit message: "Initial landing page setup"
3. Click **Commit changes**

### Step 4: Enable GitHub Pages

1. Go to **Settings** tab
2. Scroll to **Pages** in sidebar
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

Wait a few minutes, then visit: https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/

---

## Method 3: Using GitHub Desktop (Easiest for Windows/Mac)

### Step 1: Install GitHub Desktop

Download from https://desktop.github.com/

### Step 2: Clone Repository

1. Open GitHub Desktop
2. File → Clone repository
3. Find `jarmanbot/INDOOR-JUNGLE-LANDING-PAGE`
4. Choose local path and click **Clone**

### Step 3: Copy Files

Open the local folder (Repository → Show in Finder/Explorer) and:
1. Copy all files from `landing-page/` into this folder
2. Replace any existing files

### Step 4: Commit and Push

1. GitHub Desktop will show all changes
2. Add commit summary: "Initial landing page setup"
3. Click **Commit to main**
4. Click **Push origin**

### Step 5: Enable GitHub Pages

Follow Step 4 from Method 1 above.

---

## Post-Deployment Tasks

After your site is live, complete these essential updates:

### 1. Update URLs in index.html

**Required before sharing publicly!**

Edit `index.html` and find/replace all instances of:
- `https://yourusername.github.io/indoor-jungle/` 
- Replace with: `https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/`

This appears in 4 places in the `<head>` section (Open Graph and Twitter meta tags).

### 2. Add Social Media Links

Replace placeholder URLs:
- `https://facebook.com/yourpage` → your Facebook page
- `https://instagram.com/yourpage` → your Instagram account

### 3. Connect Email Form

Choose and set up one of these options:
- **Formspree** (easiest): https://formspree.io/
- **Mailchimp**: https://mailchimp.com/
- **Google Forms**: https://forms.google.com/

See README.md for detailed integration instructions.

### 4. Add Screenshots

1. Take screenshots of your Indoor Jungle app (mobile view, 1080x1920px)
2. Save to `/images/` folder as:
   - `screenshot-plant-list.png`
   - `screenshot-calendar.png`
   - `screenshot-care.png`
3. Update `index.html` to use real images instead of placeholders

### 5. Create Legal Pages

Create and add:
- `terms.html` (Terms of Service)
- `privacy.html` (Privacy Policy)
- `disclaimer.html` (Crypto/NFT disclaimers)

Use templates from [TermsFeed](https://www.termsfeed.com/) or consult a lawyer.

---

## Troubleshooting

### Site Not Loading After Enabling Pages

- Wait 5-10 minutes for GitHub to build and deploy
- Check https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE/deployments for status
- Ensure you selected **main** branch and **/ (root)** folder

### 404 Error on Images

- Verify images are in `/images/` folder in your repo
- Check capitalization (use `images/logo.png` not `Images/logo.png`)
- Clear browser cache and reload

### Form Not Working

- Form will show alert until you integrate an email service
- See README.md for Formspree, Mailchimp, or Google Forms setup

### Meta Tags Not Showing on Social Media

- Update all URLs in `<head>` section of `index.html`
- Use [OpenGraph Debugger](https://www.opengraph.xyz/) to test
- Facebook/LinkedIn may cache old data - use their debugger tools to refresh

---

## Making Updates

After initial deployment, to make changes:

### Using Git:
```bash
cd INDOOR-JUNGLE-LANDING-PAGE
# Make your changes to files
git add .
git commit -m "Description of changes"
git push origin main
```

### Using GitHub Web Interface:
1. Navigate to file on GitHub
2. Click pencil icon to edit
3. Make changes
4. Commit changes

Changes appear live in 1-2 minutes.

---

## Testing Checklist

After deployment, test:

- [ ] Site loads at https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/
- [ ] All navigation links work
- [ ] Images load properly (logo, screenshots)
- [ ] Form submission works
- [ ] Mobile responsive design works
- [ ] Social media links work
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test social sharing (check Facebook/Twitter preview)

---

## Going Live Announcement

Once everything is tested and working:

1. Share the link on your social media
2. Add link to your Indoor Jungle app
3. Include in your email signature
4. Share in plant care communities
5. Consider running ads to your target audience

---

## Custom Domain Setup (Optional)

To use `indoorjungle.com` instead of the GitHub Pages URL:

1. Purchase domain from registrar (Namecheap, GoDaddy, etc.)
2. Add DNS records (see README.md for details)
3. Add `CNAME` file to repo root with your domain
4. Update GitHub Pages settings to use custom domain
5. Wait for DNS propagation (up to 24 hours)

---

## Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Git Documentation**: https://git-scm.com/doc
- **GitHub Desktop Help**: https://docs.github.com/en/desktop

---

**Ready to go live?** Follow Method 1, 2, or 3 above and your landing page will be public in minutes!
