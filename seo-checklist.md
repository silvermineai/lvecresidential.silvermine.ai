# Technical Architecture & Performance

### **Critical CSS Implementation**
- Inline above-the-fold styles  
- System font fallbacks  
- **`<link rel="preload" as="style">` swap technique**  
- **Performance budget ≤ 14 kB initial CSS**  

### **JavaScript Optimization**
- Deferred loading  
- Minification  
- Event optimization  
- **Route-level code-splitting**  
- **Tree-shaking audit (unused bytes)**  

### **Image Optimization**
- Preloading  
- Responsive considerations  
- SVG usage  
- **Next-gen formats (AVIF / WebP)**  
- **Lazy-load + `decoding="async"`**  
- **`srcset` & `sizes` attributes**  

### **Font Loading Strategy**
- Async loading  
- Progressive enhancement  
- Fallbacks  
- **`font-display: swap`**  
- **Subset & `preconnect` to font host**  

### **NextJS Configuration**
- Build optimizations  
- Compression  
- Prefetch strategy  
- **ISR / on-demand revalidation**  
- **Lighthouse CI in GitHub Actions**  

### **Resource Hints**
- DNS prefetch  
- Preload directives  
- Connection optimization  
- **Early Hints (HTTP 103) where supported**  

### **Core Web Vitals & Performance Budgets**
- Target **LCP < 2.5 s, CLS < 0.1, INP < 200 ms**  
- Lighthouse & Web-Vitals CI audits  
- Performance budgets enforced in build  

### **Canonicalization & Duplicate Control**
- Canonical tags site-wide  
- Trailing-slash & lowercase URL consistency  
- Parameter handling rules  

### **HTTPS & Security**
- TLS 1.3, HSTS preload  
- Mixed-content scan in CI  
- `security.txt` & contact schema  

### **404 & Redirect Strategy**
- Custom helpful 404 page  
- Remove 3xx chains (> 1 hop)  
- 301 for permanent moves, 302 for tests  

### **Paginated & Faceted Navigation**
- `rel="next"` / `prev` (or equivalent JS logic)  
- `noindex` thin or duplicate facet pages  

### **Log-File & Crawl Budget Analysis**
- Monthly log ingestion to BigQuery  
- Detect orphan or over-crawled pages  
- Block low-value assets via robots.txt  


# On-Page Content & UX

### **Service-Specific Landing Pages**
- Created individual pages for each service offering  
- **Unique copy & FAQs per service**  
- **Canonical tags** to avoid duplication  
- **Service schema** (`serviceType`, `provider`) on each page  

### **Location-Specific Landing Pages**
- Built city/area pages  
- Dynamic routing  
- **City-level keywords & landmarks woven into content**  
- **LocalBusiness schema** with `areaServed`  
- **Driving-direction FAQ** for mobile users  

### **Special Campaign Pages**
- Specific targeted pages  
- **UTM-tagged CTAs** for granular analytics  
- **Scheduled de-index / redirect** post-campaign  

### **Local Content Optimization**
- City-specific content  
- Service areas  
- Emergency emphasis  
- **Embed Google Map & driving-direction schema**  
- **Locally relevant images named with geo keywords**  

### **Navigation & Internal Linking**
- Breadcrumbs  
- Related services  
- Cross-linking  
- **Silo structure: services → cities → blog posts**  
- **Avoid orphan pages (monthly crawl check)**  

### **Mobile Optimization**
- Responsive design  
- Mobile-first CSS  
- Touch-friendly UI  
- **Tap-target spacing audit**  
- **INP < 200 ms goal**  

### **User Experience Enhancements**
- CTAs  
- FAQ sections  
- Service badges  
- Feature lists  
- **Core Web Vitals monitoring banner in CI**  
- **A/B test high-impact CTAs**  

### **Semantic HTML Structure**
- Proper heading hierarchy  
- ARIA labels  
- Landmarks  
- **Skip-to-content link**  
- **`role` & `aria-label` for interactive widgets**  

### **E-E-A-T Signals**
- Author bios with credentials  
- Cite authoritative sources  
- Review schema on testimonials  

### **Content Freshness Program**
- Quarterly content update cadence  
- `lastmod` in sitemaps  
- Auto-remind owners 30 days pre-review  


# Structured Data, Metadata & Indexing

### **Schema Markup (Structured Data)**
- LocalBusiness  
- Service  
- FAQPage  
- BreadcrumbList schemas  
- **Review & Rating (where allowed)**  
- **`lastReviewed` / `lastModified` dates** for freshness  

### **Meta Tags & Head Optimization**
- Dynamic titles  
- Descriptions  
- OG tags  
- Twitter cards  
- **Robots meta (`max-image-preview:large`)**  
- **Viewport & canonical tags**  
- **`hreflang`** (if multi-region)  

### **XML Sitemap Configuration**
- Auto-generation with priorities  
- `changefreq` settings  
- **Image & video sitemaps**  
- **Nightly diff check with alerts**  

### **Robots.txt Optimization**
- Crawler directives  
- AI bot access  
- Sitemap location  
- **Crawl-delay & resource caps for LLM bots**  
- **Block low-value query parameters**  

### **LLMs.txt Implementation**
- Comprehensive AI knowledge base file  
- **Specify crawl-delay & max-tokens per visit**  
- **Monitor access logs for over-crawling**  

### **AI Bot Access in Robots.txt**
- Allowed GPTBot  
- Claude  
- ChatGPT  
- Perplexity access  
- **Disallow model training on private assets**  


# Local & Authority Signals

### **Business Information Display**
- Consistent NAP  
- 24/7 messaging  
- Certifications  
- **Schema: `priceRange`, `openingHoursSpecification`**  
- **Clickable phone & SMS links**  

### **Local SEO Off-Site Signals**
- Google Business Profile full build-out  
- Structured citation acquisition  
- Review generation & response SOP  

### **Backlink & Digital PR Plan**
- Authority gap analysis vs. competitors  
- Outreach calendar & asset map  
- Track new links weekly  


# Analytics & Monitoring

### **Google Analytics Setup**
- GA4 implementation  
- Phone tracking  
- Events  
- **Server-side tagging & Consent-Mode v2**  
- **Looker Studio dashboards for CWV & conversions**  

### **Measurement & Maintenance Cadence**
- Weekly CWV & rank tracking  
- Nightly sitemap diff alerts  
- Weekly broken-link & 404 scan  
- Monthly schema validation run
