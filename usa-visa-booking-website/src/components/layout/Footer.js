import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, useTheme, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FlagIcon from '../ui/FlagIcon';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f5f5f5',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              SSJS Visa Services
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Professional USA visa application services, helping clients navigate the complex 
              visa process with ease and confidence.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link component={RouterLink} to="/About" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link component={RouterLink} to="/Services" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              Visa Services
            </Link>
            <Link component={RouterLink} to="/Contactus" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              Contact Us
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              Visa Types
            </Typography>
            <Link component={RouterLink} to="/Services#b1b2" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              B1/B2 Tourist & Business
            </Link>
            <Link component={RouterLink} to="/Services#f1" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              F1 Student
            </Link>
            <Link component={RouterLink} to="/Services#h1b" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              H1B Work
            </Link>
            <Link component={RouterLink} to="/Services#l1" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              L1 Intra-company Transfer
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Phone: +91 93616 96954
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Email: sssj.b1b285@gmail.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton size="small" color="primary" aria-label="facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="linkedin">
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" color="primary" aria-label="instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <FlagIcon country="both" height={30} sx={{ mx: 2 }} />
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} SSJS Visa Services. All rights reserved.
            </Typography>
            <Typography variant="body2" color="primary.main" fontWeight="medium">
              India-USA Visa Experts
            </Typography>
          </Stack>
          <Box>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;