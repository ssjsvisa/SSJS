import React, { useState } from 'react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Box, Typography, IconButton } from '@mui/material';

const PersonalizedOfferButton = () => {
  const [open, setOpen] = useState(true);

  // Listen for custom event to open popup
  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openPersonalizedOffer', handler);
    return () => window.removeEventListener('openPersonalizedOffer', handler);
  }, []);

  // Get current and next month names
  const now = new Date();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonth = monthNames[now.getMonth()];
  const nextMonth = monthNames[(now.getMonth() + 1) % 12];

  // Blinking effect every 20 seconds
  const [blink, setBlink] = useState(false);
  React.useEffect(() => {
    if (!open) return;
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, [open]);

  return (
    <>
      {/* Floating gift icon removed. Popup is triggered from SocialShareButtons. */}
      {open && (
        <Box sx={{
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          borderRadius: 3,
          minWidth: 320,
          textAlign: 'center',
          zIndex: 1300,
          transition: 'box-shadow 0.3s, border 0.3s',
          border: blink ? '3px solid #ff9800' : '3px solid transparent',
          boxShadow: blink ? '0 0 24px 8px #ff9800' : '0 2px 8px rgba(0,0,0,0.15)',
          animation: 'flyBounceInRightTop 1.4s cubic-bezier(0.23, 1, 0.32, 1)',
          '@keyframes flyBounceInRightTop': {
            '0%': {
              opacity: 0,
              transform: 'translate(60vw, -40vh) scale(0.7)',
            },
            '60%': {
              opacity: 1,
              transform: 'translate(-50%, -50%) scale(1.15)',
            },
            '80%': {
              opacity: 1,
              transform: 'translate(-50%, -50%) scale(0.95)',
            },
            '100%': {
              opacity: 1,
              transform: 'translate(-50%, -50%) scale(1)',
            },
          },
        }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            <span role="img" aria-label="offer" style={{marginRight: 8}}>🎉</span>
            <span style={{ color: '#ff9800', fontWeight: 'bold' }}>Limited Time Offer!</span>
            <span role="img" aria-label="offer" style={{marginLeft: 8}}>🎉</span>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            <span style={{ color: '#1976d2', fontWeight: 600 }}>
              Appointments available for
            </span>
            <br />
            <span style={{ color: '#43a047', fontWeight: 600 }}>
              {currentMonth} &amp; {nextMonth}
            </span>
            <br />
            <span style={{ color: '#e53935', fontWeight: 600 }}>
              🚀 Slots fill up fast — book now! 💼
            </span>
          </Typography>
          <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', top: 0, left: 0, m: 0, p: 1 }}>
            ×
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default PersonalizedOfferButton;
