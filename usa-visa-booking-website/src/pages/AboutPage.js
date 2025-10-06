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
import { useTranslation } from 'react-i18next';
import { useLanguageStyles, applyLanguageStyles } from '../styles/LanguageStyles';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const languageStyles = useLanguageStyles(i18n.language);
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title={t('about.title')}
        subtitle={t('about.subtitle')}
        backgroundImage={images.heroAbout}
        height="65vh"
      />

      {/* Who We Are Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SectionTitle 
              title={t('about.whoWeAre.title')} 
              subtitle={t('about.whoWeAre.mainTitle')} 
              centered={false} 
            />
            <Typography variant="body1" paragraph>
              {t('about.whoWeAre.description')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('about.whoWeAre.secondParagraph')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('about.whoWeAre.thirdParagraph')}
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
            title={t('about.mission.title')} 
            subtitle={t('about.mission.mainTitle')} 
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
              "{t('about.mission.description')}"
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
                    primary={t('about.mission.services.expertGuidance.title')} 
                    secondary={t('about.mission.services.expertGuidance.description')} 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('about.mission.services.personalizedService.title')} 
                    secondary={t('about.mission.services.personalizedService.description')} 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('about.mission.services.simplifiedProcess.title')} 
                    secondary={t('about.mission.services.simplifiedProcess.description')} 
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
                    primary={t('about.mission.services.comprehensiveSupport.title')} 
                    secondary={t('about.mission.services.comprehensiveSupport.description')} 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('about.mission.services.transparency.title')} 
                    secondary={t('about.mission.services.transparency.description')} 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
                <Divider component="li" variant="inset" />
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={t('about.mission.services.clientSuccess.title')} 
                    secondary={t('about.mission.services.clientSuccess.description')} 
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
          title={t('about.whyChoose.title')} 
          subtitle={t('about.whyChoose.subtitle')} 
          centered={true} 
        />
        
        <Grid container spacing={4} justifyContent="center">
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
                  {t('about.whyChoose.stats.experience.value')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.whyChoose.stats.experience.description')}
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
                  {t('about.whyChoose.stats.applications.value')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.whyChoose.stats.applications.description')}
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
                  {t('about.whyChoose.stats.support.value')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.whyChoose.stats.support.description')}
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
                  {t('about.whyChoose.stats.security.value')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.whyChoose.stats.security.description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Testimonials */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle 
            title={t('about.testimonials.title')} 
            subtitle={t('about.testimonials.subtitle')} 
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
                  {t('about.testimonials.clients.johnDoe.quote')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>JD</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>{t('about.testimonials.clients.johnDoe.name')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('about.testimonials.clients.johnDoe.title')}</Typography>
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
                  {t('about.testimonials.clients.janeSmith.quote')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>JS</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>{t('about.testimonials.clients.janeSmith.name')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('about.testimonials.clients.janeSmith.title')}</Typography>
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
                  {t('about.testimonials.clients.robertMiller.quote')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ mr: 2 }}>RM</Avatar>
                  <Box>
                    <Typography variant="subtitle1" fontWeight={600}>{t('about.testimonials.clients.robertMiller.name')}</Typography>
                    <Typography variant="body2" color="text.secondary">{t('about.testimonials.clients.robertMiller.title')}</Typography>
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