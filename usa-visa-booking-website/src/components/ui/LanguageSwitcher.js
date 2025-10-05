import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Chip
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ size = 'medium', showText = false }) => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [locationDetected, setLocationDetected] = useState(false);
  const [detectedLocation, setDetectedLocation] = useState('');

  const languages = [
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      nativeName: 'English'
    },
    {
      code: 'hi',
      name: 'Hindi',
      flag: '🇮🇳',
      nativeName: 'हिन्दी'
    },
    {
      code: 'te',
      name: 'Telugu',
      flag: '🇮🇳',
      nativeName: 'తెలుగు'
    },
    {
      code: 'ta',
      name: 'Tamil',
      flag: '🇮🇳',
      nativeName: 'தமிழ்'
    },
    {
      code: 'gu',
      name: 'Gujarati',
      flag: '🇮🇳',
      nativeName: 'ગુજરાતી'
    },
    {
      code: 'pa',
      name: 'Punjabi',
      flag: '🇮🇳',
      nativeName: 'ਪੰਜਾਬੀ'
    },
    {
      code: 'ml',
      name: 'Malayalam',
      flag: '🇮🇳',
      nativeName: 'മലയാളം'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    // Check if current language was detected by location
    const locationLanguage = localStorage.getItem('locationDetectedLanguage');
    const detectedLoc = localStorage.getItem('detectedLocation');
    
    if (locationLanguage && locationLanguage === i18n.language) {
      setLocationDetected(true);
      setDetectedLocation(detectedLoc || 'Your Location');
    }
  }, [i18n.language]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    // Clear location detection flag when user manually changes language
    if (languageCode !== localStorage.getItem('locationDetectedLanguage')) {
      setLocationDetected(false);
    }
    handleClose();
  };

  return (
    <Box>
      <Tooltip title="Change Language">
        <IconButton
          onClick={handleClick}
          size={size}
          sx={{
            color: 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }
          }}
        >
          {showText ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" component="span">
                {currentLanguage.flag}
              </Typography>
              <Typography variant="body2" component="span">
                {currentLanguage.code.toUpperCase()}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LanguageIcon fontSize={size === 'small' ? 'small' : 'medium'} />
              <Typography variant="body2" component="span" sx={{ fontSize: '1.2em' }}>
                {currentLanguage.flag}
              </Typography>
            </Box>
          )}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 180,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            borderRadius: 2,
          }
        }}
      >
        {locationDetected && (
          <Box sx={{ px: 2, py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Chip
              icon={<LocationOnIcon />}
              label={`Auto-detected: ${detectedLocation}`}
              size="small"
              color="primary"
              variant="outlined"
              sx={{ fontSize: '0.75rem' }}
            />
          </Box>
        )}
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              py: 1.5,
              px: 2,
              '&.Mui-selected': {
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                }
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <Typography variant="h6" component="span">
                {language.flag}
              </Typography>
            </ListItemIcon>
            <ListItemText
              primary={language.nativeName}
              secondary={language.name}
              primaryTypographyProps={{
                fontWeight: language.code === i18n.language ? 600 : 400,
                color: language.code === i18n.language ? 'inherit' : 'text.primary'
              }}
              secondaryTypographyProps={{
                color: language.code === i18n.language ? 'rgba(255,255,255,0.7)' : 'text.secondary',
                fontSize: '0.8rem'
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;