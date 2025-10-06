import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, useTheme, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FlagIcon from '../ui/FlagIcon';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#f5f5f5',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              {t('footer.companyName')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('footer.description')}
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              {t('footer.quickLinks')}
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('nav.home')}
            </Link>
            <Link component={RouterLink} to="/About" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('nav.about')}
            </Link>
            <Link component={RouterLink} to="/Services" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('nav.services')}
            </Link>
            <Link component={RouterLink} to="/Contactus" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('nav.contact')}
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              {t('footer.visaTypes')}
            </Typography>
            <Link component={RouterLink} to="/Services#b1b2" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('footer.visaLinks.b1b2')}
            </Link>
            <Link component={RouterLink} to="/Services#f1" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('footer.visaLinks.f1')}
            </Link>
            <Link component={RouterLink} to="/Services#h1b" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('footer.visaLinks.h1b')}
            </Link>
            <Link component={RouterLink} to="/Services#l1" color="inherit" display="block" underline="hover" sx={{ mb: 1 }}>
              {t('footer.visaLinks.l1')}
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary.main" gutterBottom fontWeight="bold">
              {t('footer.contactInfo')}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('footer.phone')} +91 93616 96954
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              {t('footer.email')} sssj.b1b285@gmail.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              <IconButton 
                size="small" 
                color="primary" 
                aria-label="facebook"
                component="a"
                href="https://www.facebook.com/Susi616969"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              © {currentYear} {t('footer.copyright')}
            </Typography>
            <Typography variant="body2" color="primary.main" fontWeight="medium">
              {t('footer.tagline')}
            </Typography>
          </Stack>
          <Box>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
              {t('footer.termsOfService')}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;