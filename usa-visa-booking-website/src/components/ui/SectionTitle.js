import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const SectionTitle = ({ title, subtitle, centered = false, color = 'primary', sx = {} }) => {
  return (
    <Box sx={{ mb: 6, textAlign: centered ? 'center' : 'left' }}>
      <Typography 
        variant="h2" 
        component="h2" 
        color={`${color}.main`}
        gutterBottom
        sx={{ 
          fontWeight: 700,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '60px',
            height: '4px',
            backgroundColor: 'secondary.main',
            bottom: '-8px',
            left: centered ? '50%' : 0,
            transform: centered ? 'translateX(-50%)' : 'none',
          },
          ...sx['& .MuiTypography-h2']
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="h6" 
          component="p" 
          color="text.secondary"
          sx={{ 
            mt: 2,
            maxWidth: centered ? '800px' : '100%',
            mx: centered ? 'auto' : 0,
            ...sx['& .MuiTypography-body1']
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;