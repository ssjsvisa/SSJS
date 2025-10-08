import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import './App.css';

// Analytics
import { AnalyticsInitializer } from './utils/analytics';

// Layout
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisaServicesPage from './pages/VisaServicesPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';

function App() {

  // Set basename dynamically based on homepage URL
  const getBasename = () => {
    // For local development, no basename needed
    if (process.env.NODE_ENV === 'development') {
      return '';
    }
    
    // For production, check if homepage contains a path
    const homepage = process.env.PUBLIC_URL || '';
    if (homepage.includes('github.io')) {
      return '/SSJS'; // GitHub Pages needs the repo name
    }
    
    return ''; // Firebase and other hosts don't need basename
  };

  useEffect(() => {
    // Location-based language detection is now handled automatically
    // and silently through the i18n language detector if permissions are already granted.
    // No need to show intrusive location permission dialogs.
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={getBasename()}>
        <AnalyticsInitializer />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Services" element={<VisaServicesPage />} />
            <Route path="/Reviews" element={<ReviewsPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/Contactus" element={<ContactPage />} />
            <Route path="/SSJS" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        {/* Floating Social Sharing Buttons */}
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '24px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#4267B2',
              color: 'white',
              borderRadius: '24px',
              minWidth: '140px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              fontSize: '22px',
               padding: '0 8px',
              gap: '10px',
            }}
            aria-label="Share on Facebook"
          >
            <span role="img" aria-label="Facebook">📘</span>
            <span style={{fontSize: '16px', fontWeight: 500}}>Facebook</span>
          </a>
          {/* Twitter */}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20US%20Visa%20Consultancy%20site!`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#1DA1F2',
              color: 'white',
              borderRadius: '24px',
              minWidth: '140px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              fontSize: '22px',
               padding: '0 8px',
              gap: '10px',
            }}
            aria-label="Share on Twitter"
          >
            <span role="img" aria-label="Twitter">🐦</span>
            <span style={{fontSize: '16px', fontWeight: 500}}>Twitter</span>
          </a>
          {/* LinkedIn */}
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=US%20Visa%20Consultancy`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#0077B5',
              color: 'white',
              borderRadius: '24px',
              minWidth: '140px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              textDecoration: 'none',
              fontSize: '22px',
               padding: '0 8px',
              gap: '10px',
            }}
            aria-label="Share on LinkedIn"
          >
            <span role="img" aria-label="LinkedIn">💼</span>
            <span style={{fontSize: '16px', fontWeight: 500}}>LinkedIn</span>
          </a>
        </div>
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919361696954"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            background: '#25D366',
            color: 'white',
            borderRadius: '24px',
            minWidth: '140px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            textDecoration: 'none',
            fontSize: '32px',
            padding: '4px 8px',
            gap: '10px',
          }}
          aria-label="Chat on WhatsApp"
        >
          <span role="img" aria-label="WhatsApp">💬</span>
          <span style={{fontSize: '18px', fontWeight: 500}}>WhatsApp</span>
        </a>
      </Router>
    </ThemeProvider>
  );
}

export default App;
