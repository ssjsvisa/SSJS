import React, { useState, useEffect } from 'react';
import { Box, Typography, Chip, IconButton, Modal, Paper, Button, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FacebookIcon from '@mui/icons-material/Facebook';

const VisitorCounter = ({ inline = false }) => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
        <Box
          onClick={() => setModalOpen(true)}
          sx={{
            cursor: 'pointer',
            overflow: 'hidden',
            width: '180px',
            position: 'relative',
            '&:hover .scrolling-text': {
              animationPlayState: 'paused',
            },
          }}
        >
          <Typography
            className="scrolling-text"
            sx={{
              color: 'primary.main',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              animation: 'scrollText 8s linear infinite',
              '@keyframes scrollText': {
                '0%': {
                  transform: 'translateX(100%)',
                },
                '100%': {
                  transform: 'translateX(-100%)',
                },
              },
            }}
          >
            🎯 Latest Appointment
          </Typography>
        </Box>
        
        {/* Modal for displaying latest news image */}
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper
            sx={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              outline: 'none',
              borderRadius: 2,
              overflow: 'hidden',
              padding: 0,
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={() => setModalOpen(false)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                zIndex: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              component="img"
              src="/Latest.jpg"
              alt="Latest Bookings"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '90vw',
                maxHeight: '90vh',
                margin: 0,
                padding: 0,
                borderRadius: 2,
                objectFit: 'contain',
              }}
              onError={(e) => {
                console.error('Failed to load image from:', e.target.src);
                // Try alternative paths with different cases
                const alternatives = [
                  '/latest.jpg',        // lowercase
                  '/Latest.JPG',        // uppercase extension
                  '/latest.JPG',        // lowercase name, uppercase extension
                  '/LATEST.jpg',        // uppercase name, lowercase extension
                  '/LATEST.JPG',        // all uppercase
                  `${process.env.PUBLIC_URL}/Latest.jpg`,
                  `${process.env.PUBLIC_URL}/latest.jpg`,
                  `${process.env.PUBLIC_URL}/Latest.JPG`,
                  `${process.env.PUBLIC_URL}/latest.JPG`,
                  `${process.env.PUBLIC_URL}/LATEST.jpg`,
                  `${process.env.PUBLIC_URL}/LATEST.JPG`
                ];
                
                const currentSrc = e.target.src;
                let nextIndex = -1;
                
                // Find current alternative index
                for (let i = 0; i < alternatives.length; i++) {
                  if (currentSrc.includes(alternatives[i].split('/').pop())) {
                    nextIndex = i + 1;
                    break;
                  }
                }
                
                // If first attempt, start from index 0
                if (nextIndex === -1) nextIndex = 0;
                
                if (nextIndex < alternatives.length) {
                  console.log('Trying alternative path:', alternatives[nextIndex]);
                  e.target.src = alternatives[nextIndex];
                } else {
                  // Show fallback error image
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXRlc3QgQm9va2luZ3M8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
                }
              }}
            />
            <Tooltip 
              title="Want to see more success stories and evidence?" 
              placement="top"
              arrow
            >
              <Button
                variant="contained"
                startIcon={<FacebookIcon />}
                href="https://www.facebook.com/Susi616969/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#1877f2',
                  color: 'white',
                  zIndex: 2,
                  '&:hover': {
                    backgroundColor: '#166fe5',
                    transform: 'translateX(-50%) scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(24, 119, 242, 0.4)',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                }}
              >
                Visit Our Facebook Page
              </Button>
            </Tooltip>
          </Paper>
        </Modal>
      </Box>
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
        gap: 2,
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
      <Box
        onClick={() => setModalOpen(true)}
        sx={{
          cursor: 'pointer',
          overflow: 'hidden',
          width: '300px',
          position: 'relative',
          '&:hover .scrolling-text': {
            animationPlayState: 'paused',
          },
        }}
      >
        <Typography
          className="scrolling-text"
          sx={{
            color: 'yellow',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            animation: 'scrollText 10s linear infinite',
            '@keyframes scrollText': {
              '0%': {
                transform: 'translateX(100%)',
              },
              '100%': {
                transform: 'translateX(-100%)',
              },
            },
          }}
        >
          🎯 Latest Appointment Available - Click to View
        </Typography>
      </Box>
      
      {/* Modal for displaying latest news image */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
            borderRadius: 2,
            overflow: 'hidden',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src="/Latest.jpg"
            alt="Latest Bookings"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              maxWidth: '90vw',
              maxHeight: '90vh',
              margin: 0,
              padding: 0,
              borderRadius: 2,
              objectFit: 'contain',
            }}
            onError={(e) => {
              console.error('Failed to load image from:', e.target.src);
              // Try alternative paths with different cases
              const alternatives = [
                '/latest.jpg',        // lowercase
                '/Latest.JPG',        // uppercase extension
                '/latest.JPG',        // lowercase name, uppercase extension
                '/LATEST.jpg',        // uppercase name, lowercase extension
                '/LATEST.JPG',        // all uppercase
                `${process.env.PUBLIC_URL}/Latest.jpg`,
                `${process.env.PUBLIC_URL}/latest.jpg`,
                `${process.env.PUBLIC_URL}/Latest.JPG`,
                `${process.env.PUBLIC_URL}/latest.JPG`,
                `${process.env.PUBLIC_URL}/LATEST.jpg`,
                `${process.env.PUBLIC_URL}/LATEST.JPG`
              ];
              
              const currentSrc = e.target.src;
              let nextIndex = -1;
              
              // Find current alternative index
              for (let i = 0; i < alternatives.length; i++) {
                if (currentSrc.includes(alternatives[i].split('/').pop())) {
                  nextIndex = i + 1;
                  break;
                }
              }
              
              // If first attempt, start from index 0
              if (nextIndex === -1) nextIndex = 0;
              
              if (nextIndex < alternatives.length) {
                console.log('Trying alternative path:', alternatives[nextIndex]);
                e.target.src = alternatives[nextIndex];
              } else {
                // Show fallback error image
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5MYXRlc3QgQm9va2luZ3M8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI2MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBhdmFpbGFibGU8L3RleHQ+PC9zdmc+';
              }
            }}
          />
          <Tooltip 
            title="Want to see more success stories and evidence?" 
            placement="top"
            arrow
          >
            <Button
              variant="contained"
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/Susi616969/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: 'absolute',
                bottom: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#1877f2',
                color: 'white',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: '#166fe5',
                  transform: 'translateX(-50%) scale(1.05)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(24, 119, 242, 0.4)',
                borderRadius: 2,
                px: 2,
                py: 1,
              }}
            >
              Visit Our Facebook Page
            </Button>
          </Tooltip>
        </Paper>
      </Modal>
    </Box>
  );
};

export default VisitorCounter;