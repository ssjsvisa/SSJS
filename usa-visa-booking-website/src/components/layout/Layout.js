import React from 'react';
import ScrollToTopButton from '../ui/ScrollToTopButton';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        {children}
      </Box>
  <Footer />
  <ScrollToTopButton />
    </Box>
  );
};

export default Layout;