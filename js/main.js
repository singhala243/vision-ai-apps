// Fallback embedded data in case file:// protocol blocks local fetch
const fallbackApps = [
  {
    "id": "vidtube",
    "name": "VidTube",
    "tagline": "All-format HD video player supporting 4K playback, pop-up window & background play.",
    "category": "Media & Video",
    "categoryKey": "media",
    "featured": true,
    "rating": 4.6,
    "ratingCount": "12.4K",
    "downloads": "1M+",
    "packageId": "videoplayer.demo.com.videoplay",
    "storeUrl": "https://play.google.com/store/apps/details?id=videoplayer.demo.com.videoplay",
    "privacyUrl": "privacy.html?app=vidtube",
    "icon": "assets/icons/vidtube.webp",
    "accentColor": "#ef4444",
    "gradient": "from-red-500 to-rose-600",
    "tags": ["1M+ Downloads", "4K Ultra HD", "Subtitle Sync", "Background Play"],
    "description": "Smooth, battery-optimized media player supporting MKV, MP4, M4V, AVI, MOV, 3GP, FLV, WMV, and RMVB. Includes multi-track audio switching, smart hardware acceleration, and seamless background playback."
  },
  {
    "id": "clearhear",
    "name": "ClearHear: Sound Amplifier EQ",
    "tagline": "Amplify conversations, isolate speech & filter background noise with earbuds.",
    "category": "Audio & Sound",
    "categoryKey": "audio",
    "featured": true,
    "rating": 4.8,
    "ratingCount": "1.2K",
    "downloads": "50K+",
    "packageId": "com.clearhear.sound.amplifier",
    "storeUrl": "https://play.google.com/store/apps/developer?id=Vision+AI+Labs",
    "privacyUrl": "privacy.html?app=clearhear",
    "icon": "assets/icons/clearhear.png",
    "accentColor": "#0ea5e9",
    "gradient": "from-cyan-500 to-blue-600",
    "tags": ["Sub-20ms Latency", "RNNoise AI", "Safety Limiter", "Earbud EQ"],
    "description": "ClearHear Amplifier turns your Android phone and headphones into a high-performance personal sound amplifier and speech clarity enhancer. Powered by sub-20ms low-latency audio DSP (C++ Google Oboe) and on-device AI voice isolation."
  },
  {
    "id": "doculite",
    "name": "DocuLite: PDF Document Scanner",
    "tagline": "Fast pocket document scanner with smart edge detection and HD OCR text extraction.",
    "category": "Productivity",
    "categoryKey": "productivity",
    "featured": true,
    "rating": 4.8,
    "ratingCount": "2.8K",
    "downloads": "100K+",
    "packageId": "com.doculite.scanner",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.doculite.scanner",
    "privacyUrl": "privacy.html?app=doculite",
    "icon": "assets/icons/doculite.webp",
    "accentColor": "#10b981",
    "gradient": "from-emerald-500 to-teal-600",
    "tags": ["Auto-Edge Detection", "OCR Text Copy", "Digital Signature", "100% Offline"],
    "description": "Turn your smartphone camera into a sharp document scanner. Digitize contracts, receipts, identity cards, and notes with real-time auto-perspective correction, contrast filters, and offline OCR text extraction."
  },
  {
    "id": "image-to-pdf",
    "name": "Image to PDF - PDF Maker",
    "tagline": "Convert photos & images to clean, compressed, password-protected PDF files.",
    "category": "Productivity",
    "categoryKey": "productivity",
    "featured": false,
    "rating": 4.7,
    "ratingCount": "1.9K",
    "downloads": "50K+",
    "packageId": "com.smart.imagetopdf.pdfmaker",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.smart.imagetopdf.pdfmaker",
    "privacyUrl": "privacy.html?app=image-to-pdf",
    "icon": "assets/icons/imagetopdf.webp",
    "accentColor": "#8b5cf6",
    "gradient": "from-purple-500 to-indigo-600",
    "tags": ["Batch Convert", "PDF Compression", "Password Protect", "No Watermark"],
    "description": "Effortlessly convert JPG, PNG, and BMP images into compact PDF documents. Features batch drag-and-drop page ordering, file size compression presets, and password encryption."
  },
  {
    "id": "status-saver",
    "name": "Status Saver & Downloader",
    "tagline": "Save video & photo status updates with built-in HD media player & AI captions.",
    "category": "Media & Video",
    "categoryKey": "media",
    "featured": false,
    "rating": 4.7,
    "ratingCount": "4.2K",
    "downloads": "100K+",
    "packageId": "com.statussaver.downloader.free",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.statussaver.downloader.free",
    "privacyUrl": "privacy.html?app=status-saver",
    "icon": "assets/icons/statussaver.webp",
    "accentColor": "#10b981",
    "gradient": "from-emerald-500 to-green-600",
    "tags": ["One-Tap Download", "HD Player", "AI Caption Writer", "Direct Chat"],
    "description": "Download, save, and repost social media status videos and photos in crystal-clear original resolution. Includes offline viewing, built-in media gallery, and an AI-powered smart caption generator."
  },
  {
    "id": "volume-booster",
    "name": "Volume Booster -Bass Equalizer",
    "tagline": "Extra volume booster & 10-band bass equalizer for headphones and speaker.",
    "category": "Audio & Sound",
    "categoryKey": "audio",
    "featured": false,
    "rating": 4.7,
    "ratingCount": "3.1K",
    "downloads": "50K+",
    "packageId": "com.volumebooster.bassequalizer.sound",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.volumebooster.bassequalizer.sound",
    "privacyUrl": "privacy.html?app=volume-booster",
    "icon": "assets/icons/volumebooster.webp",
    "accentColor": "#f59e0b",
    "gradient": "from-amber-500 to-orange-600",
    "tags": ["200% Loudness Boost", "10-Band EQ", "Bass Boost Effect", "3D Virtualizer"],
    "description": "Supercharge your music and media playback with high-fidelity sound amplification. Boost system volume safely, dial in deep bass frequencies, and personalize audio with 15+ curated music presets."
  },
  {
    "id": "universal-remote",
    "name": "Universal Remote: Smart TV",
    "tagline": "All-in-one WiFi & IR remote control for Samsung, LG, Roku, Android TV & FireTV.",
    "category": "Utilities",
    "categoryKey": "utilities",
    "featured": false,
    "rating": 4.6,
    "ratingCount": "3.8K",
    "downloads": "100K+",
    "packageId": "com.smartlink.tvremote.universal",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.smartlink.tvremote.universal",
    "privacyUrl": "privacy.html?app=universal-remote",
    "icon": "assets/icons/remote.webp",
    "accentColor": "#06b6d4",
    "gradient": "from-cyan-500 to-teal-600",
    "tags": ["WiFi & IR Blaster", "Touch Trackpad", "Keyboard Input", "Fast Brand Pairing"],
    "description": "The only remote control you will ever need. Seamlessly pair over local Wi-Fi or phone IR transmitters to control power, channels, volume, streaming apps, and text search across major television brands."
  },
  {
    "id": "mirrorcast",
    "name": "MirrorCast: Cast to TV & Web",
    "tagline": "Screen mirror phone display and stream web videos to Smart TV & PC browsers.",
    "category": "Utilities",
    "categoryKey": "utilities",
    "featured": false,
    "rating": 4.6,
    "ratingCount": "2.1K",
    "downloads": "50K+",
    "packageId": "com.mirrorcast.casttotv.screenmirroring",
    "storeUrl": "https://play.google.com/store/apps/details?id=com.mirrorcast.casttotv.screenmirroring",
    "privacyUrl": "privacy.html?app=mirrorcast",
    "icon": "assets/icons/mirrorcast.webp",
    "accentColor": "#3b82f6",
    "gradient": "from-blue-500 to-indigo-600",
    "tags": ["Smart TV Screen Mirror", "Browser Web Cast", "Zero Lag Stream", "Chromecast / DLNA"],
    "description": "Stream movies, mirror games, and share photos in full HD on any connected TV or web browser. Works instantly with Chromecast, Fire Stick, Roku, DLNA, and modern smart TVs."
  }
];

