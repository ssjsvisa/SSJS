import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Rating,
  Avatar,
  Chip,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Star,
  StarBorder,
  Google,
  Map,
  Close,
  Business,
  LocationOn,
  Phone,
  Schedule
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Mock reviews data - replace with actual Google Reviews API data
// Helper to get a date string N days ago from today
function getRecentDate(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

const mockReviews = [
  {
    id: 1,
    author: 'Rajesh Kumar',
    rating: 5,
    date: getRecentDate(1),
    text: 'Excellent service! SSJS Visa Services helped me get my B2 visa approved quickly. Very professional and knowledgeable staff.',
    avatar: 'RK'
  },
  {
    id: 2,
    author: 'Priya Sharma',
    rating: 5,
    date: getRecentDate(3),
    text: 'Great experience with F1 visa process. They guided me through every step and made it very smooth. Highly recommended!',
    avatar: 'PS'
  },
  {
    id: 3,
    author: 'Amit Patel',
    rating: 4,
    date: getRecentDate(5),
    text: 'Professional service for H1B visa consultation. Good support throughout the process.',
    avatar: 'AP'
  }
];

const GoogleBusiness = ({ showReviews = true, showMap = true, compact = false }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);

  // Calculate average rating
  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;
  const totalReviews = mockReviews.length;

  const businessInfo = {
    name: 'SSJS Visa Services',
    address: 'Chennai, Tamil Nadu, India',
    phone: '+91-XXXXXXXXXX',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    website: 'https://ssjsus.web.app/SSJS/',
    googleMapsUrl: 'https://maps.google.com/maps?q=SSJS+Visa+Services+Chennai',
    googleBusinessUrl: 'https://business.google.com/n/your-business-id' // Replace with actual URL
  };

  return (
    <Box sx={{ width: '100%' }}>
      {/* Google Business Header */}
      <Card 
        elevation={3} 
        sx={{ 
          mb: 3,
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white'
        }}
      >
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Business sx={{ mr: 2, fontSize: 32 }} />
                <Box>
                  <Typography variant="h5" component="h2" fontWeight="bold">
                    {businessInfo.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                    Professional USA Visa Consultancy
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating 
                  value={averageRating} 
                  precision={0.1} 
                  readOnly 
                  sx={{ color: '#ffd700' }}
                />
                <Typography variant="body2" sx={{ ml: 1, opacity: 0.9 }}>
                  {averageRating.toFixed(1)} ({totalReviews} {t('reviews', 'reviews')})
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                <Chip 
                  icon={<LocationOn />} 
                  label={businessInfo.address}
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
                />
                <Chip 
                  icon={<Phone />} 
                  label={businessInfo.phone}
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
                />
                {/* Business hours hidden for now */}
                {/* <Chip 
                  icon={<Schedule />} 
                  label={businessInfo.hours}
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
                /> */}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {/* View on Google button hidden until GMB is set up */}
                {/* <Button
                  variant="contained"
                  startIcon={<Google />}
                  href={businessInfo.googleBusinessUrl}
                  target="_blank"
                  sx={{ 
                    bgcolor: 'white', 
                    color: theme.palette.primary.main,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                  }}
                >
                  View on Google
                </Button> */}
                
                {showMap && (
                  <Button
                    variant="outlined"
                    startIcon={<Map />}
                    onClick={() => setMapDialogOpen(true)}
                    sx={{ 
                      color: 'white', 
                      borderColor: 'rgba(255,255,255,0.5)',
                      '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                    }}
                  >
                    View Map
                  </Button>
                )}
                
                {/* Write Review button hidden until GMB is set up */}
                {/* <Button
                  variant="outlined"
                  startIcon={<Star />}
                  href={`${businessInfo.googleBusinessUrl}/reviews`}
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    borderColor: 'rgba(255,255,255,0.5)',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Write Review
                </Button> */}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Reviews Section */}
      {showReviews && (
        <Card elevation={2}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" component="h3" fontWeight="bold">
                Customer Reviews
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {mockReviews.map((review) => (
                <Grid item xs={12} md={6} key={review.id}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                          {review.avatar}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {review.author}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Rating value={review.rating} size="small" readOnly />
                            <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                              {new Date(review.date).toLocaleDateString()}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {review.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              {/* Google Review buttons hidden until GMB is set up */}
              {/* <Button
                variant="contained"
                startIcon={<Google />}
                href={`${businessInfo.googleBusinessUrl}/reviews`}
                target="_blank"
                sx={{ mr: 2 }}
              >
                Read All Google Reviews
              </Button>
              <Button
                variant="outlined"
                startIcon={<Star />}
                href={`${businessInfo.googleBusinessUrl}/write-review`}
                target="_blank"
              >
                Write a Review
              </Button> */}
              
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={RouterLink}
                to="/Reviews"
                sx={{ fontWeight: 'bold', borderRadius: 2 }}
              >
                See All Reviews
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Google Maps Dialog */}
      <Dialog
        open={mapDialogOpen}
        onClose={() => setMapDialogOpen(false)}
        maxWidth="md"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">SSJS Visa Services Location</Typography>
          <IconButton onClick={() => setMapDialogOpen(false)} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, height: isMobile ? '100%' : 400 }}>
          {/* Google Maps Embed - Chennai Location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.06145994781491!3d13.047487449698795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SSJS Visa Services Location - Chennai"
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default GoogleBusiness;