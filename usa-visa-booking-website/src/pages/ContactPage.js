import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  MenuItem,
  Snackbar,
  Alert,
  Card,
  CardContent,
  Link,
  useTheme,
  useMediaQuery,
  CircularProgress
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { images } from '../assets/images/imageUrls';

const visaTypes = [
  { value: 'B1/B2', label: 'B1/B2 Tourist & Business Visa' },
  { value: 'F1', label: 'F1 Student Visa' },
  { value: 'H1B', label: 'H1B Work Visa' },
  { value: 'L1', label: 'L1 Intra-company Transfer Visa' },
  { value: 'Other', label: 'Other Visa Types' },
  { value: 'Not Sure', label: 'Not Sure - Need Guidance' },
];

const ContactPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      visaType: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      visaType: Yup.string().required('Please select a visa type'),
      message: Yup.string().required('Message is required').min(20, 'Message should be at least 20 characters'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setLoading(true);
      try {
        // Send data to the server
        const response = await axios.post('http://localhost:3001/api/send-email', values, {
          timeout: 5000 // 5 second timeout
        });
        
        // Handle success
        setSnackbarMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Handle different types of errors
        let errorMessage = 'Sorry, there was an error sending your message. Please try again or email us directly.';
        let showFallbackLink = false;
        
        if (error.response) {
          // Server responded with an error status code
          console.log('Error response data:', error.response.data);
          errorMessage = error.response.data.message || errorMessage;
          
          if (error.response.data.error && error.response.data.error.includes('Username and Password not accepted')) {
            errorMessage = 'Email server configuration error. Please contact the administrator.';
          }
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = 'Cannot connect to the email server. Please copy your message and send it manually.';
          showFallbackLink = true;
        } else if (error.code === 'ECONNABORTED') {
          errorMessage = 'Server request timed out. Please try again or send your message manually.';
          showFallbackLink = true;
        }
        
        setSnackbarMessage(errorMessage);
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        
        // If server is not reachable, open mailto link
        if (showFallbackLink) {
          const { firstName, lastName, email, phone, visaType, message } = values;
          const subject = `${visaType} Visa Inquiry`;
          const body = `Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Visa Type: ${visaType}

${message}`;
          
          const mailtoLink = `mailto:info@ssjsvisaservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          // Ask user if they want to open email client
          if (window.confirm('Would you like to open your email client to send the message directly?')) {
            window.open(mailtoLink, '_blank');
          }
        }
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Contact Our Visa Experts"
        subtitle="Get personalized guidance for your visa application journey"
        backgroundImage={images.heroContact}
        height="65vh"
        buttonText="Schedule Consultation"
        buttonLink="#contact-form"
      />

      {/* Contact Information Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle 
          title="Get in Touch" 
          subtitle="We're here to help with all your visa needs" 
          centered={true} 
        />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ContactCard 
              icon={<LocationOnIcon fontSize="large" />}
              title="Our Location"
              content={[
                "123 Visa Street,",
                "Business District,",
                "City, State 12345",
              ]}
              bgColor="primary.main"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ContactCard 
              icon={<PhoneIcon fontSize="large" />}
              title="Phone & Email"
              content={[
                "Phone: [Insert Mobile Number]",
                "Email: [Insert Email Address]",
                "Fax: +1 (123) 456-7890",
              ]}
              bgColor="secondary.main"
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ContactCard 
              icon={<AccessTimeIcon fontSize="large" />}
              title="Business Hours"
              content={[
                "Monday - Friday: 9:00 AM - 6:00 PM",
                "Saturday: 10:00 AM - 2:00 PM",
                "Sunday: Closed",
              ]}
              bgColor="primary.dark"
            />
          </Grid>
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <SectionTitle 
                title="Send Us a Message" 
                subtitle="Fill out the form below, and we'll get back to you soon" 
                centered={false} 
              />
              
              <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="visaType"
                        name="visaType"
                        select
                        label="Visa Type"
                        value={formik.values.visaType}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.visaType && Boolean(formik.errors.visaType)}
                        helperText={formik.touched.visaType && formik.errors.visaType}
                        margin="normal"
                      >
                        {visaTypes.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label="Message"
                        multiline
                        rows={4}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        sx={{ mt: 2 }}
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        You can also email us directly at <Link href="mailto:info@ssjsvisaservices.com">info@ssjsvisaservices.com</Link> for faster response.
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <SectionTitle 
                title="Our Location" 
                subtitle="Visit us at our office" 
                centered={false} 
              />
              
              {/* Map (placeholder) - Replace with actual map */}
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 2, 
                  borderRadius: 2, 
                  height: isMobile ? '300px' : '400px',
                  overflow: 'hidden'
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    Map placeholder - Insert Google Map here
                  </Typography>
                </Box>
              </Paper>
              
              <Box sx={{ mt: 4 }}>
                <SectionTitle 
                  title="Direct Contact Options" 
                  subtitle="Email us for fastest response" 
                  centered={false} 
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1">
                      <Link href="tel:+1234567890" color="inherit" underline="hover">
                        +1 (234) 567-890
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      Available Monday-Friday, 9:00 AM - 6:00 PM EST
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="body1">
                      <Link href="mailto:info@ssjsvisaservices.com" color="inherit" underline="hover">
                        info@ssjsvisaservices.com
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      Please send your inquiries directly to this email address and we'll respond within 24-48 hours.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Common questions about contacting us" 
          centered={true} 
        />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FAQItem 
              question="What information should I prepare before the consultation?" 
              answer="Before your consultation, it's helpful to have details about your travel plans, purpose of visit, personal information, employment history, and any previous U.S. visa applications or denials."
            />
            <FAQItem 
              question="How long does it take to get a response after submitting the contact form?" 
              answer="We typically respond to all inquiries within 24-48 business hours. For urgent matters, we recommend calling us directly."
            />
            <FAQItem 
              question="Do you offer remote consultations?" 
              answer="Yes, we offer consultations via phone, video call, or email for clients who cannot visit our office in person."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FAQItem 
              question="Is there a fee for initial consultations?" 
              answer="We offer a complimentary 15-minute initial assessment. For more detailed consultations, there is a nominal fee that can be applied toward future services if you decide to proceed with us."
            />
            <FAQItem 
              question="What languages do your consultants speak?" 
              answer="Our consultants are fluent in English, Spanish, Mandarin, Hindi, and Arabic to better serve our diverse clientele."
            />
            <FAQItem 
              question="Can you help with urgent visa applications?" 
              answer="Yes, we offer expedited services for urgent cases, though additional fees may apply. Please contact us directly to discuss your specific timeline and needs."
            />
          </Grid>
        </Grid>
      </Container>
      
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
          {snackbarSeverity === 'success' && (
            <> For immediate assistance, please email us directly at <Link href="mailto:info@ssjsvisaservices.com" color="inherit">info@ssjsvisaservices.com</Link>.</>
          )}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Helper Components
const ContactCard = ({ icon, title, content, bgColor }) => (
  <Card 
    sx={{ 
      height: '100%',
      textAlign: 'center',
      overflow: 'visible',
      position: 'relative',
      pt: 5,
      pb: 3,
      borderRadius: 3,
    }}
  >
    <Box 
      sx={{ 
        position: 'absolute',
        top: -30,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 70,
        height: 70,
        borderRadius: '50%',
        bgcolor: bgColor || 'primary.main',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {icon}
    </Box>
    <CardContent sx={{ pt: 3 }}>
      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
        {title}
      </Typography>
      {content.map((line, index) => (
        <Typography key={index} variant="body1" color="text.secondary" paragraph={index < content.length - 1}>
          {line}
        </Typography>
      ))}
    </CardContent>
  </Card>
);

const FAQItem = ({ question, answer }) => (
  <Box sx={{ mb: 3 }}>
    <Typography variant="h6" gutterBottom fontWeight={600} color="primary.main">
      {question}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {answer}
    </Typography>
  </Box>
);

export default ContactPage;