let allApps = [];
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const appsGrid = document.getElementById('appsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalAppsBadge = document.getElementById('totalAppsCount');
const activeCategoryLabel = document.getElementById('activeCategoryLabel');

// Modal Elements
const appModal = document.getElementById('appModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalTagline = document.getElementById('modalTagline');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalRating = document.getElementById('modalRating');
const modalDownloads = document.getElementById('modalDownloads');
const modalPackageId = document.getElementById('modalPackageId');
const modalPlayLink = document.getElementById('modalPlayLink');
const modalPrivacyLink = document.getElementById('modalPrivacyLink');
const closeModalBtn = document.getElementById('closeModalBtn');
const copyPackageBtn = document.getElementById('copyPackageBtn');

// Load Data
async function loadApps() {
  try {
    const res = await fetch('data/apps.json');
    if (res.ok) {
      allApps = await res.json();
    } else {
      allApps = fallbackApps;
    }
  } catch (e) {
    console.warn('Using embedded fallback app data:', e);
    allApps = fallbackApps;
  }

  if (totalAppsBadge) {
    totalAppsBadge.textContent = `${allApps.length} Apps Published`;
  }

  renderApps();
}

// Render App Cards
function renderApps() {
  if (!appsGrid) return;

  const filtered = allApps.filter(app => {
    const matchesCategory = currentCategory === 'all' || app.categoryKey === currentCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      app.name.toLowerCase().includes(query) ||
      app.tagline.toLowerCase().includes(query) ||
      app.category.toLowerCase().includes(query) ||
      (app.tags && app.tags.some(t => t.toLowerCase().includes(query)));
    
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    appsGrid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/80 flex items-center justify-center text-slate-400">
          <i class="fa-solid fa-magnifying-glass text-2xl"></i>
        </div>
        <h3 class="text-lg font-bold text-white">No apps found</h3>
        <p class="text-sm text-slate-400 mt-1">Try adjusting your search query or filter</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-sky-500/20 text-sky-400 rounded-xl text-xs font-semibold hover:bg-sky-500/30 transition-colors">
          Reset Filters
        </button>
      </div>
    `;
    return;
  }

  appsGrid.innerHTML = filtered.map(app => `
    <article class="glass-card rounded-2xl p-6 flex flex-col justify-between group">
      <div>
        <!-- Top Card Header -->
        <div class="flex items-start justify-between gap-4 mb-4">
          <div class="relative">
            <img src="${app.icon}" alt="${app.name} icon" class="w-16 h-16 rounded-2xl shadow-lg border border-slate-700/60 object-cover group-hover:scale-105 transition-transform" onerror="this.src='assets/icons/logo.svg'">
            ${app.featured ? `
              <span class="absolute -top-2 -right-2 px-1.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-[10px] font-black text-white rounded-full uppercase tracking-wider shadow">
                ★ Top
              </span>
            ` : ''}
          </div>
          
          <div class="text-right">
            <div class="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md">
              <i class="fa-solid fa-star text-[10px]"></i>
              <span>${app.rating}</span>
            </div>
            <span class="block text-[11px] text-slate-400 mt-1">${app.downloads} installs</span>
          </div>
        </div>

        <!-- Title & Category -->
        <div class="mb-2">
          <span class="text-[11px] font-semibold uppercase tracking-wider text-sky-400 font-mono">${app.category}</span>
          <h3 class="text-lg font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-1 mt-0.5">${app.name}</h3>
        </div>

        <p class="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">${app.tagline}</p>

        <!-- Feature Pills -->
        <div class="flex flex-wrap gap-1.5 mb-6">
          ${(app.tags || []).slice(0, 3).map(tag => `
            <span class="px-2 py-0.5 rounded-md bg-slate-800/80 text-[10px] text-slate-300 border border-slate-700/40 font-medium">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 border-t border-slate-800/80 flex items-center gap-2">
        <a href="${app.storeUrl}" target="_blank" rel="noopener" class="play-store-btn flex-1 py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold text-white shadow-sm hover:text-sky-200">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a2.023 2.023 0 0 1-.22-.924V2.738c0-.342.08-.66.22-.924zm11.396 11.397l2.25 2.25-11.44 6.435 9.19-8.685zm0-2.422L5.815 2.104l11.44 6.435-2.25 2.25zm1.206 1.206l3.963 2.229c.833.468.833 1.233 0 1.701l-3.963 2.23-2.126-2.126 2.126-2.126z"/>
          </svg>
          <span>Get on Play Store</span>
        </a>

        <button onclick="openAppModal('${app.id}')" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="View Details">
          <i class="fa-solid fa-circle-info text-sm"></i>
        </button>

        <a href="${app.privacyUrl}" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="Privacy Policy">
          <i class="fa-solid fa-shield-halved text-sm"></i>
        </a>
      </div>
    </article>
  `).join('');
}

// Modal Handling
window.openAppModal = function(appId) {
  const app = allApps.find(a => a.id === appId);
  if (!app || !appModal) return;

  modalIcon.src = app.icon;
  modalIcon.onerror = () => { modalIcon.src = 'assets/icons/logo.svg'; };
  modalTitle.textContent = app.name;
  modalCategory.textContent = app.category;
  modalTagline.textContent = app.tagline;
  modalDescription.textContent = app.description;
  modalRating.textContent = `${app.rating} ★ (${app.ratingCount || '500+'} reviews)`;
  modalDownloads.textContent = `${app.downloads} Total Installs`;
  modalPackageId.textContent = app.packageId;
  modalPlayLink.href = app.storeUrl;
  modalPrivacyLink.href = app.privacyUrl;

  modalTags.innerHTML = (app.tags || []).map(t => `
    <span class="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-medium">
      ${t}
    </span>
  `).join('');

  appModal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

function closeModal() {
  if (!appModal) return;
  appModal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (appModal) {
  appModal.addEventListener('click', (e) => {
    if (e.target === appModal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && appModal && !appModal.classList.contains('hidden')) {
    closeModal();
  }
});

// Copy Package Name to Clipboard
if (copyPackageBtn) {
  copyPackageBtn.addEventListener('click', () => {
    const pkg = modalPackageId.textContent;
    navigator.clipboard.writeText(pkg).then(() => {
      const origHtml = copyPackageBtn.innerHTML;
      copyPackageBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i>';
      setTimeout(() => { copyPackageBtn.innerHTML = origHtml; }, 1800);
    });
  });
}

// Filter Buttons
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('bg-sky-500', 'text-white', 'shadow-md');
      b.classList.add('bg-slate-800', 'text-slate-300');
    });
    btn.classList.add('bg-sky-500', 'text-white', 'shadow-md');
    btn.classList.remove('bg-slate-800', 'text-slate-300');

    currentCategory = btn.dataset.category;
    if (activeCategoryLabel) {
      activeCategoryLabel.textContent = btn.textContent.trim();
    }
    renderApps();
  });
});

// Search Input
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderApps();
  });
}

window.resetFilters = function() {
  currentCategory = 'all';
  searchQuery = '';
  if (searchInput) searchInput.value = '';
  filterBtns.forEach(b => {
    if (b.dataset.category === 'all') {
      b.classList.add('bg-sky-500', 'text-white', 'shadow-md');
      b.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      b.classList.remove('bg-sky-500', 'text-white', 'shadow-md');
      b.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
  renderApps();
};

// Initialize
document.addEventListener('DOMContentLoaded', loadApps);
