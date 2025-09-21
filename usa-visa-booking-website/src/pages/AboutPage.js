import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { images } from '../assets/images/imageUrls';

const AboutPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="About SSJS Visa Services"
        subtitle="Your trusted partner in navigating the U.S. visa application process with expertise"
        backgroundImage={images.heroAbout}
        height="65vh"
      />

      {/* Who We Are Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionTitle 
              title="Who We Are" 
              subtitle="SSJS - Your Bridge to America" 
              centered={false} 
            />
            <Typography variant="body1" paragraph>
              SSJS Visa Services is a premier consulting agency specializing in U.S. visa applications and immigration services. We understand that each client's situation is unique, and we pride ourselves on providing personalized guidance tailored to your specific needs.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded with the mission to simplify the complex U.S. immigration system, our team of experienced professionals combines deep knowledge of visa regulations with a commitment to exceptional client service.
            </Typography>
            <Typography variant="body1" paragraph>
              We've helped thousands of clients successfully navigate the visa application process, whether for tourism, business, education, or employment opportunities in the United States.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src={images.teamImage}
              alt="SSJS Team"
              sx={{ 
                width: '100%',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Mission Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <SectionTitle 
            title="Our Mission" 
            subtitle="Helping You Achieve Your American Dream" 
            centered={true} 
          />
          
          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              borderRadius: 4,
              bgcolor: 'primary.main',
              color: 'white',
              textAlign: 'center',
              mb: 6
            }}
          >
            <Typography variant="h5" component="p" sx={{ fontStyle: 'italic', lineHeight: 1.7 }}>
              "Our mission is to empower individuals and businesses by providing expert guidance through the U.S. visa application process, ensuring a smooth journey from application to approval."
            </Typography>
          </Paper>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Expert Guidance" 
                    secondary="We provide professional advice based on the latest immigration policies and procedures." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Personalized Service" 
                    secondary="We tailor our approach to each client's unique situation and requirements." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Simplified Process" 
                    secondary="We break down complex procedures into manageable steps for our clients." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Comprehensive Support" 
                    secondary="We assist with every aspect of the application process from start to finish." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Transparency" 
                    secondary="We maintain clear communication and set realistic expectations about the process." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Client Success" 
                    secondary="We measure our success by the successful outcomes of our clients." 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Experience & Trust Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle 
          title="Why Choose SSJS" 
          subtitle="Industry Experience & Trust Highlights" 
          centered={true} 
        />
        
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.light',
                    width: 70,
                    height: 70
                  }}
                >
                  <BusinessIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                  10+ Years
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Over a decade of specialized experience in U.S. visa consulting
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'secondary.light',
                    width: 70,
                    height: 70
                  }}
                >
                  <EmojiEventsIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                  5,000+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Successful visa applications across all categories
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'primary.light',
                    width: 70,
                    height: 70
                  }}
                >
                  <SupportAgentIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                  24/7
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Round-the-clock client support throughout the application process
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: 'secondary.light',
                    width: 70,
                    height: 70
                  }}
                >
                  <SecurityIcon fontSize="large" />
                </Avatar>
              </Box>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                  100%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Confidentiality and security for all client information
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Testimonials */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What Our Clients Say About Us" 
            centered={true} 
          />
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  position: 'relative'
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    position: 'absolute',
                    top: 10,
                    left: 20,
                    color: 'rgba(0, 0, 0, 0.05)',
                    fontSize: '5rem',
                    fontWeight: 700
                  }}
                >
                  "
                </Typography>
                <Typography variant="body1" paragraph sx={{ pt: 4, fontStyle: 'italic' }}>
                  SSJS Visa Services made the entire process seamless and stress-free. Their expertise and attention to detail were invaluable in securing my business visa. I highly recommend their services!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>JD</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>John Doe</Typography>
                    <Typography variant="body2" color="text.secondary">Business Visa Applicant</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  position: 'relative'
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    position: 'absolute',
                    top: 10,
                    left: 20,
                    color: 'rgba(0, 0, 0, 0.05)',
                    fontSize: '5rem',
                    fontWeight: 700
                  }}
                >
                  "
                </Typography>
                <Typography variant="body1" paragraph sx={{ pt: 4, fontStyle: 'italic' }}>
                  As an international student, I was overwhelmed by the visa application process. SSJS guided me through every step, answering all my questions promptly. Thanks to them, I'm now studying at my dream university!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>JS</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>Jane Smith</Typography>
                    <Typography variant="body2" color="text.secondary">F1 Student Visa Holder</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={2}
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  height: '100%',
                  position: 'relative'
                }}
              >
                <Typography 
                  variant="h1" 
                  sx={{ 
                    position: 'absolute',
                    top: 10,
                    left: 20,
                    color: 'rgba(0, 0, 0, 0.05)',
                    fontSize: '5rem',
                    fontWeight: 700
                  }}
                >
                  "
                </Typography>
                <Typography variant="body1" paragraph sx={{ pt: 4, fontStyle: 'italic' }}>
                  Our company regularly transfers employees to our U.S. office, and SSJS has been our trusted partner for years. Their knowledge of L1 visa requirements is exceptional, and their service is always professional and efficient.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>RM</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>Robert Miller</Typography>
                    <Typography variant="body2" color="text.secondary">HR Director, Global Tech Inc.</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;