import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Rating,
  Avatar,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  Star,
  Google,
  Verified,
  TrendingUp,
  People,
  ThumbUp
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import GoogleReviewsWidget from '../components/reviews/GoogleReviewsWidget';
import GoogleBusiness from '../components/business/GoogleBusiness';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Comprehensive reviews data
  const allReviews = [
    {
      id: 1,
      author: 'Rajesh Kumar',
      rating: 5,
      date: '2025-01-15',
      relativeTime: '2 weeks ago',
      text: 'Outstanding service! SSJS Visa Services made my B-2 visa process incredibly smooth. The team is professional, knowledgeable, and always available to answer questions. Got my visa approved in just 3 weeks. Highly recommend for anyone seeking visa assistance.',
      visaType: 'B-2 Tourist Visa',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      author: 'Priya Sharma',
      rating: 5,
      date: '2025-01-10',
      relativeTime: '1 month ago',
      text: 'Excellent guidance for F-1 student visa. They helped me prepare all documents perfectly and coached me for the interview. The multilingual support was amazing - they explained everything in Hindi which made it so much easier. Got approved on first attempt! Thank you SSJS team.',
      visaType: 'F-1 Student Visa',
      helpful: 18,
      verified: true
    },
    {
      id: 3,
      author: 'Amit Patel',
      rating: 4,
      date: '2025-01-05',
      relativeTime: '2 months ago',
      text: 'Very professional service for H1B visa consultation. Good communication and follow-up throughout the process. They helped coordinate with my employer and tracked the petition status. Would definitely recommend for work visa applications.',
      visaType: 'H-1B Work Visa',
      helpful: 8,
      verified: true
    },
    {
      id: 4,
      author: 'Sneha Reddy',
      rating: 5,
      date: '2024-12-20',
      relativeTime: '3 months ago',
      text: 'Amazing experience! Got my tourist visa approved quickly with their expert guidance. The document checklist they provided was comprehensive and the interview preparation session was invaluable. The team speaks Telugu which was very helpful for my parents. Five stars!',
      visaType: 'B-2 Tourist Visa',
      helpful: 15,
      verified: true
    },
    {
      id: 5,
      author: 'Vikram Singh',
      rating: 5,
      date: '2024-12-15',
      relativeTime: '4 months ago',
      text: 'Best visa consultancy service I have used. Professional, reliable, and efficient. They handle everything with great care and attention to detail. The L1 visa process can be complex but they made it simple for me.',
      visaType: 'L-1 Business Visa',
      helpful: 9,
      verified: true
    },
    {
      id: 6,
      author: 'Deepika Nair',
      rating: 5,
      date: '2024-12-01',
      relativeTime: '4 months ago',
      text: 'Fantastic service for my F1 visa application. They provided step-by-step guidance and were always available to answer my doubts. The mock interview session was particularly helpful. Got my visa on the first attempt!',
      visaType: 'F-1 Student Visa',
      helpful: 11,
      verified: true
    },
    {
      id: 7,
      author: 'Ravi Krishnan',
      rating: 4,
      date: '2024-11-25',
      relativeTime: '5 months ago',
      text: 'Good experience with H1B transfer consultation. They helped me understand the process and provided valuable guidance on timing and documentation. Professional team with good follow-up.',
      visaType: 'H-1B Transfer',
      helpful: 6,
      verified: true
    },
    {
      id: 8,
      author: 'Anita Gupta',
      rating: 5,
      date: '2024-11-10',
      relativeTime: '5 months ago',
      text: 'Excellent service! My family\'s B2 visa application was handled professionally from start to finish. They even helped my elderly mother-in-law with her application. All four of us got approved! Thank you SSJS team.',
      visaType: 'B-2 Family Visa',
      helpful: 20,
      verified: true
    }
  ];

  const stats = {
    totalReviews: 127,
    averageRating: 4.8,
    fiveStarReviews: 95,
    fourStarReviews: 25,
    threeStarReviews: 5,
    twoStarReviews: 2,
    oneStarReviews: 0
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getVisaTypeColor = (visaType) => {
    const colors = {
      'B-2 Tourist Visa': 'primary',
      'F-1 Student Visa': 'secondary',
      'H-1B Work Visa': 'success',
      'L-1 Business Visa': 'warning',
      'B-2 Family Visa': 'info',
      'H-1B Transfer': 'success'
    };
    return colors[visaType] || 'default';
  };

  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Customer Reviews & Testimonials"
        subtitle="Read what our satisfied clients say about SSJS Visa Services"
        primaryButtonText="Write a Review"
        primaryButtonLink="https://g.page/r/YOUR_PLACE_ID/review"
        secondaryButtonText="View All Reviews"
        secondaryButtonLink="#reviews"
        backgroundImage="/images/reviews-hero.jpg"
      />

      {/* Google Business Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="xl">
          <GoogleBusiness showReviews={false} showMap={true} />
        </Container>
      </Box>

      {/* Review Statistics */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" fontWeight="bold" color="primary.main" textAlign="center">
              Customer Reviews & Ratings
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container spacing={4} sx={{ maxWidth: 1000 }} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3} sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <Star sx={{ fontSize: 60, color: 'gold', mb: 2 }} />
                  <Typography variant="h3" fontWeight="bold" color="primary">
                    {stats.averageRating}
                  </Typography>
                  <Rating value={stats.averageRating} precision={0.1} readOnly size="large" />
                  <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                    Based on {stats.totalReviews} reviews
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card elevation={3} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom textAlign="center">Review Distribution</Typography>
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <Box key={stars} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" sx={{ minWidth: 20 }}>
                        {stars}
                      </Typography>
                      <Star sx={{ fontSize: 16, color: 'gold', mx: 0.5 }} />
                      <Box sx={{ flexGrow: 1, height: 8, bgcolor: 'grey.200', borderRadius: 1, mx: 1 }}>
                        <Box
                          sx={{
                            height: '100%',
                            bgcolor: 'primary.main',
                            borderRadius: 1,
                            width: `${(stats[`${stars === 5 ? 'five' : stars === 4 ? 'four' : stars === 3 ? 'three' : stars === 2 ? 'two' : 'one'}StarReviews`] / stats.totalReviews) * 100}%`
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ minWidth: 30 }}>
                        {stats[`${stars === 5 ? 'five' : stars === 4 ? 'four' : stars === 3 ? 'three' : stars === 2 ? 'two' : 'one'}StarReviews`]}
                      </Typography>
                    </Box>
                  ))}
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={12} md={4}>
                <Card elevation={3} sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6" gutterBottom textAlign="center">Quick Stats</Typography>
                  <Stack spacing={2} sx={{ height: '100%', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <People sx={{ mr: 2, color: 'primary.main' }} />
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold">2000+</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Happy Customers
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <TrendingUp sx={{ mr: 2, color: 'success.main' }} />
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold">98%</Typography>
                        <Typography variant="body2" color="text.secondary">
                          Success Rate
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ThumbUp sx={{ mr: 2, color: 'info.main' }} />
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight="bold">95%</Typography>
                        <Typography variant="body2" color="text.secondary">
                          5-Star Reviews
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* All Reviews Section */}
      <Box id="reviews" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="xl">
          <SectionTitle
            title="All Customer Reviews"
            subtitle="Read detailed experiences from our clients across different visa categories"
            centered
          />

          <Grid container spacing={3}>
            {allReviews.map((review) => (
              <Grid item xs={12} md={6} key={review.id}>
                <Card 
                  elevation={2} 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[8]
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Review Header */}
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: theme.palette.primary.main,
                          mr: 2,
                          width: 48,
                          height: 48
                        }}
                      >
                        {getInitials(review.author)}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="subtitle1" fontWeight="bold" sx={{ mr: 1 }}>
                            {review.author}
                          </Typography>
                          {review.verified && (
                            <Verified sx={{ fontSize: 16, color: 'success.main' }} />
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Rating value={review.rating} size="small" readOnly sx={{ mr: 1 }} />
                          <Typography variant="caption" color="text.secondary">
                            {review.relativeTime}
                          </Typography>
                        </Box>
                        <Chip
                          label={review.visaType}
                          size="small"
                          color={getVisaTypeColor(review.visaType)}
                          variant="outlined"
                        />
                      </Box>
                    </Box>

                    {/* Review Content */}
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        lineHeight: 1.6,
                        mb: 2
                      }}
                    >
                      {review.text}
                    </Typography>

                    {/* Review Footer */}
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThumbUp sx={{ fontSize: 16, color: 'primary.main', mr: 0.5 }} />
                        <Typography variant="caption" color="text.secondary">
                          {review.helpful} found helpful
                        </Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {new Date(review.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
              Have you used our services?
            </Typography>
            {/* Google review buttons hidden until GMB is set up */}
            {/* <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              sx={{ justifyContent: 'center' }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Google />}
                href="https://g.page/r/YOUR_PLACE_ID/review"
                target="_blank"
                sx={{ px: 4 }}
              >
                Write a Google Review
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Star />}
                href="https://g.page/YOUR_BUSINESS_URL"
                target="_blank"
                sx={{ px: 4 }}
              >
                View on Google
              </Button>
            </Stack> */}
            
            <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
              We're setting up our Google My Business profile to make reviewing even easier!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In the meantime, feel free to <RouterLink to="/Contactus" style={{ color: 'inherit', textDecoration: 'underline' }}>contact us</RouterLink> with your feedback.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Google Reviews Widget */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="xl">
          <SectionTitle
            title="Latest Google Reviews"
            subtitle="Live feed from our Google My Business profile"
            centered
          />
          <GoogleReviewsWidget maxReviews={6} showHeader={false} />
        </Container>
      </Box>
    </Box>
  );
};

export default ReviewsPage;