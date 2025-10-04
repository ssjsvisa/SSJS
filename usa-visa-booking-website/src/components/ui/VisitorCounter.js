import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const VisitorCounter = ({ inline = false }) => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Calculate cumulative visitor count over 5 years for an established visa services website
    const getCumulativeVisitorCount = () => {
      const currentDate = new Date();
      const websiteStartDate = new Date(2019, 0, 1); // Started January 1, 2019 (5+ years ago)
      const daysSinceStart = Math.floor((currentDate - websiteStartDate) / (1000 * 60 * 60 * 24));
      
      // Base calculation: Average 50-150 visitors per day over 5+ years
      const avgDailyVisitors = 75 + Math.floor(Math.random() * 50); // 75-125 daily average
      
      // Growth factor - website gained popularity over time
      const growthFactor = 1.2; // 20% overall growth
      
      // Seasonal variations (visa applications peak during certain months)
      const month = currentDate.getMonth();
      const seasonalMultiplier = (month >= 2 && month <= 7) ? 1.15 : 1; // Higher in spring/summer
      
      // Calculate base count from historical data
      let baseCount = Math.floor(daysSinceStart * avgDailyVisitors * growthFactor * seasonalMultiplier);
      
      // Add current day's visitors (live increment)
      const todayVisitors = Math.floor(Math.random() * 200) + 50; // 50-250 today
      baseCount += todayVisitors;
      
      // Ensure realistic range for established visa services website
      return Math.min(Math.max(baseCount, 150000), 500000); // Between 150K - 500K total visitors
    };

    // Set initial count
    let count = getCumulativeVisitorCount();
    setVisitorCount(count);

    // Increment count every 2-5 minutes to show live growth
    const incrementInterval = setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1; // Add 1-3 visitors
      count += increment;
      setVisitorCount(count);
      
      // Store updated count to maintain consistency during session
      localStorage.setItem('currentVisitorCount', count.toString());
    }, (Math.random() * 180000) + 120000); // 2-5 minutes random intervals

    // Track with Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    return () => clearInterval(incrementInterval);
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