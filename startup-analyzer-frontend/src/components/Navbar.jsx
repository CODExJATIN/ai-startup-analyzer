import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
        backdropFilter: 'blur(10px)', // Blur effect
        WebkitBackdropFilter: 'blur(10px)', // Safari support
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        zIndex: 1100, // Ensure it's above other content
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo + Title */}
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <RocketLaunchIcon sx={{ marginRight: 1, color: '#ffffff' }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#ffffff',
                letterSpacing: '1px',
              }}
            >
              StartupLens
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#ffffff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/analyze"
              sx={{
                color: '#ffffff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Analyze
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: '#ffffff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
