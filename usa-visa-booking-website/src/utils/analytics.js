// Google Analytics configuration
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX'}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX');
    
    console.log('Google Analytics initialized');
  }
};

// Hook to track page views
export const useAnalyticsPageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      });
      
      console.log(`Page view tracked: ${location.pathname}`);
    }
  }, [location]);
};

// Function to track specific events
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
    console.log(`Event tracked: ${eventName}`, eventParams);
  }
};

// Export a component that initializes analytics
export const AnalyticsInitializer = () => {
  useEffect(() => {
    initializeAnalytics();
  }, []);
  
  useAnalyticsPageTracker();
  
  return null; // This component doesn't render anything
};