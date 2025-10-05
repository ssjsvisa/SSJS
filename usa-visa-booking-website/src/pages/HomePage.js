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

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  // Check if this is the user's first visit
  useEffect(() => {
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
        title="Your Journey to America Starts Here"
        subtitle="Professional visa application services to make your American dream a reality"
        backgroundImage={images.heroHome}
        buttonText="Explore Visa Services"
        buttonLink="/services"
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle
          title="USA Visa Application Process"
          subtitle="Navigating the U.S. visa application process can be complex. We're here to guide you every step of the way."
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
              Your Trusted Visa Partner
            </Typography>
            <Typography variant="body1" paragraph>
              The USA visa application process involves several steps, from determining the right visa type for your purpose to preparing documentation and attending the visa interview. At SSJS, we provide expert guidance through each stage.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team of experienced professionals will help you understand the requirements, prepare your application, and maximize your chances of approval. We stay current with the latest immigration policies and procedures to provide you with accurate advice.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're planning to visit the United States for tourism, business, education, or work, we offer specialized services tailored to your specific needs.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              component={RouterLink}
              to="/About"
              sx={{ mt: 2 }}
            >
              Learn More About Us
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
                Connecting Nations, Building Futures
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                SSJS Visa Services specializes in strengthening the connection between India and the United States through 
                professional visa consulting services, cultural exchange programs, and educational opportunities.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">2K+</Typography>
                      <Typography variant="body2">Successful Visas</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">2+</Typography>
                      <Typography variant="body2">Years Experience</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2 }}>
                      <Typography variant="h3" fontWeight="bold">98%</Typography>
                      <Typography variant="body2">Success Rate</Typography>
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
            title="Visa Categories"
            subtitle="Explore the different types of U.S. visas available for various purposes"
            centered
          />
          
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Tourist & Business (B1/B2)"
                description="For temporary visits to the United States for tourism, vacation, visiting family, or business meetings and conferences."
                icon={<FlightIcon fontSize="large" />}
                image={images.touristImage}
                imageAlt="Tourist in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Student Visa (F1)"
                description="For academic studies at U.S. colleges, universities, high schools, language training programs, and other academic institutions."
                icon={<SchoolIcon fontSize="large" />}
                image={images.studentImage}
                imageAlt="Student studying in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Work Visa (H1B)"
                description="For professionals in specialty occupations requiring theoretical and practical application of specialized knowledge."
                icon={<WorkIcon fontSize="large" />}
                image={images.workImage}
                imageAlt="Professional working in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={6}>
              <FeatureCard
                title="Intra-company Transfer (L1)"
                description="For employees of international companies transferring to a parent, branch, affiliate, or subsidiary in the United States."
                icon={<BusinessCenterIcon fontSize="large" />}
                image={images.businessImage}
                imageAlt="Business meeting in the USA"
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={6}>
              <FeatureCard
                title="Other Visa Categories"
                description="Dependent visas, immigrant visas, diversity visa lottery, and specialized visas for various purposes including artists, athletes, and religious workers."
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
              View All Visa Services
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
                Ready to Begin Your U.S. Journey?
              </Typography>
              <Typography variant="h6" component="p" sx={{ opacity: 0.9 }}>
                Contact SSJS today for a consultation and let us help you navigate the visa application process.
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
                Contact Us Now
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
                Welcome to SSJS Visa Services! 👋
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
                We're thrilled to have you here! Our expert team is dedicated to making your 
                American dream a reality with professional visa application services.
              </Typography>

              {/* Key Benefits */}
              <Box sx={{ mb: 4, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: 'primary.main', fontWeight: 600 }}>
                  Why Choose SSJS?
                </Typography>
                <Stack spacing={1}>
                  {[
                    '✈️ Expert guidance for all visa types',
                    '📄 Complete application assistance',
                    '⚡ Fast processing times',
                    '🎯 High success rate',
                    '💬 24/7 customer support'
                  ].map((benefit, index) => (
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
                  Explore Visa Services
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
                  Get Free Consultation
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
                This welcome message appears only on your first visit
              </Typography>
            </Box>
          </Paper>
        </Fade>
      </Modal>
    </Box>
  );
};

export default HomePage;