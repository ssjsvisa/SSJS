import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoPageTitles, seoMetaDescriptions } from '../../utils/seoKeywords';

// SEO Component to dynamically update page titles and meta descriptions
const SEOHelmet = ({ title, description, keywords, canonical }) => {
  const location = useLocation();

  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    // Update Open Graph tags
    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
    }

    if (description) {
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }

    if (canonical) {
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonical);
      }
    }

  }, [title, description, keywords, canonical, location]);

  return null; // This component doesn't render anything
};

// Hook to get SEO data for current page
export const useSEO = (pageName) => {
  const getPageSEO = () => {
    const baseUrl = 'https://ssjsus.web.app/SSJS';
    
    switch (pageName) {
      case 'home':
        return {
          title: seoPageTitles.home,
          description: seoMetaDescriptions.home,
          keywords: 'USA visa services, US visa consultancy India, America visa guidance, B1 B2 tourist visa, F1 student visa, H1B work visa, L1 business visa, US visa application help',
          canonical: `${baseUrl}/`
        };
      case 'about':
        return {
          title: seoPageTitles.about,
          description: seoMetaDescriptions.about,
          keywords: 'USA visa consultancy India, US visa experts, America visa services, visa consultation team, USA visa success rate',
          canonical: `${baseUrl}/About`
        };
      case 'services':
        return {
          title: seoPageTitles.services,
          description: seoMetaDescriptions.services,
          keywords: 'USA visa services, B1 B2 tourist visa India, F1 student visa consultancy, H1B work visa guidance, L1 business visa, US visa document preparation, visa interview coaching',
          canonical: `${baseUrl}/Services`
        };
      case 'contact':
        return {
          title: seoPageTitles.contact,
          description: seoMetaDescriptions.contact,
          keywords: 'USA visa consultancy contact, US visa services appointment, America visa consultation booking, visa services India contact',
          canonical: `${baseUrl}/Contactus`
        };
      default:
        return {
          title: 'SSJS Visa Services - USA Visa Consultancy India',
          description: 'Expert USA visa services in India for all visa types.',
          keywords: 'USA visa services, US visa consultancy India',
          canonical: `${baseUrl}/`
        };
    }
  };

  return getPageSEO();
};

export default SEOHelmet;