# Indoor Jungle Landing Page

This is the public landing page for Indoor Jungle - a hybrid plant care tracker and Web3 gaming ecosystem.

07.11.25 landing page req's art screenshots and proofing v0.03.06
17.11.25 phygital pics need to be created and uploaded, deleting checklist 

**Live Site:** https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/

---

## 🌐 Site Structure

The landing page consists of **5 interconnected pages**:

### 1. **index.html** - Navigation Hub
- Main entry point with navigation to all sections
- Brief overview and signup form
- Links to: Plant Tracker, Game Info, Phigital Pots, Beta Guide

### 2. **tracker.html** - Plant Care Tracker (Public)
- Public marketing page for the tracker app features
- Showcases core functionality with screenshots
- Numbered plant system, calendar, care logging, photo tracking

### 3. **game.html** - 10 Eras of Growth
- Explains the Web3 game progression system
- Property levels from studio apartment to luxury mansion
- LVS token economy and NFT integration

### 4. **phigital-pots.html** - NFT Plant Pots
- Explains phigital (physical + digital) NFT pot concept
- How NFT value grows with tracker usage + game advancement
- Where to buy: local nurseries, Indoor Jungle website, in-game

### 5. **beta-guide.html** - Beta User Tutorial (Email-Only)
- Comprehensive step-by-step guide for beta testers
- Sent via email after signup
- NOT linked in main navigation (has noindex meta tag)

# Indoor Jungle Landing Page — Master Checklist

## 📁 Files & Structure
- [ ] Ensure these files exist in the root or specified folders:
  - [ ] index.html
  - [ ] tracker.html
  - [ ] game.html
  - [ ] phigital-pots.html
  - [ ] beta-guide.html (email-only, noindex)
  - [ ] styles.css
  - [ ] script.js
  - [ ] README.md
  - [ ] /images folder with all screenshots, concept art, and logo

## 📋 Quick Start Checklist
- [ ] Enable GitHub Pages (Settings → Pages → Deploy from main/root)
- [ ] Update URLs in all HTML files with your GitHub Pages URL
- [ ] Add all app screenshots to landing-page/images/
- [ ] Replace screenshot placeholder divs with <img> tags
- [ ] Add your social media links (Facebook, Instagram)
- [ ] Connect email signup form to your email service (Formspree, Mailchimp, or Google Forms)
- [ ] Create legal pages (terms.html, privacy.html, disclaimer.html)
- [ ] Test on mobile devices

## 📧 Email Signup Integration
- [ ] Decide on Formspree, Mailchimp, or Google Forms
- [ ] Embed/integrate the chosen form in index.html
- [ ] Remove/comment out placeholder JS alert from script.js
- [ ] Test the signup flow

## 🔒 Legal Pages
- [ ] Create terms.html (using generator for base content)
- [ ] Create privacy.html (include data, cookie, Firebase info)
- [ ] Create disclaimer.html (crypto/NFT/beta warnings)
- [ ] Paste legal links in the footer of all HTML files

## 🎨 Customization
- [ ] Set site colors in styles.css using CSS variables
- [ ] Update hero headline and navigation links in index.html
- [ ] Polish feature descriptions and marketing copy in tracker.html
- [ ] Update game economy and eras in game.html
- [ ] Finalize NFT pot descriptions and sales info in phigital-pots.html
- [ ] Write clear beta-guide instructions in beta-guide.html

## 📊 Analytics (Optional)
- [ ] Set up a Google Analytics account
- [ ] Add GA script before </head> in all HTML files

## 🌐 Custom Domain (Optional)
- [ ] Purchase desired domain
- [ ] Add DNS A records and CNAME in registrar settings
- [ ] Add CNAME file to repo root with domain name

## 🧪 Testing Checklist
- [ ] Verify all 5 HTML pages load correctly
- [ ] All screenshots/images display as intended
- [ ] Navigation links connect all pages
- [ ] Social media links work
- [ ] Signup form submits to chosen service
- [ ] Test on iOS Safari and Android Chrome
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Check performance/speed with PageSpeed Insights
- [ ] Verify OpenGraph meta tags
- [ ] Ensure beta-guide.html uses noindex tag

## 🔄 Publishing Workflow
- [ ] Upload all files to GitHub
- [ ] Deploy on GitHub Pages
- [ ] Announce beta only after all tests are complete

---

**Pro Tip:** You can copy this checklist into your README or use it as a GitHub issue for tracking your tasks!

## 🔒 Legal Pages

Create separate pages for legal content:

### Create terms.html

