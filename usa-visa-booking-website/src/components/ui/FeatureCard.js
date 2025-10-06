import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const FeatureCard = ({ title, description, icon, image, imageAlt }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fallback images for business meetings
  const fallbackImages = [
    image, // Original image
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  ].filter(Boolean); // Remove any undefined/null values

  const handleImageError = () => {
    console.warn(`❌ FeatureCard image failed to load: ${currentImage} (${title})`);
    if (currentImageIndex < fallbackImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      console.log(`🔄 Trying fallback image ${currentImageIndex + 1}/${fallbackImages.length} for ${title}`);
    } else {
      console.error(`❌ All image fallbacks failed for ${title}`);
      setImageError(true);
    }
  };

  const handleImageLoad = () => {
    console.log(`✅ FeatureCard image loaded successfully: ${currentImage} (${title})`);
    setImageLoaded(true);
    setImageError(false);
  };

  const currentImage = fallbackImages[currentImageIndex];

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      {currentImage && !imageError && (
        <CardMedia
          component="img"
          height="140"
          image={currentImage}
          alt={imageAlt || title}
          onError={handleImageError}
          onLoad={handleImageLoad}
          sx={{
            objectFit: 'cover',
            objectPosition: 'center center',
            backgroundColor: imageLoaded ? 'transparent' : '#f5f5f5',
          }}
        />
      )}
      {(!currentImage || imageError) && (
        <Box
          sx={{
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.light',
            color: 'primary.contrastText'
          }}
        >
          {icon}
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon && (
            <Box sx={{ mr: 1, color: 'primary.main' }}>
              {icon}
            </Box>
          )}
          <Typography variant="h5" component="h3" fontWeight="600">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;