import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const FeatureCard = ({ title, description, icon, image, imageAlt }) => {
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
      {image && (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={imageAlt || title}
        />
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