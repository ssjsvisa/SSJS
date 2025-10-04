import React from 'react';
import { Container, Typography, Paper, Box, Link, Grid } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';

const AnalyticsDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Website Analytics Dashboard
      </Typography>
      
      <Typography variant="body1" paragraph>
        This page provides guidance on how to view your website analytics data using Google Analytics.
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <BarChartIcon sx={{ mr: 1 }} /> How to View Analytics
            </Typography>
            
            <Typography variant="body1" paragraph>
              Follow these steps to access your Google Analytics dashboard:
            </Typography>
            
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  Go to <Link href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                    Google Analytics (analytics.google.com)
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Sign in with your Google account
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Select your property (SSJS USA Visa Services)
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Explore the dashboard to view visitor statistics
                </Typography>
              </li>
            </ol>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <PeopleIcon sx={{ mr: 1 }} /> Visitor Insights
            </Typography>
            
            <Typography variant="body1" paragraph>
              Google Analytics provides detailed information about your visitors:
            </Typography>
            
            <Box component="ul" sx={{ pl: 2 }}>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Real-time data:</strong> See who is on your site right now
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Demographics:</strong> Age, gender, and interests of your audience
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Acquisition:</strong> How people found your website
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Behavior:</strong> Which pages they visit and how long they stay
                </Typography>
              </li>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <PublicIcon sx={{ mr: 1 }} /> Setup Instructions
            </Typography>
            
            <Typography variant="body1" paragraph>
              To complete your Google Analytics setup:
            </Typography>
            
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  Create an account at <Link href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                    Google Analytics
                  </Link> if you don't already have one
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Set up a property for your website
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Get your Tracking ID (format: G-XXXXXXXXXX)
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Update the <code>.env</code> file in your project with your Tracking ID:
                  <Box component="pre" sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, my: 2 }}>
                    REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX
                  </Box>
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  Rebuild and redeploy your website
                </Typography>
              </li>
            </ol>
            
            <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 1, mt: 2 }}>
              <Typography variant="body1">
                <strong>Note:</strong> It may take up to 24 hours for data to appear in your Google Analytics dashboard after setting up.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsDashboard;