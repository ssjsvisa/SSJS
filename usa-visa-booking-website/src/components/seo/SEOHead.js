import { useEffect } from 'react';

export const useSEO = ({ 
  title = 'SSJS Visa Services - Your Journey to America Starts Here',
  description = 'Expert USA visa consultancy services for B1/B2, F1, H1B, and L1 visas. Professional guidance with multilingual support from India to America.',
  keywords = 'USA visa, US visa services, B1 B2 visa, F1 student visa, H1B work visa, L1 visa, visa consultancy India, America visa, tourist visa, business visa, student visa, work visa, visa application, visa guidance',
  url = 'https://ssjsus.web.app',
  image = 'https://ssjsus.web.app/static/media/hero-image.jpg'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMeta = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Primary meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMeta('googlebot', 'index, follow');
    updateMeta('bingbot', 'index, follow');
    
    // Open Graph tags
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', url, true);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:site_name', 'SSJS Visa Services', true);
    
    // Twitter tags
    updateMeta('twitter:card', 'summary_large_image', true);
    updateMeta('twitter:url', url, true);
    updateMeta('twitter:title', title, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:image', image, true);
    
    // Geo location
    updateMeta('geo.region', 'IN-TN');
    updateMeta('geo.country', 'India');
    updateMeta('geo.placename', 'Chennai, Tamil Nadu');
    updateMeta('geo.position', '13.0827;80.2707');
    updateMeta('ICBM', '13.0827, 80.2707');
    
  }, [title, description, keywords, url, image]);
};

export default useSEO;