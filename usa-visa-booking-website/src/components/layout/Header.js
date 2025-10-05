import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Container, 
  Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, ListItemButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoPlaceholder from '../ui/LogoPlaceholder';
import FlagIcon from '../ui/FlagIcon';
import VisitorCounter from '../ui/VisitorCounter';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.home'), path: '/Home' },
    { name: t('nav.about'), path: '/About' },
    { name: t('nav.services'), path: '/Services' },
    { name: t('nav.contact'), path: '/Contactus' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={RouterLink} 
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: 'center',
                py: 2,
                '&:hover': {
                  backgroundColor: 'rgba(26, 75, 140, 0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{ fontWeight: 500 }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" color="default" elevation={2}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                color: 'primary.main',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, sm: 2 }
              }}
            >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/120px-The_Earth_seen_from_Apollo_17.jpg"
            alt="Globe"
            style={{
                height: 32,
                width: 32,
                objectFit: 'cover',
                borderRadius: '50%',
                marginRight: 8,
                display: 'block'
            }}
        />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '0.9rem', sm: '1.25rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                {t('footer.companyName')}
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{ 
                      mx: 1,
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            {/* Language Switcher & Visitor Counter - Always in right corner */}
            <Box sx={{ ml: 'auto', pl: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LanguageSwitcher size="small" />
              <VisitorCounter inline={true} />
            </Box>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 250 
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;