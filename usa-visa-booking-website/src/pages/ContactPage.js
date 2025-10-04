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
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { images } from '../assets/images/imageUrls';

const visaTypes = [
  { value: 'B1/B2', label: 'B1/B2 Tourist & Business Visa' },
  { value: 'F1', label: 'F1 Student Visa' },
  { value: 'H1B', label: 'H1B Work Visa' },
  { value: 'L1', label: 'L1 Intra-company Transfer Visa' },
  { value: 'Other', label: 'Other Visa Types' },
];

// Email sending functions
const sendEmailWithEmailJS = async (formData) => {
  // Import EmailJS
  const emailjs = await import('@emailjs/browser');
  
  // EmailJS configuration from environment variables
  const emailJSConfig = {
    serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    userID: process.env.REACT_APP_EMAILJS_USER_ID,
  };

  // Check if all required config values are present
  if (!emailJSConfig.serviceID || !emailJSConfig.templateID || !emailJSConfig.userID) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }

  const templateParams = {
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    visa_type: formData.visaType,
    message: formData.message,
    to_email: 'sssj.b1b285@gmail.com', // Your email
  };

  console.log('Sending email with params:', templateParams);
  console.log('EmailJS config:', emailJSConfig);

  const response = await emailjs.send(
    emailJSConfig.serviceID,
    emailJSConfig.templateID,
    templateParams,
    emailJSConfig.userID
  );
  
  return response;
};

const sendEmailWithBackend = async (formData) => {
  // Backend API approach
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      visaType: formData.visaType,
      message: formData.message,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return response.json();
};

const ContactPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      visaType: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      visaType: Yup.string().required('Please select a visa type'),
      message: Yup.string().required('Message is required').min(20, 'Message should be at least 20 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      
      try {
        // Method 1: Using EmailJS (Client-side)
        await sendEmailWithEmailJS(values);
        
        // Method 2: Using your own backend API (uncomment if you have a backend)
        // await sendEmailWithBackend(values);
        
        setSnackbarMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        console.error('Error sending email:', error);
        setSnackbarMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } finally {
        setIsSubmitting(false);
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
      />

      {/* Contact Form Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={12}>
            <Grid item xs={12} md={6}>
              <Box>
                <SectionTitle 
                  title="Quick Contact" 
                  subtitle="Reach out to us directly" 
                  centered={false} 
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    <Link href="tel:+919361696954" color="inherit" underline="hover">
                      +91 93616 96954
                    </Link>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Typography variant="body1">
                    <Link href="mailto:sssj.b1b285@gmail.com" color="inherit" underline="hover">
                      sssj.b1b285@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <SectionTitle 
                title="Send Us Requirement or Feedback" 
                subtitle="Fill out the form below, and we'll get back to you soon" 
                centered={false} 
              />
              
              <Paper 
                elevation={8} 
                sx={{ 
                  p: 5, 
                  borderRadius: 4, 
                  background: 'linear-gradient(135deg, #f8faff 0%, #ffffff 100%)',
                  border: '1px solid rgba(25, 118, 210, 0.12)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
                }}
              >
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'primary.main', 
                      mb: 1,
                      background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Get Started Today
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Fill out the form below and our visa experts will contact you within 24 hours
                  </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                      Personal Information
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          id="firstName"
                          name="firstName"
                          label="First Name"
                          placeholder="Enter your first name"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                          helperText={formik.touched.firstName && formik.errors.firstName}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: '#fff',
                              height: '48px',
                              display: 'flex',
                              alignItems: 'center',
                              '& input': {
                                padding: '0 14px',
                                fontSize: '1rem',
                                height: '100%',
                                lineHeight: 'normal',
                              },
                              '&:hover': {
                                '& > fieldset': {
                                  borderColor: 'primary.main',
                                }
                              },
                              '&.Mui-focused': {
                                '& > fieldset': {
                                  borderWidth: '2px',
                                }
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '1rem',
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          fullWidth
                          id="lastName"
                          name="lastName"
                          label="Last Name"
                          placeholder="Enter your last name"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                          helperText={formik.touched.lastName && formik.errors.lastName}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: '#fff',
                              height: '48px',
                              display: 'flex',
                              alignItems: 'center',
                              '& input': {
                                padding: '0 14px',
                                fontSize: '1rem',
                                height: '100%',
                                lineHeight: 'normal',
                              },
                              '&:hover': {
                                '& > fieldset': {
                                  borderColor: 'primary.main',
                                }
                              },
                              '&.Mui-focused': {
                                '& > fieldset': {
                                  borderWidth: '2px',
                                }
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '1rem',
                            }
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          id="email"
                          name="email"
                          label="Email Address"
                          placeholder="Enter your email address"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          variant="outlined"
                          sx={{
                            width: '120%',
                            maxWidth: 'calc(100% + 80px)',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: '#fff',
                              height: '48px',
                              fontSize: '1rem',
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              '& input': {
                                padding: '0 20px',
                                fontSize: '1rem',
                                height: '100%',
                                lineHeight: 'normal',
                              },
                              '&:hover': {
                                '& > fieldset': {
                                  borderColor: 'primary.main',
                                }
                              },
                              '&.Mui-focused': {
                                '& > fieldset': {
                                  borderWidth: '2px',
                                }
                              }
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '1rem',
                            }
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                        Visa Service Type
                      </Typography>
                      <Box sx={{ display: 'grid', gap: 2 }}>
                        {visaTypes.map((option) => (
                          <Card
                            key={option.value}
                            onClick={() => formik.setFieldValue('visaType', option.value)}
                            sx={{
                              p: 0,
                              cursor: 'pointer',
                              border: '2px solid',
                              borderColor: formik.values.visaType === option.value ? 'primary.main' : 'divider',
                              borderRadius: 3,
                              backgroundColor: formik.values.visaType === option.value ? 'primary.50' : '#fff',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              boxShadow: formik.values.visaType === option.value ? '0 8px 24px rgba(25, 118, 210, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.08)',
                              '&:hover': {
                                borderColor: 'primary.main',
                                backgroundColor: formik.values.visaType === option.value ? 'primary.50' : 'primary.25',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 12px 32px rgba(25, 118, 210, 0.2)',
                              }
                            }}
                          >
                            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography 
                                  variant="body1" 
                                  sx={{ 
                                    fontWeight: formik.values.visaType === option.value ? 600 : 500,
                                    color: formik.values.visaType === option.value ? 'primary.dark' : 'text.primary',
                                    fontSize: '1rem'
                                  }}
                                >
                                  {option.label}
                                </Typography>
                                <Box
                                  sx={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: '50%',
                                    border: '2px solid',
                                    borderColor: formik.values.visaType === option.value ? 'primary.main' : 'divider',
                                    backgroundColor: formik.values.visaType === option.value ? 'primary.main' : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  {formik.values.visaType === option.value && (
                                    <Box
                                      sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        backgroundColor: 'white'
                                      }}
                                    />
                                  )}
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        ))}
                        {formik.touched.visaType && formik.errors.visaType && (
                          <Typography 
                            variant="caption" 
                            color="error" 
                            sx={{ mt: 1, fontSize: '0.875rem', fontWeight: 500 }}
                          >
                            {formik.errors.visaType}
                          </Typography>
                        )}
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
                        Tell Us About Your Requirements or Feedback
                      </Typography>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label="Your Message"
                        placeholder="Please share your feedback about our services, suggestions for improvement, questions about our visa assistance process, or any other comments you'd like us to know. Your feedback helps us serve you better."
                        multiline
                        rows={14}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        variant="outlined"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            backgroundColor: '#fff',
                            '&:hover': {
                              '& > fieldset': {
                                borderColor: 'primary.main',
                              }
                            },
                            '&.Mui-focused': {
                              '& > fieldset': {
                                borderWidth: '2px',
                              }
                            }
                          },
                          mb: 3
                        }}
                      />
                      <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        fullWidth
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        sx={{ 
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: 3,
                          background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                          boxShadow: '0 4px 16px rgba(25, 118, 210, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                            boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                            transform: 'translateY(-1px)',
                          },
                          '&:disabled': {
                            background: 'rgba(25, 118, 210, 0.6)',
                            color: 'white',
                          },
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
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