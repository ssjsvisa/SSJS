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

const VisaServicesPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="USA Visa Services"
        subtitle="Expert guidance for all types of U.S. visas with comprehensive application support"
        backgroundImage={images.heroServices}
        height="65vh"
        buttonText="Apply Now"
        buttonLink="/contact"
      />

      {/* Introduction Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle 
          title="Our Visa Services" 
          subtitle="Expert Guidance for Every Visa Category" 
          centered={true}
        />

        <Typography variant="body1" paragraph sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center', mb: 5 }}>
          At SSJS, we offer specialized consulting services for all U.S. visa categories. Our team of experienced professionals will guide you through the entire application process, from initial assessment to final submission and interview preparation.
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
              label="B1/B2 VISA" 
              id="tab-0" 
              aria-controls="tabpanel-0"
            />
            <Tab 
              label="F1 VISA" 
              id="tab-1" 
              aria-controls="tabpanel-1"
            />
            <Tab 
              label="H1B VISA" 
              id="tab-2" 
              aria-controls="tabpanel-2"
            />
            <Tab 
              label="L1 VISA" 
              id="tab-3" 
              aria-controls="tabpanel-3"
            />
            <Tab 
              label="OTHER VISAS" 
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
                  B1/B2 Business & Tourist Visa
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                The B1/B2 visa is a non-immigrant visa for people who want to enter the United States temporarily for business (B1), tourism, pleasure, or visiting (B2). The B1 visa is specifically for business travelers, while the B2 visa is for tourists.
              </Typography>
              <Typography variant="body1" paragraph>
                These visas are typically issued for up to 10 years and allow for multiple entries, with each stay generally limited to six months. B1/B2 visas are ideal for tourists, family visits, business meetings, conferences, or seeking medical treatment in the U.S.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label="Processing time: 2-4 weeks" 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label="Duration: Up to 6 months per visit" 
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
                  Requirements
                </Typography>
                <List>
                  <RequirementItem text="Valid passport with at least 6 months validity beyond your planned stay" />
                  <RequirementItem text="Completed DS-160 visa application form" />
                  <RequirementItem text="Application fee payment receipt" />
                  <RequirementItem text="Recent photo meeting US visa requirements" />
                  <RequirementItem text="Proof of ties to your home country" />
                  <RequirementItem text="Proof of sufficient funds to cover your stay" />
                  <RequirementItem text="Travel itinerary (if available)" />
                  <RequirementItem text="For B1: Business-related documents like invitation letters, conference details, etc." />
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  Application Process
                </Typography>
                <List>
                  <ProcessItem number={1} text="Complete the DS-160 online visa application form" />
                  <ProcessItem number={2} text="Pay the visa application fee" />
                  <ProcessItem number={3} text="Schedule a visa interview at your local U.S. embassy or consulate" />
                  <ProcessItem number={4} text="Prepare all required documents" />
                  <ProcessItem number={5} text="Attend the visa interview" />
                  <ProcessItem number={6} text="Wait for visa processing" />
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Inquire About This Visa
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
                  F1 Student Visa
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                The F1 visa is a non-immigrant visa for international students attending an academic institution or language training program in the United States. This visa allows foreign nationals to enter the U.S. as full-time students at accredited colleges, universities, seminaries, conservatories, or language training programs.
              </Typography>
              <Typography variant="body1" paragraph>
                F1 visa holders must maintain a full course load and make progress toward completing their academic program. They may also be eligible for Optional Practical Training (OPT) to gain practical work experience related to their field of study after completing their academic program.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label="Processing time: 2-5 weeks" 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label="Duration: For length of academic program" 
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
                  Requirements
                </Typography>
                <List>
                  <RequirementItem text="Valid passport with at least 6 months validity beyond your planned stay" />
                  <RequirementItem text="Completed DS-160 visa application form" />
                  <RequirementItem text="SEVIS fee payment receipt" />
                  <RequirementItem text="Form I-20 from your U.S. educational institution" />
                  <RequirementItem text="Proof of financial resources to cover tuition and living expenses" />
                  <RequirementItem text="Academic records and test scores (TOEFL, SAT, etc.)" />
                  <RequirementItem text="Proof of ties to your home country" />
                  <RequirementItem text="Application fee payment receipt" />
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  Application Process
                </Typography>
                <List>
                  <ProcessItem number={1} text="Receive acceptance from a SEVP-approved U.S. school" />
                  <ProcessItem number={2} text="Receive Form I-20 from the school" />
                  <ProcessItem number={3} text="Pay the SEVIS I-901 fee" />
                  <ProcessItem number={4} text="Complete the DS-160 online visa application form" />
                  <ProcessItem number={5} text="Schedule a visa interview at your local U.S. embassy or consulate" />
                  <ProcessItem number={6} text="Attend the visa interview with all required documents" />
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Inquire About This Visa
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
                  H1B Work Visa
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                The H1B visa is a non-immigrant visa that allows U.S. companies to employ foreign workers in specialty occupations that require theoretical or technical expertise. Specialty occupations typically require a bachelor's degree or higher in a specific specialty (or its equivalent).
              </Typography>
              <Typography variant="body1" paragraph>
                H1B visas are subject to an annual cap and are initially granted for up to three years, with possible extensions. This visa is popular among professionals in fields like IT, engineering, mathematics, science, medicine, and business specialties. H1B visa holders can bring their spouse and children under the H4 dependent visa.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label="Processing time: 3-6 months (standard) or 15 days (premium)" 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label="Duration: Up to 6 years" 
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
                  Requirements
                </Typography>
                <List>
                  <RequirementItem text="Job offer from a U.S. employer in a specialty occupation" />
                  <RequirementItem text="Bachelor's degree or higher in the specific specialty" />
                  <RequirementItem text="LCA (Labor Condition Application) approved by the Department of Labor" />
                  <RequirementItem text="Form I-129 petition approved by USCIS" />
                  <RequirementItem text="Valid passport" />
                  <RequirementItem text="Resume/CV demonstrating relevant work experience" />
                  <RequirementItem text="Educational credentials and evaluations" />
                  <RequirementItem text="Application fee payment receipts" />
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  Application Process
                </Typography>
                <List>
                  <ProcessItem number={1} text="U.S. employer files LCA with the Department of Labor" />
                  <ProcessItem number={2} text="Employer files Form I-129 petition with USCIS" />
                  <ProcessItem number={3} text="Upon approval, applicant completes DS-160 form (if outside U.S.)" />
                  <ProcessItem number={4} text="Pay visa application fees" />
                  <ProcessItem number={5} text="Schedule and attend visa interview at U.S. embassy/consulate" />
                  <ProcessItem number={6} text="If approved, receive visa and travel to the U.S." />
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Inquire About This Visa
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
                  L1 Intra-company Transfer Visa
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                The L1 visa is designed for intra-company transferees who are being transferred to a parent, branch, affiliate, or subsidiary of the same company in the U.S. There are two types: L1A for managers and executives, and L1B for employees with specialized knowledge.
              </Typography>
              <Typography variant="body1" paragraph>
                L1A visas can be granted for up to 7 years, while L1B visas are limited to 5 years. This visa is ideal for multinational companies expanding their operations to the U.S. or transferring key personnel. L1 visa holders can bring their spouse and dependent children under the L2 visa category.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Chip 
                  label="Processing time: 2-3 months (standard) or 15 days (premium)" 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mr: 1, mb: 1 }} 
                />
                <Chip 
                  label="Duration: Up to 5-7 years" 
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
                  Requirements
                </Typography>
                <List>
                  <RequirementItem text="Employment with overseas company for at least 1 continuous year within the last 3 years" />
                  <RequirementItem text="Position in U.S. must be as a manager, executive, or specialized knowledge professional" />
                  <RequirementItem text="Qualifying relationship between the U.S. and foreign employer" />
                  <RequirementItem text="Form I-129 petition approved by USCIS" />
                  <RequirementItem text="Valid passport" />
                  <RequirementItem text="Evidence of qualifying employment abroad" />
                  <RequirementItem text="Letter from employer detailing duties and qualifications" />
                  <RequirementItem text="Documentation proving relationship between the companies" />
                </List>
              </Paper>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventNoteIcon sx={{ mr: 1, color: 'primary.main' }} />
                  Application Process
                </Typography>
                <List>
                  <ProcessItem number={1} text="U.S. employer files Form I-129 petition with USCIS" />
                  <ProcessItem number={2} text="Upon approval, applicant completes DS-160 form (if outside U.S.)" />
                  <ProcessItem number={3} text="Pay visa application fees" />
                  <ProcessItem number={4} text="Schedule and attend visa interview at U.S. embassy/consulate" />
                  <ProcessItem number={5} text="If approved, receive visa and travel to the U.S." />
                  <ProcessItem number={6} text="For blanket petitions: apply directly at U.S. consulate with Form I-129S" />
                </List>
                <Button 
                  variant="contained" 
                  color="primary" 
                  endIcon={<ArrowForwardIcon />}
                  component={RouterLink}
                  to="/contact"
                  sx={{ mt: 2 }}
                >
                  Inquire About This Visa
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
                  Other Visa Categories
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                In addition to the main visa categories, SSJS provides comprehensive consulting services for various other U.S. visa types designed for specific purposes and situations. Each visa category has its own specific requirements and application procedures.
              </Typography>
              <Typography variant="body1" paragraph>
                Our experts are well-versed in the nuances of all U.S. visa categories and can help you determine the most appropriate visa for your specific circumstances. We provide customized guidance for each visa type, ensuring that your application meets all the necessary requirements.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                endIcon={<ArrowForwardIcon />}
                component={RouterLink}
                to="/contact"
                sx={{ mt: 2 }}
              >
                Contact Us for Other Visa Types
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <InfoIcon sx={{ color: 'primary.main' }} />
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 0 }}>
                    Additional Visa Categories We Handle
                  </Typography>
                  <FlagIcon country="us" height={20} />
                </Stack>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>J-1 Exchange Visitor</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For educational and cultural exchange programs, including students, scholars, teachers, professors, research assistants, and trainees.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>O-1 Extraordinary Ability</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For individuals with extraordinary ability or achievement in sciences, arts, education, business, athletics, motion picture or television industry.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>E-1/E-2 Treaty Trader/Investor</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For individuals from countries with commerce and navigation treaties with the U.S. who are engaging in substantial trade or investing significantly in a U.S. business.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>K-1 Fiancé(e)</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For fiancé(e)s of U.S. citizens, allowing them to travel to the U.S. to marry their U.S. citizen petitioner within 90 days of arrival.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>R-1 Religious Worker</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For ministers and religious workers coming temporarily to the U.S. to work in a religious capacity.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>EB-5 Immigrant Investor</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      For investors who make a substantial investment in a new commercial enterprise in the U.S. that creates jobs for U.S. workers.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>

              <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <PersonIcon sx={{ mr: 1, color: 'primary.main' }} />
                  Our Services for All Visa Types
                </Typography>
                <List>
                  <RequirementItem text="Visa eligibility assessment" />
                  <RequirementItem text="Documentation preparation and review" />
                  <RequirementItem text="Form filling assistance" />
                  <RequirementItem text="Interview preparation" />
                  <RequirementItem text="Application status tracking" />
                  <RequirementItem text="Post-approval guidance" />
                </List>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Application Process Overview */}
        <Box sx={{ mt: 8 }}>
          <SectionTitle 
            title="General Application Process" 
            subtitle="Our Streamlined Approach to U.S. Visa Applications" 
            centered={true} 
          />
          
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="01"
                title="Initial Consultation"
                description="We begin with a comprehensive assessment of your situation to determine the most appropriate visa category and approach."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="02"
                title="Documentation"
                description="We help you gather and prepare all necessary documents according to the specific requirements of your visa type."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="03"
                title="Application Filing"
                description="We assist with completing forms accurately and submitting your application properly to maximize chances of approval."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProcessStep
                number="04"
                title="Interview Preparation"
                description="We thoroughly prepare you for the visa interview with practice sessions and strategic guidance."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      {/* India-US Connection Section */}
      <Box sx={{ bgcolor: '#f8f8f8', py: 6 }}>
        <Container maxWidth="lg">
          <SectionTitle 
            title="India-US Visa Partnership" 
            subtitle="Building Bridges Between Two Great Nations" 
            centered={true}
          />
          
          <Grid container spacing={4} alignItems="center">
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
                SSJS Visa Services is proud to facilitate cultural and professional exchanges between India and the United States. 
                Our expertise helps build stronger connections between these two dynamic nations.
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
                  Start Your Journey Today
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      150,000+
                    </Typography>
                    <Typography variant="body2">
                      Indian students in the US annually
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      $160 Billion
                    </Typography>
                    <Typography variant="body2">
                      In bilateral trade
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      4.8 Million
                    </Typography>
                    <Typography variant="body2">
                      Indian Americans in the US
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, textAlign: 'center', borderRadius: 2 }}>
                    <Typography variant="h5" fontWeight="bold" color="primary.main">
                      85,000+
                    </Typography>
                    <Typography variant="body2">
                      H1B visas issued annually
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