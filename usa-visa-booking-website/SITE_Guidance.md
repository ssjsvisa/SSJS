# SSJS Visa Services - Site Technical & Feature Report

## 1. Site Overview
- **Project Name:** usa-visa-booking-website
- **Homepage:** https://ssjsus.web.app
- **Type:** React SPA (Single Page Application)
- **Languages Supported:** Multilingual (English, Hindi, Tamil, Telugu, Gujarati, Punjabi, Malayalam)
- **SEO:** Advanced meta tags, Open Graph, Twitter, alternate language links, JSON-LD structured data

---

## 2. Technical Stack

### Main Packages (`package.json`)
- **React**: ^19.1.1
- **React Router**: ^7.9.1 (routing between pages)
- **Material UI (MUI)**: ^7.3.2 (UI components)
- **Formik & Yup**: Form validation
- **i18next & react-i18next**: Internationalization
- **Axios**: HTTP requests
- **EmailJS**: Email sending from browser
- **React GA4**: Google Analytics integration
- **Testing**: @testing-library/react, jest-dom, user-event
- **Web Vitals**: Performance monitoring

### Scripts
- `npm start`: Start development server
- `npm run build`: Build production bundle
- `npm run deploy:dual`: Deploy to both GitHub Pages and Firebase
- `npm run test`: Run tests

---

## 3. Features by Page (`src/pages`)

### HomePage.js
- Hero section, welcome message, service highlights
- CTA for visa services
- SEO content and statistics

### AboutPage.js
- Company info, mission, testimonials, team highlights

### ContactPage.js
- Contact form (Formik validation, auto-focus, email support)
- Business hours, contact info

### FAQPage.js
- 50+ essential US visa questions (latest 2025 updates)
- Multilingual support
- Chip linking to contact form

### ReviewsPage.js
- User reviews and testimonials

### VisaServicesPage.js
- Details for B1/B2, F1, H1B, L1, and other visa types
- Tabs for each visa category
- Document requirements, eligibility, process steps

### AnalyticsDashboard.js
- Visitor tracking, analytics, Facebook evidence prompt

---

## 4. Powershell Execution Steps (with comments)

```powershell
# 1. Install dependencies
npm install # Installs all required packages

# 2. Start development server
npm start # Runs the app locally for development

# 3. Build production bundle
npm run build # Creates optimized production build

# 4. Deploy to both GitHub Pages and Firebase
npm run deploy:dual # Deploys to both platforms

# 5. Run tests
npm test # Executes all test suites

# 6. View build output
explorer .\build # Opens build folder in Windows Explorer

# 7. Check package details
cat .\package.json # Displays package info in terminal

# 8. View meta tags (open index.html)
notepad .\public\index.html # Opens meta details for review
```

---

## 5. Overall Summary

- The site is a modern React SPA for US visa consultancy, supporting multiple languages and advanced SEO.
- It uses Material UI for a professional look, Formik/Yup for robust forms, and i18next for translations.
- Each page is focused on a specific user need: information, contact, reviews, analytics, and visa services.
- Deployment is automated for both Firebase and GitHub Pages.
- SEO is strong, with comprehensive meta tags, Open Graph, Twitter, and structured data.
- Powershell commands above cover all major technical operations for development, build, deployment, and review.

If you need a more detailed breakdown for any page or want to automate more steps, let me know!
