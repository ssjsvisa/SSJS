import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VisitorCounter = ({ inline = false }) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage or start at 0
    let count = parseInt(localStorage.getItem('visitorCount') || '0', 10);
    
    // Check if this is a new session
    const hasVisitedToday = localStorage.getItem('visitedToday');
    const today = new Date().toDateString();
    
    if (!hasVisitedToday || hasVisitedToday !== today) {
      // New visitor for today
      count += 1;
      localStorage.setItem('visitorCount', count.toString());
      localStorage.setItem('visitedToday', today);
    }
    
    setVisitorCount(count);

    // Optional: Track with Google Analytics if you have it set up
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
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