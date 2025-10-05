import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  Alert,
  Chip
} from '@mui/material';
import {
  LocationOn,
  Language,
  Close,
  MyLocation
} from '@mui/icons-material';

const LocationLanguageDialog = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const [detecting, setDetecting] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');

  // Location to language mapping for display
  const locationLanguageMap = {
    'Delhi': 'Hindi (हिंदी)',
    'Delhi NCR': 'Hindi (हिंदी)',
    'Mumbai': 'Hindi (हिंदी)',
    'Greater Mumbai': 'Hindi (हिंदी)',
    'Mumbai Metropolitan Region': 'Hindi (हिंदी)',
    'Pune': 'Hindi (हिंदी)',
    'Nashik': 'Hindi (हिंदी)',
    'Aurangabad': 'Hindi (हिंदी)',
    'Punjab': 'Punjabi (ਪੰਜਾਬੀ)',
    'Central Punjab': 'Punjabi (ਪੰਜਾਬੀ)',
    'Amritsar': 'Punjabi (ਪੰਜਾਬੀ)',
    'Ludhiana': 'Punjabi (ਪੰਜਾਬੀ)',
    'Jalandhar': 'Punjabi (ਪੰਜਾਬੀ)',
    'Chandigarh': 'Punjabi (ਪੰਜਾਬੀ)',
    'Gujarat': 'Gujarati (ગુજરાતી)',
    'Ahmedabad': 'Gujarati (ગુજરાતી)',
    'Tamil Nadu': 'Tamil (தமிழ்)',
    'Central Tamil Nadu': 'Tamil (தமிழ்)',
    'Chennai': 'Tamil (தமிழ்)',
    'Coimbatore': 'Tamil (தமிழ்)',
    'Madurai': 'Tamil (தமிழ்)',
    'Salem': 'Tamil (தமிழ்)',
    'Andhra Pradesh': 'Telugu (తెలుగు)',
    'Telangana': 'Telugu (తెలుగు)',
    'Hyderabad': 'Telugu (తెలుగు)',
    'Greater Hyderabad': 'Telugu (తెలుగు)',
    'Visakhapatnam': 'Telugu (తెలుగు)',
    'Vijayawada': 'Telugu (తెలుగు)',
    'Andhra Pradesh/Telangana': 'Telugu (తెలుగు)',
    'Kerala': 'Malayalam (മലയാളം)',
    'Central Kerala': 'Malayalam (മലയാളം)',
    'Thiruvananthapuram': 'Malayalam (മലയാളം)',
    'Kochi': 'Malayalam (മലയാളം)',
    'Kozhikode': 'Malayalam (മലയാളം)'
  };

  const handleDetectLocation = () => {
    setDetecting(true);
    
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
      setDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        // Detect region and language
        const detectedLang = detectLanguageByCoordinates(latitude, longitude);
        const detectedRegion = detectRegionByCoordinates(latitude, longitude);
        
        if (detectedLang && detectedRegion) {
          setDetectedLocation(detectedRegion);
          setDetectedLanguage(detectedLang);
          
          // Apply the detected language
          i18n.changeLanguage(detectedLang);
          localStorage.setItem('locationDetectedLanguage', detectedLang);
          localStorage.setItem('detectedLocation', detectedRegion);
          
          setTimeout(() => {
            setDetecting(false);
            onClose();
          }, 2000);
        } else {
          setDetecting(false);
          setDetectedLocation('Other Region');
          setDetectedLanguage('en');
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setDetecting(false);
        alert('Unable to detect your location. Please select your language manually.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  const detectLanguageByCoordinates = (lat, lng) => {
    // Delhi and NCR region (50km radius)
    const delhiDistance = calculateDistance(lat, lng, 28.6139, 77.2090);
    if (delhiDistance <= 50) return 'hi';
    
    // Extended Hindi belt (100km from Delhi)
    if (delhiDistance <= 100) return 'hi';

    // Mumbai and MMR region
    const mumbaiDistance = calculateDistance(lat, lng, 19.0760, 72.8777);
    if (mumbaiDistance <= 120) return 'hi';

    // Punjab region
    const punjabDistance = calculateDistance(lat, lng, 31.1471, 75.3412);
    if (punjabDistance <= 150) return 'pa';

    // Gujarat region
    const gujaratDistance = calculateDistance(lat, lng, 23.0225, 72.5714);
    if (gujaratDistance <= 200) return 'gu';

    // Tamil Nadu region
    const tamilNaduDistance = calculateDistance(lat, lng, 11.1271, 78.6569);
    if (tamilNaduDistance <= 200) return 'ta';

    // Telugu region
    const teluguDistance = calculateDistance(lat, lng, 15.9129, 79.7400);
    if (teluguDistance <= 200) return 'te';

    // Kerala region - Malayalam
    const keralaDistance = calculateDistance(lat, lng, 10.8505, 76.2711);
    if (keralaDistance <= 150) return 'ml';

    return 'en';
  };

  const detectRegionByCoordinates = (lat, lng) => {
    const delhiDistance = calculateDistance(lat, lng, 28.6139, 77.2090);
    if (delhiDistance <= 30) return 'Delhi';
    if (delhiDistance <= 100) return 'Delhi NCR';

    const mumbaiDistance = calculateDistance(lat, lng, 19.0760, 72.8777);
    if (mumbaiDistance <= 30) return 'Mumbai';
    if (mumbaiDistance <= 60) return 'Greater Mumbai';
    if (mumbaiDistance <= 120) return 'Mumbai Metropolitan Region';
    
    // Check for Pune (part of Maharashtra, Hindi-speaking)
    const puneDistance = calculateDistance(lat, lng, 18.5204, 73.8567);
    if (puneDistance <= 40) return 'Pune';
    
    // Check for Nashik (part of Maharashtra, Hindi-speaking)
    const nashikDistance = calculateDistance(lat, lng, 19.9975, 73.7898);
    if (nashikDistance <= 30) return 'Nashik';
    
    // Check for Aurangabad (part of Maharashtra, Hindi-speaking)
    const aurangabadDistance = calculateDistance(lat, lng, 19.8762, 75.3433);
    if (aurangabadDistance <= 30) return 'Aurangabad';

    // Check for specific Punjab cities
    const amritsarDistance = calculateDistance(lat, lng, 31.6340, 74.8723); // Amritsar
    if (amritsarDistance <= 30) return 'Amritsar';
    
    const ludhianaDistance = calculateDistance(lat, lng, 30.9010, 75.8573); // Ludhiana
    if (ludhianaDistance <= 30) return 'Ludhiana';
    
    const jalandharDistance = calculateDistance(lat, lng, 31.3260, 75.5762); // Jalandhar
    if (jalandharDistance <= 30) return 'Jalandhar';
    
    const chandigarhDistance = calculateDistance(lat, lng, 30.7333, 76.7794); // Chandigarh
    if (chandigarhDistance <= 30) return 'Chandigarh';

    const punjabDistance = calculateDistance(lat, lng, 31.1471, 75.3412);
    if (punjabDistance <= 50) return 'Central Punjab';
    if (punjabDistance <= 150) return 'Punjab';

    const gujaratDistance = calculateDistance(lat, lng, 23.0225, 72.5714);
    if (gujaratDistance <= 50) return 'Ahmedabad';
    if (gujaratDistance <= 200) return 'Gujarat';

    // Check for specific Tamil Nadu cities
    const chennaiDistance = calculateDistance(lat, lng, 13.0827, 80.2707); // Chennai
    if (chennaiDistance <= 50) return 'Chennai';
    
    const coimbatoreDistance = calculateDistance(lat, lng, 11.0168, 76.9558); // Coimbatore
    if (coimbatoreDistance <= 40) return 'Coimbatore';
    
    const maduraiDistance = calculateDistance(lat, lng, 9.9252, 78.1198); // Madurai
    if (maduraiDistance <= 40) return 'Madurai';
    
    const salemDistance = calculateDistance(lat, lng, 11.664, 78.146); // Salem
    if (salemDistance <= 30) return 'Salem';

    const tamilNaduDistance = calculateDistance(lat, lng, 11.1271, 78.6569);
    if (tamilNaduDistance <= 100) return 'Central Tamil Nadu';
    if (tamilNaduDistance <= 200) return 'Tamil Nadu';

    // Check for specific Telugu cities
    const vizagDistance = calculateDistance(lat, lng, 17.6868, 83.2185); // Visakhapatnam
    if (vizagDistance <= 50) return 'Visakhapatnam';
    
    const vijayawadaDistance = calculateDistance(lat, lng, 16.5062, 80.6480); // Vijayawada
    if (vijayawadaDistance <= 50) return 'Vijayawada';

    const teluguDistance = calculateDistance(lat, lng, 15.9129, 79.7400);
    if (teluguDistance <= 50) return 'Hyderabad';
    if (teluguDistance <= 100) return 'Greater Hyderabad';
    if (teluguDistance <= 200) return 'Andhra Pradesh/Telangana';

    // Check for specific Kerala cities
    const thiruvananthapuramDistance = calculateDistance(lat, lng, 8.5241, 76.9366); // Thiruvananthapuram
    if (thiruvananthapuramDistance <= 30) return 'Thiruvananthapuram';
    
    const kochiDistance = calculateDistance(lat, lng, 9.9312, 76.2673); // Kochi
    if (kochiDistance <= 30) return 'Kochi';
    
    const kozhikodeDistance = calculateDistance(lat, lng, 11.2588, 75.7804); // Kozhikode
    if (kozhikodeDistance <= 30) return 'Kozhikode';

    const keralaDistance = calculateDistance(lat, lng, 10.8505, 76.2711);
    if (keralaDistance <= 80) return 'Central Kerala';
    if (keralaDistance <= 150) return 'Kerala';

    return 'Other Region';
  };

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleSkip = () => {
    localStorage.setItem('locationLanguagePromptSkipped', 'true');
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleSkip}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }
      }}
    >
      <DialogTitle sx={{ color: 'white', pb: 1 }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <LocationOn />
            <Typography variant="h6">Choose Your Language</Typography>
          </Box>
          <IconButton onClick={handleSkip} sx={{ color: 'white' }}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ color: 'white' }}>
        <Box textAlign="center" py={2}>
          {!detecting && !detectedLocation && (
            <>
              <MyLocation sx={{ fontSize: 48, mb: 2, opacity: 0.8 }} />
              <Typography variant="body1" mb={2}>
                We can automatically set your preferred language based on your location.
              </Typography>
              <Typography variant="body2" mb={3} sx={{ opacity: 0.9 }}>
                For example:
              </Typography>
              <Box mb={3}>
                <Chip 
                  label="Delhi/NCR → Hindi (हिंदी)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Mumbai → Hindi (हिंदी)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Punjab → Punjabi (ਪੰਜਾਬੀ)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Gujarat → Gujarati (ગુજરાતી)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Chennai → Tamil (தமிழ்)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Hyderabad → Telugu (తెలుగు)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
                <Chip 
                  label="Kochi → Malayalam (മലയാളം)" 
                  sx={{ m: 0.5, bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }} 
                />
              </Box>
            </>
          )}

          {detecting && (
            <Box>
              <MyLocation sx={{ fontSize: 48, mb: 2, animation: 'pulse 1.5s infinite' }} />
              <Typography variant="h6" mb={1}>Detecting your location...</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                This will help us set the best language for you
              </Typography>
            </Box>
          )}

          {detectedLocation && detectedLanguage && (
            <Box>
              <Language sx={{ fontSize: 48, mb: 2, color: '#4CAF50' }} />
              <Alert 
                severity="success" 
                sx={{ 
                  mb: 2, 
                  bgcolor: 'rgba(76, 175, 80, 0.2)', 
                  color: 'white',
                  '& .MuiAlert-icon': { color: '#4CAF50' }
                }}
              >
                <Typography variant="h6">Location Detected!</Typography>
                <Typography variant="body1">
                  📍 {detectedLocation}
                </Typography>
                <Typography variant="body2">
                  Language set to: {locationLanguageMap[detectedLocation] || 'English'}
                </Typography>
              </Alert>
            </Box>
          )}
        </Box>
      </DialogContent>

      {!detecting && !detectedLocation && (
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            onClick={handleDetectLocation}
            variant="contained"
            size="large"
            startIcon={<MyLocation />}
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.3)'
              },
              mr: 2
            }}
          >
            Detect My Location
          </Button>
          <Button
            onClick={handleSkip}
            variant="outlined"
            size="large"
            sx={{
              borderColor: 'rgba(255,255,255,0.5)',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                bgcolor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            Skip for Now
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default LocationLanguageDialog;