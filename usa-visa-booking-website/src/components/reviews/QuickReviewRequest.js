import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Rating,
  TextField,
  Stack,
  Alert,
  Fade,
  IconButton,
  useTheme
} from '@mui/material';
import {
  Star,
  Google,
  Close,
  Send,
  Celebration
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const QuickReviewRequest = ({ 
  show = false, 
  onClose, 
  customerName = '',
  visaType = '',
  compact = false 
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real implementation, you would submit this review
    // For now, we'll just redirect to Google Reviews
    const googleReviewUrl = `https://g.page/r/YOUR_PLACE_ID/review`;
    window.open(googleReviewUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleGoogleReview = () => {
    const googleReviewUrl = `https://g.page/r/YOUR_PLACE_ID/review`;
    window.open(googleReviewUrl, '_blank');
  };

  if (!show) return null;

  return (
    <Fade in={show}>
      <Paper
        elevation={8}
        sx={{
          position: 'fixed',
          bottom: compact ? 20 : 80,
          right: 20,
          width: { xs: 'calc(100% - 40px)', sm: 400 },
          maxWidth: 400,
          p: 3,
          zIndex: 1300,
          borderRadius: 3,
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
          border: `2px solid ${theme.palette.primary.main}`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'grey.500'
          }}
          size="small"
        >
          <Close fontSize="small" />
        </IconButton>

        {!submitted ? (
          <Box>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Star sx={{ fontSize: 40, color: 'gold', mb: 1 }} />
              <Typography variant="h6" fontWeight="bold" color="primary">
                How was your experience?
              </Typography>
              {customerName && (
                <Typography variant="body2" color="text.secondary">
                  Hi {customerName}! We'd love to hear about your {visaType} experience.
                </Typography>
              )}
            </Box>

            {/* Rating */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Rate your experience:
              </Typography>
              <Rating
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                size="large"
                sx={{ mb: 1 }}
              />
              <Typography variant="caption" color="text.secondary">
                {rating === 5 ? 'Excellent!' : rating === 4 ? 'Good' : rating === 3 ? 'Average' : rating === 2 ? 'Poor' : 'Very Poor'}
              </Typography>
            </Box>

            {/* Quick Comment */}
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Tell us about your experience (optional)"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              variant="outlined"
              size="small"
              sx={{ mb: 2 }}
            />

            {/* Action Buttons */}
            <Stack spacing={1}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Google />}
                onClick={handleGoogleReview}
                sx={{
                  bgcolor: '#4285F4',
                  '&:hover': { bgcolor: '#3367D6' }
                }}
              >
                Review on Google
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                onClick={onClose}
                size="small"
              >
                Maybe Later
              </Button>
            </Stack>

            {/* Incentive Text */}
            <Typography 
              variant="caption" 
              color="text.secondary" 
              sx={{ 
                display: 'block',
                textAlign: 'center',
                mt: 1,
                fontStyle: 'italic'
              }}
            >
              Your review helps others find our services!
            </Typography>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Celebration sx={{ fontSize: 50, color: 'success.main', mb: 2 }} />
            <Typography variant="h6" color="success.main" fontWeight="bold">
              Thank You!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We appreciate your feedback. Your review will help other visa applicants.
            </Typography>
          </Box>
        )}
      </Paper>
    </Fade>
  );
};

// Review Reminder Component for Email/SMS
export const ReviewReminderBanner = ({ show = false, onClose }) => {
  const theme = useTheme();

  if (!show) return null;

  return (
    <Alert
      severity="info"
      action={
        <Stack direction="row" spacing={1}>
          <Button
            color="inherit"
            size="small"
            startIcon={<Google />}
            href="https://g.page/r/YOUR_PLACE_ID/review"
            target="_blank"
          >
            Review Us
          </Button>
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={onClose}
          >
            <Close fontSize="inherit" />
          </IconButton>
        </Stack>
      }
      sx={{
        position: 'fixed',
        top: 80,
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: 'calc(100% - 40px)', sm: 600 },
        maxWidth: 600,
        zIndex: 1200,
        borderRadius: 2,
        boxShadow: theme.shadows[8]
      }}
    >
      <Typography variant="body2" fontWeight="500">
        Loved our visa services? Help others discover SSJS Visa Services by leaving a review!
      </Typography>
    </Alert>
  );
};

export default QuickReviewRequest;