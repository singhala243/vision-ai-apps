# Vision AI Labs - Play Store Developer Portfolio Website

A fast, responsive, and Google Play–compliant portfolio website built for **Vision AI Labs** to showcase all published Android applications.

---

## 🌟 Included Applications

1. **VidTube** (`videoplayer.demo.com.videoplay`) – 1M+ Installs
2. **ClearHear: Sound Amplifier EQ** (`com.clearhear.sound.amplifier`)
3. **DocuLite: PDF Document Scanner** (`com.doculite.scanner`)
4. **Image to PDF - PDF Maker** (`com.smart.imagetopdf.pdfmaker`)
5. **Status Saver & Downloader** (`com.statussaver.downloader.free`)
6. **Volume Booster -Bass Equalizer** (`com.volumebooster.bassequalizer.sound`)
7. **Universal Remote: Smart TV** (`com.smartlink.tvremote.universal`)
8. **MirrorCast: Cast to TV & Web** (`com.mirrorcast.casttotv.screenmirroring`)

---

## 📁 Project Structure

```
website/
├── index.html              # Main showcase portfolio & interactive catalog
├── privacy.html            # Universal & per-app Privacy Policy hub
├── terms.html              # Terms of Service
├── app-ads.txt             # Google AdMob verification file
├── data/
│   └── apps.json           # App database (easily add or edit apps)
├── css/
│   └── style.css           # Glassmorphism, animations & styles
├── js/
│   └── main.js             # Filter chips, live search & details modal
├── assets/
│   └── icons/              # Scalable SVG vector icons for each app
└── README.md               # Deployment and maintenance guide
```

---

## 🚀 Free Hosting Deployment Guide (Zero Cost Forever)

### Method 1: GitHub Pages (Recommended)
GitHub Pages gives you a completely free domain (`https://<your-username>.github.io/<repo-name>`) with unlimited uptime and built-in HTTPS.

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g. `vision-ai-labs` or `<your-username>.github.io`).
   - Set it to **Public**.

2. **Upload the Website Files**:
   - Open your terminal and navigate to the `website` directory:
     ```bash
     cd website
     git init
     git add .
     git commit -m "Initial commit of Vision AI Labs developer website"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git push -u origin main
     ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment**:
     - Source: `Deploy from a branch`
     - Branch: `main` / `/(root)`
   - Click **Save**.
   - Your website will be live in ~60 seconds at `https://<your-username>.github.io/<repo-name>/`.

---

### Method 2: Cloudflare Pages (Fastest Worldwide CDN)
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and create a free account.
2. Select **Compute (Workers & Pages)** → **Create application** → **Pages**.
3. Choose **Upload Assets**, drag and drop the entire `website` folder, and click **Deploy site**.
4. You will instantly receive a free URL like `https://vision-ai-labs.pages.dev`.

---

## 🛠️ Google Play Compliance Checklist

### 1. Privacy Policy URLs for Play Console
Google Play requires a dedicated privacy policy URL for your developer account and each app:
- **Universal Privacy Hub**: `https://<your-domain>/privacy.html`
- **ClearHear**: `https://<your-domain>/privacy.html?app=clearhear`
- **VidTube**: `https://<your-domain>/privacy.html?app=vidtube`
- **DocuLite**: `https://<your-domain>/privacy.html?app=doculite`
- **Volume Booster**: `https://<your-domain>/privacy.html?app=volume-booster`

Paste these links into your Google Play Console under **Policy and programs** → **App content** → **Privacy policy**.

### 2. Monetization & `app-ads.txt`
If you monetize your apps using Google AdMob:
1. Open `website/app-ads.txt`.
2. Replace `pub-0000000000000000` with your real AdMob Publisher ID (found in AdMob settings under `Account Information`).
3. Set your Developer Website in Play Console to `https://<your-domain>`.
4. AdMob will crawl `https://<your-domain>/app-ads.txt` within 24 hours.

---

## ➕ Adding a New App
To add a new app in the future, simply open `data/apps.json` and append a new JSON object:

```json
{
  "id": "new-app-slug",
  "name": "My New App Title",
  "tagline": "Short compelling one-line description.",
  "category": "Productivity",
  "categoryKey": "productivity",
  "featured": false,
  "rating": 4.8,
  "ratingCount": "100+",
  "downloads": "10K+",
  "packageId": "com.visionailabs.newapp",
  "storeUrl": "https://play.google.com/store/apps/details?id=com.visionailabs.newapp",
  "privacyUrl": "privacy.html?app=new-app-slug",
  "icon": "assets/icons/logo.svg",
  "tags": ["Feature 1", "Feature 2"],
  "description": "Full description of your new application."
}
```
The website will automatically generate the app card, filter chip counts, and search indexing without any HTML modifications!
