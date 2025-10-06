import React, { useState, useEffect } from 'react';
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
  Skeleton,
  Alert,
  useTheme
} from '@mui/material';
import {
  Star,
  Google,
  TrendingUp,
  Verified
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// Google Reviews Widget Component
const GoogleReviewsWidget = ({ 
  placeId = '', // Your Google Places ID
  maxReviews = 5,
  showHeader = true,
  compact = false 
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [businessData, setBusinessData] = useState(null);

  // Mock data for demonstration - replace with actual Google Places API
  const mockBusinessData = {
    name: 'SSJS Visa Services',
    rating: 4.8,
    totalReviews: 127,
    verified: true,
    categories: ['Visa Service', 'Immigration Consultant', 'Travel Agency']
  };

  const mockReviewsData = [
    {
      id: 1,
      author: 'Rajesh Kumar',
      authorPhoto: null,
      rating: 5,
      relativeTime: '2 weeks ago',
      text: 'Outstanding service! SSJS Visa Services made my B-2 visa process incredibly smooth. The team is professional, knowledgeable, and always available to answer questions. Highly recommend for anyone seeking visa assistance.',
      helpful: 12
    },
    {
      id: 2,
      author: 'Priya Sharma',
      authorPhoto: null,
      rating: 5,
      relativeTime: '1 month ago',
      text: 'Excellent guidance for F-1 student visa. They helped me prepare all documents perfectly and coached me for the interview. Got approved on first attempt! Thank you SSJS team.',
      helpful: 8
    },
    {
      id: 3,
      author: 'Amit Patel',
      authorPhoto: null,
      rating: 4,
      relativeTime: '2 months ago',
      text: 'Very professional service for H1B visa consultation. Good communication and follow-up throughout the process. Would definitely recommend.',
      helpful: 5
    },
    {
      id: 4,
      author: 'Sneha Reddy',
      authorPhoto: null,
      rating: 5,
      relativeTime: '3 months ago',
      text: 'Amazing experience! Got my tourist visa approved quickly with their expert guidance. The multilingual support was very helpful. Five stars!',
      helpful: 15
    },
    {
      id: 5,
      author: 'Vikram Singh',
      authorPhoto: null,
      rating: 5,
      relativeTime: '4 months ago',
      text: 'Best visa consultancy service I have used. Professional, reliable, and efficient. They handle everything with great care and attention to detail.',
      helpful: 9
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would fetch from Google Places API
        // const response = await fetch(`/api/google-reviews/${placeId}`);
        // const data = await response.json();
        
        // For now, use mock data
        setTimeout(() => {
          setBusinessData(mockBusinessData);
          setReviews(mockReviewsData.slice(0, maxReviews));
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, maxReviews]);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderSkeleton = () => (
    <Box>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', mb: 2 }}>
              <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="60%" />
              </Box>
            </Box>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  if (loading) return renderSkeleton();
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header */}
      {showHeader && businessData && (
        <Card 
          elevation={3} 
          sx={{ 
            mb: 3,
            background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)',
            color: 'white'
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Google sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h5" component="h2" fontWeight="bold" sx={{ mr: 1 }}>
                      {businessData.name}
                    </Typography>
                    {businessData.verified && (
                      <Verified sx={{ color: '#4CAF50', fontSize: 20 }} />
                    )}
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating 
                      value={businessData.rating} 
                      precision={0.1} 
                      readOnly 
                      sx={{ color: '#FFD700' }}
                    />
                    <Typography variant="h6" sx={{ ml: 1, mr: 1 }}>
                      {businessData.rating}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      ({businessData.totalReviews} reviews)
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {businessData.categories.map((category, index) => (
                      <Chip
                        key={index}
                        label={category}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          color: 'white', 
                          borderColor: 'rgba(255,255,255,0.5)',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                {/* Write Review button hidden until GMB is set up */}
                {/* <Button
                  variant="contained"
                  startIcon={<Star />}
                  href="https://g.page/r/YOUR_PLACE_ID/review" // Replace with actual review URL
                  target="_blank"
                  sx={{ 
                    bgcolor: 'white', 
                    color: theme.palette.primary.main,
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                  }}
                >
                  Write Review
                </Button> */}
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>
                  Google My Business setup in progress
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <TrendingUp sx={{ mr: 1 }} />
        Recent Reviews
      </Typography>

      <Grid container spacing={compact ? 1 : 2}>
        {reviews.map((review) => (
          <Grid item xs={12} md={compact ? 12 : 6} key={review.id}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[4]
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar 
                    src={review.authorPhoto}
                    sx={{ 
                      bgcolor: theme.palette.primary.main,
                      mr: 2,
                      width: compact ? 32 : 40,
                      height: compact ? 32 : 40,
                      fontSize: compact ? '0.875rem' : '1rem'
                    }}
                  >
                    {getInitials(review.author)}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant={compact ? "body2" : "subtitle2"} 
                      fontWeight="bold"
                    >
                      {review.author}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <Rating 
                        value={review.rating} 
                        size={compact ? "small" : "small"} 
                        readOnly 
                        sx={{ mr: 1 }}
                      />
                      <Typography 
                        variant="caption" 
                        sx={{ color: 'text.secondary' }}
                      >
                        {review.relativeTime}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Typography 
                  variant={compact ? "caption" : "body2"} 
                  color="text.secondary"
                  sx={{ 
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: compact ? 3 : 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {review.text}
                </Typography>

                {review.helpful > 0 && (
                  <Box sx={{ mt: 1 }}>
                    <Chip
                      label={`${review.helpful} found helpful`}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: '0.7rem' }}
                    />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        {/* Google review buttons hidden until GMB is set up */}
        {/* <Button
          variant="contained"
          size="large"
          startIcon={<Google />}
          href="https://g.page/YOUR_PLACE_ID" // Replace with actual Google My Business URL
          target="_blank"
          sx={{ mr: 2, mb: { xs: 1, sm: 0 } }}
        >
          View All Reviews
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<Star />}
          href="https://g.page/r/YOUR_PLACE_ID/review" // Replace with actual review URL
          target="_blank"
        >
          Leave Review
        </Button> */}
        
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          🚀 Coming Soon: Connect with us on Google My Business for reviews and updates!
        </Typography>
      </Box>
    </Box>
  );
};

export default GoogleReviewsWidget;