1. Use a template generator like [TermsFeed](https://www.termsfeed.com/)
2. Copy the structure from `index.html` (header/footer)
3. Replace main content with your Terms of Service
4. Save as `terms.html` in root folder

### Create privacy.html

1. Include data collection, cookies, Firebase usage
2. Copy header/footer structure from `index.html`
3. Save as `privacy.html`

### Create disclaimer.html

1. Add crypto/NFT risk warnings
2. Beta product disclaimers
3. Investment warnings
4. Save as `disclaimer.html`

**Update footer links in all HTML files:**
```html
<li><a href="terms.html">Terms of Service</a></li>
<li><a href="privacy.html">Privacy Policy</a></li>
<li><a href="disclaimer.html">Disclaimer</a></li>
```

---

## 🎨 Customization

### Colors

All colors are defined in `styles.css` using CSS variables that match the Indoor Jungle app:
```css
:root {
    --primary-green: hsl(122, 39%, 39%);
    --primary-light: hsl(120, 10%, 95%);
    --accent-green: #4ADE80;
    --text-dark: hsl(0, 0%, 10%);
    --neutral-light: hsl(120, 10%, 95%);
}
```

### Content Updates

Key sections to customize:
- **index.html**: Hero headline, navigation links
- **tracker.html**: Feature descriptions, marketing copy
- **game.html**: Era descriptions, LVS token economy details
- **phigital-pots.html**: NFT value proposition, purchase options
- **beta-guide.html**: Step-by-step instructions, feature explanations

---

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. Create account at [analytics.google.com](https://analytics.google.com/)
2. Get your tracking ID
3. Add before `</head>` in ALL HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `indoorjungle.com`):

1. Purchase domain from Namecheap, GoDaddy, etc.
2. In domain registrar, add DNS A records:
   ```
   Type: A, Host: @, Value: 185.199.108.153
   Type: A, Host: @, Value: 185.199.109.153
   Type: A, Host: @, Value: 185.199.110.153
   Type: A, Host: @, Value: 185.199.111.153
   ```
3. Add CNAME record:
   ```
   Type: CNAME, Host: www, Value: jarmanbot.github.io
   ```
4. Create file `CNAME` in repo root with your domain:
   ```
   yourdomain.com
   ```
5. Wait for DNS propagation (up to 24 hours)

---

## 🧪 Testing Checklist

Before announcing the beta:

- [ ] All 5 HTML pages load correctly
- [ ] All screenshots display properly (no placeholder divs)
- [ ] Navigation links work between all pages
- [ ] External social media links work
- [ ] Form submission works with chosen email service
- [ ] Test on real mobile devices (iOS Safari, Android Chrome)
- [ ] Test on desktop browsers (Chrome, Safari, Firefox)
- [ ] Check page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify meta tags with [OpenGraph debugger](https://www.opengraph.xyz/)
- [ ] Verify beta-guide.html has noindex tag (should not appear in search)

---

## 📁 File Structure

```
landing-page/
├── index.html              # Navigation hub page
├── tracker.html            # Plant care tracker marketing
├── game.html               # 10 Eras of Growth explanation
├── phigital-pots.html      # NFT pots explanation
├── beta-guide.html         # Beta user tutorial (email-only)
├── styles.css              # All styling (shared across pages)
├── script.js               # Form handling & animations
├── README.md               # This file
└── images/
    ├── logo.png                          # App icon
    ├── screenshot-plant-list.png         # Tracker screenshots
    ├── screenshot-dropdown.png
    ├── screenshot-calendar.png
    ├── screenshot-missed-care.png
    ├── screenshot-plantid.png
    ├── screenshot-game-eras.png          # Game screenshot
    ├── pot-concept-basic.png             # NFT pot concept art
    ├── pot-concept-premium.png
    ├── pot-concept-luxury.png
    ├── screenshot-nft-dashboard.png
    ├── screenshot-ios-install.png        # Beta guide screenshots
    ├── screenshot-android-install.png
    ├── screenshot-add-plant.png
    ├── screenshot-care.png
    ├── screenshot-quick-actions.png
    ├── screenshot-recommendations.png
    ├── screenshot-analytics.png
    ├── screenshot-environmental.png
    ├── screenshot-settings.png
    ├── screenshot-game-interface.png
    └── screenshot-notifications.png
```

---

## 🔄 Publishing Workflow

### Step 1: Prepare in Replit
1. Upload all screenshots to `landing-page/images/` folder
2. Replace placeholder divs with `<img>` tags in HTML files
3. Update social media links
4. Test locally

### Step 2: Upload to GitHub
1. Go to https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE
2. Upload all HTML files to root directory
3. Upload `styles.css` and `script.js` to root
4. Upload all images to `/images/` folder
5. Upload this README.md

### Step 3: Enable GitHub Pages
1. Settings → Pages → Deploy from main/root
2. Wait for deployment (1-2 minutes)
3. Visit https://jarmanbot.github.io/INDOOR-JUNGLE-LANDING-PAGE/

### Step 4: Configure Email Collection
1. Set up Formspree, Mailchimp, or Google Forms
2. Update form action in `index.html`
3. Test signup flow

---

## 🆘 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://help.formspree.io/)
- [Web.dev Best Practices](https://web.dev/)
- [TinyPNG Image Compression](https://tinypng.com/)
- [OpenGraph Debugger](https://www.opengraph.xyz/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 📝 Important Notes

- **beta-guide.html** is email-only and should NOT be linked in main navigation
- NFT pots are purchasable at local nurseries, Indoor Jungle website, or in-game
- NFT value grows with TRACKER USAGE + GAME ADVANCEMENT (not plant death - forgiving design)
- All pages share the same `styles.css` and `script.js` for consistency

---

**Indoor Jungle** - Grow real plants. Build virtual worlds. Earn crypto.

Repository: https://github.com/jarmanbot/INDOOR-JUNGLE-LANDING-PAGE
