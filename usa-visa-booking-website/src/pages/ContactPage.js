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
import { useTranslation } from 'react-i18next';
import { useLanguageStyles, applyLanguageStyles } from '../styles/LanguageStyles';



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
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languageStyles = useLanguageStyles(currentLanguage);

  const visaTypes = [
    { value: 'tourist', label: t('contact.form.visaTypes.tourist') },
    { value: 'business', label: t('contact.form.visaTypes.business') },
    { value: 'student', label: t('contact.form.visaTypes.student') },
    { value: 'work', label: t('contact.form.visaTypes.work') },
    { value: 'family', label: t('contact.form.visaTypes.family') },
    { value: 'investment', label: t('contact.form.visaTypes.investment') },
    { value: 'other', label: t('contact.form.visaTypes.other') },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      visaType: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t('contact.form.required')),
      lastName: Yup.string().required(t('contact.form.required')),
      email: Yup.string().email(t('contact.form.invalidEmail')).required(t('contact.form.required')),
      visaType: Yup.string().required(t('contact.form.required')),
      message: Yup.string().required(t('contact.form.required')).min(20, t('contact.form.message') + ' should be at least 20 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      
      try {
        // Method 1: Using EmailJS (Client-side)
        await sendEmailWithEmailJS(values);
        
        // Method 2: Using your own backend API (uncomment if you have a backend)
        // await sendEmailWithBackend(values);
        
        setSnackbarMessage(t('contact.success'));
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        console.error('Error sending email:', error);
        setSnackbarMessage(t('contact.error'));
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
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
        backgroundImage={images.heroContact}
        height="65vh"
      />

      {/* Contact Form Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, sm: 6, md: 8, lg: 12 }} sx={{ alignItems: 'flex-start' }}>
            <Grid item xs={12} md={6} sx={{ minHeight: { md: '300px' } }}>
              <Box>
                <SectionTitle 
                  title={t('contact.quickContact')} 
                  subtitle={t('contact.contactInfo')} 
                  centered={false}
                  sx={{
                    '& .MuiTypography-h2': applyLanguageStyles('h2', languageStyles),
                    '& .MuiTypography-body1': applyLanguageStyles('subtitle', languageStyles)
                  }}
                />
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2 }} />
                  <Typography 
                    variant="body1"
                    sx={{
                      ...languageStyles.typography,
                      ...languageStyles.body
                    }}
                  >
                    <Link href="tel:+919361696954" color="inherit" underline="hover">
                      +91 93616 96954
                    </Link>
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon color="primary" sx={{ mr: 2 }} />
                  <Typography 
                    variant="body1"
                    sx={{
                      ...languageStyles.typography,
                      ...languageStyles.body
                    }}
                  >
                    <Link href="mailto:sssj.b1b285@gmail.com" color="inherit" underline="hover">
                      sssj.b1b285@gmail.com
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6} sx={{ minHeight: { md: '300px' } }}>
              <SectionTitle 
                title={t('contact.sendUsRequirement')} 
                subtitle={t('contact.fillOutForm')} 
                centered={false}
                sx={{
                  '& .MuiTypography-h2': applyLanguageStyles('h2', languageStyles),
                  '& .MuiTypography-body1': applyLanguageStyles('subtitle', languageStyles)
                }}
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
                      WebkitTextFillColor: 'transparent',
                      ...applyLanguageStyles('h4', languageStyles)
                    }}
                  >
                    {t('contact.getStartedToday')}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{
                      ...applyLanguageStyles('body1', languageStyles),
                      mb: 2
                    }}
                  >
                    {t('contact.subtitle')}
                  </Typography>
                </Box>

                <form onSubmit={formik.handleSubmit}>
                  <Box sx={{ mb: 4 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 3, 
                        fontWeight: 600, 
                        color: 'text.primary',
                        ...applyLanguageStyles('h6', languageStyles)
                      }}
                    >
                      {t('contact.personalInfo')}
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          fullWidth
                          id="firstName"
                          name="firstName"
                          label={t('contact.form.firstName')}
                          placeholder={t('contact.form.firstNamePlaceholder')}
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
                          label={t('contact.form.lastName')}
                          placeholder={t('contact.form.lastNamePlaceholder')}
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
                          label={t('contact.form.email')}
                          placeholder={t('contact.form.emailPlaceholder')}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && Boolean(formik.errors.email)}
                          helperText={formik.touched.email && formik.errors.email}
                          variant="outlined"
                          sx={{
                            pr: 3,
                            mr: 0,
                            width: 'calc(100% - 24px)',
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: '#fff',
                              height: '48px',
                              fontSize: '1rem',
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

                  <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
                    <Grid item xs={12} md={6} sx={{ minHeight: { md: '500px' } }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3, 
                          fontWeight: 600, 
                          color: 'text.primary',
                          ...applyLanguageStyles('h6', languageStyles)
                        }}
                      >
                        {t('contact.visaServiceType')}
                      </Typography>
                      <Box sx={{ display: 'grid', gap: 1.5 }}>
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
                            <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography 
                                  variant="body1" 
                                  sx={{ 
                                    fontWeight: formik.values.visaType === option.value ? 600 : 500,
                                    color: formik.values.visaType === option.value ? 'primary.dark' : 'text.primary',
                                    fontSize: '0.95rem'
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

                    <Grid item xs={12} md={6} sx={{ minHeight: { md: '500px' } }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3, 
                          fontWeight: 600, 
                          color: 'text.primary',
                          ...applyLanguageStyles('h6', languageStyles)
                        }}
                      >
                        {t('contact.tellUs')}
                      </Typography>
                      <TextField
                        fullWidth
                        id="message"
                        name="message"
                        label={t('contact.form.message')}
                        placeholder={t('contact.form.messagePlaceholder')}
                        multiline
                        rows={14}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                        variant="outlined"
                        sx={{
                          pr: 3,
                          mr: 0,
                          width: 'calc(100% + 60px)',
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
                          mb: 3,
                          ...languageStyles.textField
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
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
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
          title={t('contact.faq.title')} 
          subtitle={t('contact.faq.subtitle')} 
          centered={true}
          sx={{
            '& .MuiTypography-h2': applyLanguageStyles('h2', languageStyles),
            '& .MuiTypography-body1': applyLanguageStyles('subtitle', languageStyles)
          }}
        />
        
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          <Grid item xs={12} md={6} sx={{ minHeight: { md: '400px' } }}>
            {t('contact.faq.items', { returnObjects: true }).slice(0, 3).map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question} 
                answer={item.answer}
                languageStyles={languageStyles}
              />
            ))}
          </Grid>
          <Grid item xs={12} md={6} sx={{ minHeight: { md: '400px' } }}>
            {t('contact.faq.items', { returnObjects: true }).slice(3, 6).map((item, index) => (
              <FAQItem 
                key={index}
                question={item.question} 
                answer={item.answer}
                languageStyles={languageStyles}
              />
            ))}
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
const ContactCard = ({ icon, title, content, bgColor, languageStyles = {} }) => (
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
      <Typography 
        variant="h5" 
        component="h3" 
        gutterBottom 
        fontWeight={600}
        sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
      >
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

const FAQItem = ({ question, answer, languageStyles = {} }) => (
  <Box sx={{ mb: 3 }}>
    <Typography 
      variant="h6" 
      gutterBottom 
      fontWeight={600} 
      color="primary.main"
      sx={applyLanguageStyles('h6', languageStyles)}
    >
      {question}
    </Typography>
    <Typography 
      variant="body1" 
      color="text.secondary"
      sx={applyLanguageStyles('body1', languageStyles)}
    >
      {answer}
    </Typography>
  </Box>
);

export default ContactPage;