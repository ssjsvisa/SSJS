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
            <Route path="/Contactus" element={<ContactPage />} />
          </Routes>
        </Layout>
        
        {/* Location-based language detection is now handled automatically
             and silently through the i18n language detector */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
