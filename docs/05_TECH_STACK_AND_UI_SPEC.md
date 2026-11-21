# 05. CROSS BENCH — Tech Stack, UI Specifications & Complete Audit Matrix

> High-performance frontend engineering standards, design tokens, bilingual responsiveness rules, and 5-tier audit protocols.

---

## 1. Technical Architecture & Stack Selection

- **Core Framework:** React 18 + Vite (or Next.js Static Optimization) for lightning-fast sub-second loading.
- **Styling Engine:** Tailwind CSS with custom design tokens for corporate-political dignity.
- **Typography:**
  - *Serif Display:* Playfair Display / Cinzel (for parliamentary elegance).
  - *Latin Body:* Inter / Plus Jakarta Sans.
  - *Devanagari Body:* Noto Sans Devanagari.
- **Iconography:** Lucide Icons (clean, modern, minimalist vector strokes).
- **Internationalization (i18n):** Client-side instant state switcher with Zero Layout Shift (CLS = 0).

---

## 2. Color Palette & Design Tokens

```css
:root {
  --color-navy-dark: #0A1120;     /* Deep Parliament Navy */
  --color-navy-surface: #0F1E36;  /* Card Background & Elevated Surfaces */
  --color-slate-charcoal: #1E293B;/* Secondary Surfaces & Borders */
  --color-gold-accent: #C5A880;   /* Prestige Bronze / Warm Gold Accent */
  --color-gold-hover: #D4BC9B;
  --color-text-primary: #F8FAFC;  /* Crisp Off-White */
  --color-text-muted: #94A3B8;    /* Slate Muted Subtext */
  --color-border: #334155;        /* Subtle divider borders */
}
```

---

## 3. The 5-Tier Production Audit Matrix

### Audit 1: Bilingual SEO & Semantic Metadata Audit
- Distinct `title`, `meta description`, and `keywords` for both English (`en`) and Hindi (`hi`).
- `hreflang` alternating tags (`hreflang="en"` and `hreflang="hi"`).
- Structured JSON-LD Schema:
  - `Organization` (`name`: "CROSS BENCH", `url`: "https://crossbench.in")
  - `ProfessionalService` (specifying Political Consulting and Public Policy services)
- Canonical tags on all routes, clean semantic headings (`h1` -> `h2` -> `h3`).
- Valid `sitemap.xml` and `robots.txt`.

### Audit 2: Confidentiality & Security Audit
- Content Security Policy (CSP) headers enabled.
- All form inputs sanitized to prevent XSS, HTML injection, and CSRF attacks.
- Strict client confidentiality: zero 3rd-party ad trackers, zero invasive behavioral telemetry.
- Secure email/API routing for sensitive intake data.

### Audit 3: Performance & Core Web Vitals Audit
- **Target:** Google Lighthouse 95+ across Mobile and Desktop.
- **First Contentful Paint (FCP):** < 1.2s.
- **Largest Contentful Paint (LCP):** < 2.0s.
- **Cumulative Layout Shift (CLS):** 0.00 (Crucial when toggling between Hindi and English text).
- Responsive asset optimization, SVG vector icons, and tree-shaken JS bundles.

### Audit 4: Mobile Usability & Accessibility (WCAG 2.1 AA)
- Minimum touch-target size: 48px × 48px for all mobile action buttons and toggles.
- High color contrast ratio (minimum 4.5:1 for body copy against dark surfaces).
- Full keyboard navigation support and ARIA labels on all modal/drawer toggles.
- Fluid Devanagari text rendering with calibrated line-heights (`leading-relaxed` / 1.7) for maximum readability.

### Audit 5: Cross-Browser & Viewport Responsiveness Audit
- Verified across:
  - Mobile: 360px (compact Android), 390px/430px (iPhone 14/15/16).
  - Tablet: 768px (iPad Mini), 820px (iPad Air).
  - Desktop: 1280px, 1440px, and 1920px (Full HD).
- Cross-browser engine parity: Chromium (Chrome, Edge, Brave), WebKit (Safari iOS/macOS), Gecko (Firefox).
