import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Divider,
  Modal,
  IconButton,
  Fade
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import FlagIcon from '../components/ui/FlagIcon';
import FlightIcon from '@mui/icons-material/Flight';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { images } from '../assets/images/imageUrls';
import { useTranslation } from 'react-i18next';
import { useLanguageStyles, applyLanguageStyles } from '../styles/LanguageStyles';
import { testBusinessImage } from '../utils/imageLoader';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languageStyles = useLanguageStyles(i18n.language);

  // Check if this is the user's first visit
  useEffect(() => {
    // Test business image loading
    testBusinessImage();
    
    const hasVisitedBefore = localStorage.getItem('hasVisitedHomepage');
    if (!hasVisitedBefore) {
      // Show welcome modal after a short delay for better UX
      const timer = setTimeout(() => {
        setWelcomeModalOpen(true);
      }, 1500); // 1.5 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseWelcomeModal = () => {
    setWelcomeModalOpen(false);
    // Mark that user has visited the homepage
    localStorage.setItem('hasVisitedHomepage', 'true');
  };
  
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        backgroundImage={images.heroHome}
        buttonText={t('home.hero.buttonText')}
        buttonLink="/services"
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle
          title={t('home.introduction.title')}
          subtitle={t('home.introduction.subtitle')}
          centered
        />
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src={images.americanLandmarks}
              alt="American Landmarks"
              sx={{ 
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
              {t('home.trustedPartner.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.trustedPartner.description1')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.trustedPartner.description2')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('home.trustedPartner.description3')}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink}
              to="/About"
              sx={{ mt: 2 }}
            >
              {t('home.trustedPartner.learnMore')}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* US-India Connection Section */}
      <Box sx={{ bgcolor: 'primary.main', py: 6, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={3} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                <FlagIcon country="india" height={60} />
                <HandshakeIcon sx={{ fontSize: 60 }} />
                <FlagIcon country="us" height={60} />
              </Stack>
              <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                {t('home.connecting.title')}
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                {t('home.connecting.description')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">2K+</Typography>
                      <Typography variant="body2">{t('home.stats.successfulVisas')}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">2+</Typography>
                      <Typography variant="body2">{t('home.stats.yearsExperience')}</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">98%</Typography>
                      <Typography variant="body2">{t('home.stats.successRate')}</Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">50+</Typography>
                      <Typography variant="body2">Expert Consultants</Typography>
                    </Box>
                  </Grid> */}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Visa Categories Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <SectionTitle
            title={t('home.services.title')}
            subtitle={t('home.services.subtitle')}
            centered
          />
          
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title={t('home.services.tourist.title')}
                description={t('home.services.tourist.description')}
                icon={<FlightIcon fontSize="large" />}
                image={images.touristImage}
                imageAlt="Tourist in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title={t('home.services.student.title')}
                description={t('home.services.student.description')}
                icon={<SchoolIcon fontSize="large" />}
                image={images.studentImage}
                imageAlt="Student studying in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title={t('home.services.work.title')}
                description={t('home.services.work.description')}
                icon={<WorkIcon fontSize="large" />}
                image={images.workImage}
                imageAlt="Professional working in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={6}>
              <FeatureCard
                title={t('home.services.business.title')}
                description={t('home.services.business.description')}
                icon={<BusinessCenterIcon fontSize="large" />}
                image={images.businessImage}
                imageAlt="Business meeting in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6}>
              <FeatureCard
                title={t('home.services.family.title')}
                description={t('home.services.family.description')}
                icon={<FamilyRestroomIcon fontSize="large" />}
                image={images.familyImage}
                imageAlt="Family in the USA"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              component={RouterLink}
              to="/Services"
            >
              {t('home.services.viewAll')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid 
            container 
            spacing={4} 
            alignItems="center" 
            justifyContent="center"
            sx={{ textAlign: isMobile ? 'center' : 'left' }}
          >
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={600}>
                {t('home.cta.title')}
              </Typography>
              <Typography variant="h6" component="p" sx={{ opacity: 0.9 }}>
                {t('home.cta.subtitle')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: isMobile ? 'center' : 'right' }}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={RouterLink}
                to="/Contactus"
                sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
              >
                {t('home.cta.buttonText')}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Welcome Modal for First-Time Visitors */}
      <Modal
        open={welcomeModalOpen}
        onClose={handleCloseWelcomeModal}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={welcomeModalOpen}>
          <Paper
            sx={{
              position: 'relative',
              width: { xs: '90%', sm: 500 },
              maxHeight: '90vh',
              overflow: 'auto',
              p: 4,
              borderRadius: 3,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleCloseWelcomeModal}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'grey.500',
                '&:hover': {
                  backgroundColor: 'grey.100',
                }
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Modal Content */}
            <Box sx={{ textAlign: 'center', pt: 1 }}>
              {/* Welcome Icon */}
              <Box sx={{ mb: 2 }}>
                <CelebrationIcon sx={{ fontSize: 60, color: 'primary.main', mb: 1 }} />
              </Box>

              {/* Welcome Message */}
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700, 
                  color: 'primary.main',
                  mb: 2
                }}
              >
                {t('home.welcome.title')}
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}
              >
                {t('home.welcome.subtitle')}
              </Typography>

              {/* Key Benefits */}
              <Box sx={{ mb: 4, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  {t('home.welcome.whyChoose')}
                </Typography>
                <Stack spacing={1}>
                  {t('home.welcome.benefits', { returnObjects: true }).map((benefit, index) => (
                    <Typography 
                      key={index} 
                      variant="body2" 
                      sx={{ color: 'text.secondary', fontSize: '0.95rem' }}
                    >
                      {benefit}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              {/* Action Buttons */}
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ justifyContent: 'center' }}
              >
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/services"
                  startIcon={<FlightTakeoffIcon />}
                  onClick={handleCloseWelcomeModal}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {t('home.welcome.exploreServices')}
                </Button>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/Contactus"
                  onClick={handleCloseWelcomeModal}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                >
                  {t('home.welcome.freeConsultation')}
                </Button>
              </Stack>

              {/* Disclaimer */}
              <Typography 
                variant="caption" 
                sx={{ 
                  mt: 3, 
                  display: 'block',
                  color: 'text.disabled',
                  fontSize: '0.8rem'
                }}
              >
                {t('home.welcome.disclaimer')}
              </Typography>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomePage;