import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FlagIcon from './FlagIcon';

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText, 
  buttonLink,
  height = '70vh', 
  overlay = true 
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        '&::before': overlay ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 0h20v20H0V0zm2 2h16v16H2V2z\'/%3E%3C/g%3E%3C/svg%3E")',
        } : {},
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Stack 
          direction="row" 
          spacing={1.5} 
          justifyContent="center" 
          alignItems="center"
          sx={{ mb: 2.5 }}
        >
          <FlagIcon country="india" height={30} />
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 0,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
              letterSpacing: '0.5px'
            }}
          >
            {title}
          </Typography>
          <FlagIcon country="us" height={30} />
        </Stack>
        
        <Typography 
          variant="h5" 
          component="p"
          sx={{ 
            mb: 5, 
            maxWidth: '800px', 
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
            fontWeight: 400,
            letterSpacing: '0.3px'
          }}
        >
          {subtitle}
        </Typography>
        
        {buttonText && (
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={RouterLink}
            to={buttonLink || '#'}
            sx={{ 
              fontWeight: 600, 
              px: 5, 
              py: 1.2, 
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {buttonText}
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default Hero;