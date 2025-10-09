import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  Stack,
  Tabs,
  Tab,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UpdateIcon from '@mui/icons-material/Update';
import PolicyIcon from '@mui/icons-material/Policy';
import SecurityIcon from '@mui/icons-material/Security';
import FlightIcon from '@mui/icons-material/Flight';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import SectionTitle from '../components/ui/SectionTitle';
import NewsPopup from '../components/ui/NewsPopup';
import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  // ...existing code...
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Get FAQ data from translation files
  const generalFaqData = t('contact.faq.items', { returnObjects: true });
  const visaSpecificFaq = t('contact.faq.visaSpecific', { returnObjects: true });
  
  // Tab data for different sections
  const tabData = [
    {
      label: "General FAQ",
      icon: <HelpOutlineIcon />,
      content: [
        {
          title: "Visa Fees & Costs",
          icon: <PolicyIcon />,
          color: "#e3f2fd",
          questions: generalFaqData.slice(0, 8)
        },
        {
          title: "Biometric Data Collection",
          icon: <SecurityIcon />,
          color: "#f3e5f5", 
          questions: generalFaqData.slice(8, 18)
        },
        {
          title: "Interview Process & Requirements",
          icon: <HelpOutlineIcon />,
          color: "#e8f5e8",
          questions: generalFaqData.slice(18, 28)
        },
        {
          title: "Document Requirements & Specifications",
          icon: <UpdateIcon />,
          color: "#fff3e0",
          questions: generalFaqData.slice(28, 38)
        },
        {
          title: "Visa Denials & Administrative Processing",
          icon: <PolicyIcon />,
          color: "#fce4ec",
          questions: generalFaqData.slice(38, 48)
        },
        {
          title: "Special Cases & Additional Information",
          icon: <SecurityIcon />,
          color: "#f1f8e9",
          questions: generalFaqData.slice(48)
        }
      ]
    },
    {
      label: "B1/B2 Tourist/Business",
      icon: <FlightIcon />,
      content: [{
        title: visaSpecificFaq.b1b2?.title || "B1/B2 Visa FAQ",
        icon: <FlightIcon />,
        color: "#e8f5e8",
        questions: visaSpecificFaq.b1b2?.items || []
      }]
    },
    {
      label: "F1 Student Visa",
      icon: <SchoolIcon />,
      content: [{
        title: visaSpecificFaq.f1?.title || "F1 Visa FAQ",
        icon: <SchoolIcon />,
        color: "#fff3e0",
        questions: visaSpecificFaq.f1?.items || []
      }]
    },
    {
      label: "H1B Work Visa",
      icon: <WorkIcon />,
      content: [{
        title: visaSpecificFaq.h1b?.title || "H1B Visa FAQ",
        icon: <WorkIcon />,
        color: "#e3f2fd",
        questions: visaSpecificFaq.h1b?.items || []
      }]
    },
    {
      label: "L1 Business Visa",
      icon: <BusinessIcon />,
      content: [{
        title: visaSpecificFaq.l1?.title || "L1 Visa FAQ",
        icon: <BusinessIcon />,
        color: "#f3e5f5",
        questions: visaSpecificFaq.l1?.items || []
      }]
    },
    {
      label: "Other Visa Types",
      icon: <PublicIcon />,
      content: [{
        title: visaSpecificFaq.other?.title || "Other Visas FAQ",
        icon: <PublicIcon />,
        color: "#fce4ec",
        questions: visaSpecificFaq.other?.items || []
      }]
    }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Comprehensive guide to US visa applications with latest 2025 updates"
          centered
        />
          
          {/* Policy Update Alert */}
          <Paper 
            elevation={2}
            sx={{ 
              p: 3, 
              mb: 4, 
              backgroundColor: '#e3f2fd',
              border: '1px solid #2196f3'
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <UpdateIcon sx={{ color: '#1976d2', fontSize: 30 }} />
              <Box>
                {/* Latest News Icon and Popup (always open on FAQ page) */}
                <NewsPopup alwaysOpen={true} />
                <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600 }}>
                  Latest Updates for 2025
                </Typography>
                <Typography variant="body2" sx={{ color: '#1565c0' }}>
                  Stay informed about the latest US visa policy changes, updated fees, and new requirements. 
                  Browse by category or specific visa type for targeted information.
                </Typography>
              </Box>
            </Stack>
          </Paper>

          {/* Tabs for different FAQ sections */}
          <Paper elevation={1} sx={{ mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  minHeight: 72,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }
              }}
            >
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <Stack direction="row" spacing={1} alignItems="center">
                      {tab.icon}
                      <Typography variant="body2">{tab.label}</Typography>
                    </Stack>
                  }
                />
              ))}
            </Tabs>
          </Paper>

          {/* Tab Content */}
          <Grid container spacing={4}>
            {tabData[tabValue].content.map((category, categoryIndex) => (
              <Grid item xs={12} key={categoryIndex}>
                <Paper elevation={2} sx={{ p: 3, backgroundColor: category.color }}>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                    {category.icon}
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {category.title}
                    </Typography>
                    <Chip label={`${category.questions.length} Questions`} size="small" />
                  </Stack>
                  
                  {category.questions.map((faq, index) => (
                    <Accordion 
                      key={index}
                      sx={{ 
                        mb: 2,
                        '&:before': { display: 'none' },
                        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                        borderRadius: '8px !important',
                        '&.Mui-expanded': {
                          margin: '0 0 16px 0'
                        }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '8px',
                          '&.Mui-expanded': {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0
                          }
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 500, pr: 2 }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ backgroundColor: '#fafafa', p: 3 }}>
                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Paper elevation={3} sx={{ p: 4, mt: 6, textAlign: 'center', backgroundColor: 'primary.main', color: 'white' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Still Have Questions?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our expert visa consultants are here to provide personalized guidance for your specific situation.
            </Typography>
            <Stack 
              direction={isMobile ? 'column' : 'row'} 
              spacing={2} 
              justifyContent="center"
              alignItems="center"
            >
              <Chip 
                label="📞 Free Consultation" 
                variant="outlined" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  fontSize: '1rem',
                  py: 1
                }} 
              />
              <Chip 
                component="a"
                href="/Contactus"
                clickable
                label="📧 Email Support Within 24 Hours" 
                variant="outlined" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  fontSize: '1rem',
                  py: 1,
                  textDecoration: 'none',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.08)' }
                }} 
              />
              <Chip 
                label="🌐 Multilingual Support Available" 
                variant="outlined" 
                sx={{ 
                  color: 'white', 
                  borderColor: 'white',
                  fontSize: '1rem',
                  py: 1
                }} 
              />
            </Stack>
          </Paper>
        </Container>
      </Box>
  );
};

export default FAQPage;