import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Chip,
  Stack
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import FlagIcon from '../components/ui/FlagIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import { images } from '../assets/images/imageUrls';
import { useTranslation } from 'react-i18next';

const VisaServicesPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const { t } = useTranslation();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        backgroundImage={images.heroServices}
        height="65vh"
        buttonText="Apply Now"
        buttonLink="/contact"
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle 
          title={t('services.intro.title')} 
          subtitle={t('services.intro.subtitle')} 
          centered={true}
        />

        <Typography variant="body1" paragraph sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', mb: 5 }}>
          {t('services.intro.description')}
        </Typography>

        {/* Visa Types Tabs with US Flag */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <FlagIcon country="us" height={36} />
        </Box>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="scrollable"
            scrollButtons="auto"
            aria-label="visa types tabs"
            TabIndicatorProps={{ sx: { height: 3 } }}
            sx={{ 
              '& .MuiTab-root': { 
                fontWeight: 500,
                px: 3
              }
            }}
          >
            <Tab 
              label={t('services.tabs.b1b2')} 
              id="tab-0" 
              aria-controls="tabpanel-0"
            />
            <Tab 
              label={t('services.tabs.f1')} 
              id="tab-1" 
              aria-controls="tabpanel-1"
            />
            <Tab 
              label={t('services.tabs.h1b')} 
              id="tab-2" 
              aria-controls="tabpanel-2"
            />
            <Tab 
              label={t('services.tabs.l1')} 
              id="tab-3" 
              aria-controls="tabpanel-3"
            />
            <Tab 
              label={t('services.tabs.other')} 
              id="tab-4" 
              aria-controls="tabpanel-4"
            />
          </Tabs>
        </Box>

        {/* B1/B2 Visa Content */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <FlagIcon country="us" height={30} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 0 }}>
                  {t('services.visaTypes.b1b2.title')}
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.b1b2.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.b1b2.details')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label={t('services.visaTypes.b1b2.processing')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={t('services.visaTypes.b1b2.duration')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.b1b2.documents.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.b1b2.documents.items', { returnObjects: true }).map((item, index) => (
                    <RequirementItem key={index} text={item} />
                  ))}
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.b1b2.eligibility.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.b1b2.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <ProcessItem key={index} number={index + 1} text={item} />
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  {t('services.learnMore')}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* F1 Visa Content */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <FlagIcon country="us" height={30} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 0 }}>
                  {t('services.visaTypes.f1.title')}
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.f1.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.f1.details')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label={t('services.visaTypes.f1.processing')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={t('services.visaTypes.f1.duration')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.f1.documents.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.f1.documents.items', { returnObjects: true }).map((item, index) => (
                    <RequirementItem key={index} text={item} />
                  ))}
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.f1.eligibility.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.f1.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <ProcessItem key={index} number={index + 1} text={item} />
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  {t('services.learnMore')}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* H1B Visa Content */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <FlagIcon country="us" height={30} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 0 }}>
                  {t('services.visaTypes.h1b.title')}
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.h1b.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.h1b.details')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label={t('services.visaTypes.h1b.processing')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={t('services.visaTypes.h1b.duration')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.h1b.documents.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.h1b.documents.items', { returnObjects: true }).map((item, index) => (
                    <RequirementItem key={index} text={item} />
                  ))}
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.h1b.eligibility.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.h1b.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <ProcessItem key={index} number={index + 1} text={item} />
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  {t('services.learnMore')}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* L1 Visa Content */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <FlagIcon country="us" height={30} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 0 }}>
                  {t('services.visaTypes.l1.title')}
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.l1.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.l1.details')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label={t('services.visaTypes.l1.processing')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label={t('services.visaTypes.l1.duration')} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.l1.documents.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.l1.documents.items', { returnObjects: true }).map((item, index) => (
                    <RequirementItem key={index} text={item} />
                  ))}
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.l1.eligibility.title')}
                </Typography>
                <List>
                  {t('services.visaTypes.l1.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <ProcessItem key={index} number={index + 1} text={item} />
                  ))}
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  {t('services.learnMore')}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Other Visas Content */}
        <TabPanel value={tabValue} index={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                <FlagIcon country="us" height={30} />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 0 }}>
                  {t('services.visaTypes.other.title')}
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.other.description')}
              </Typography>
              <Typography variant="body1" paragraph>
                {t('services.visaTypes.other.secondDescription')}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<ArrowForwardIcon />}
                component={RouterLink}
                to="/contact"
                sx={{ mt: 2 }}
              >
                {t('services.visaTypes.other.buttonText')}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <InfoIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 0 }}>
                    {t('services.visaTypes.other.additionalTitle')}
                  </Typography>
                  <FlagIcon country="us" height={20} />
                </Stack>

                {t('services.visaTypes.other.categories', { returnObjects: true }).map((category, index) => (
                  <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography fontWeight={600}>{category.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">
                        {category.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Paper>

              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                  {t('services.visaTypes.other.servicesTitle')}
                </Typography>
                <List>
                  {t('services.visaTypes.other.servicesItems', { returnObjects: true }).map((item, index) => (
                    <RequirementItem key={index} text={item} />
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Application Process Overview */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle 
            title={t('services.processSteps.title')} 
            subtitle={t('services.processSteps.subtitle')} 
            centered={true} 
          />
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="01"
                title={t('services.processSteps.step1.title')}
                description={t('services.processSteps.step1.description')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="02"
                title={t('services.processSteps.step2.title')}
                description={t('services.processSteps.step2.description')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="03"
                title={t('services.processSteps.step3.title')}
                description={t('services.processSteps.step3.description')}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="04"
                title={t('services.processSteps.step4.title')}
                description={t('services.processSteps.step4.description')}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      {/* India-US Connection Section */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 6 }}>
        <Container maxWidth="lg">
          <SectionTitle 
            title={t('services.indiaUsPartnership.title')} 
            subtitle={t('services.indiaUsPartnership.subtitle')} 
            centered={true}
          />
          
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <FlagIcon country="india" height={60} />
                  <Typography variant="h3" component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    ⟷
                  </Typography>
                  <FlagIcon country="us" height={60} />
                </Stack>
              </Box>
              
              <Typography variant="body1" paragraph align="center" sx={{ mb: 3 }}>
                {t('services.indiaUsPartnership.description')}
              </Typography>
              
              <Box sx={{ textAlign: 'center' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  {t('services.indiaUsPartnership.buttonText')}
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      {t('services.indiaUsPartnership.stats.students.value')}
                    </Typography>
                    <Typography variant="body2">
                      {t('services.indiaUsPartnership.stats.students.label')}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      {t('services.indiaUsPartnership.stats.trade.value')}
                    </Typography>
                    <Typography variant="body2">
                      {t('services.indiaUsPartnership.stats.trade.label')}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      {t('services.indiaUsPartnership.stats.diaspora.value')}
                    </Typography>
                    <Typography variant="body2">
                      {t('services.indiaUsPartnership.stats.diaspora.label')}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      {t('services.indiaUsPartnership.stats.h1bVisas.value')}
                    </Typography>
                    <Typography variant="body2">
                      {t('services.indiaUsPartnership.stats.h1bVisas.label')}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

// Helper Components
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const RequirementItem = ({ text }) => (
  <ListItem>
    <ListItemIcon>
      <CheckCircleIcon color="primary" />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const ProcessItem = ({ number, text }) => (
  <ListItem>
    <ListItemIcon>
      <Box 
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}
      >
        {number}
      </Box>
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const ProcessStep = ({ number, title, description }) => (
  <Card 
    elevation={2}
    sx={{ 
      height: '100%',
      borderRadius: 2,
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <CardContent>
      <Box
        sx={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        {number}
      </Box>
      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default VisaServicesPage;
