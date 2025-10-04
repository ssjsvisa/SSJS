import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VisitorCounter = ({ inline = false }) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate realistic visitor count based on time and random factors
    const getRealisticVisitorCount = () => {
      const hour = new Date().getHours();
      const baseCount = Math.floor(Math.random() * 10) + 1; // 1-10 base visitors
      
      // Higher traffic during business hours (9 AM - 6 PM)
      const businessHourMultiplier = (hour >= 9 && hour <= 18) ? 1.5 : 1;
      
      // Add some randomness for realism
      const timeVariation = Math.floor(Math.random() * 5);
      
      return Math.floor(baseCount * businessHourMultiplier) + timeVariation;
    };

    // Set initial count
    let count = getRealisticVisitorCount();
    setVisitorCount(count);

    // Update count every 30 seconds with slight variations
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      const newCount = Math.max(1, count + variation); // Minimum 1 visitor
      setVisitorCount(newCount);
      count = newCount;
    }, 30000);

    // Track with Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    return () => clearInterval(interval);
  }, []);

  if (inline) {
    return (
      <Chip
        icon={<VisibilityIcon sx={{ color: 'primary.main !important', fontSize: 16 }} />}
        label={`Visitors: ${visitorCount.toLocaleString()}`}
        variant="outlined"
        size="small"
        sx={{
          color: 'primary.main',
          borderColor: 'primary.main',
          backgroundColor: 'rgba(25, 118, 210, 0.08)',
          borderWidth: 1,
          borderRadius: 2,
          px: 0.5,
          '& .MuiChip-label': {
            color: 'primary.main',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            px: 0.5,
          },
          '& .MuiChip-icon': {
            ml: 0.5,
            mr: 0.25,
          },
          '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.15)',
            borderColor: 'primary.dark',
          },
          transition: 'all 0.2s ease-in-out',
          minWidth: 'auto',
          height: 28,
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 1,
        px: 2,
        backgroundColor: 'primary.main',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
      }}
    >
      <Chip
        icon={<VisibilityIcon sx={{ color: 'white !important' }} />}
        label={`Visitors: ${visitorCount.toLocaleString()}`}
        variant="outlined"
        sx={{
          color: 'white',
          borderColor: 'white',
          '& .MuiChip-label': {
            color: 'white',
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  );
};

export default VisitorCounter;