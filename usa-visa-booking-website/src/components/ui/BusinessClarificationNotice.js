import React from 'react';
import { Box, Typography, Container, Alert } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const BusinessClarificationNotice = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Alert 
        severity="info" 
        icon={<InfoIcon />}
        sx={{
          backgroundColor: '#e3f2fd',
          border: '1px solid #2196f3',
          borderRadius: 2,
          '& .MuiAlert-message': {
            width: '100%'
          }
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" component="p" sx={{ fontWeight: 500, color: '#1565c0' }}>
            <strong>Important Notice:</strong> SSJS Visa Services is an independent professional visa consultancy service. 
            We are NOT affiliated with San Jose State University (SJSU) or any educational institution. 
            We specialize in USA visa application services for Indian citizens.
          </Typography>
        </Box>
      </Alert>
    </Container>
  );
};

export default BusinessClarificationNotice;