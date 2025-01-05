// src/components/LandingPage.jsx
import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardHeader } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ py: { xs: 8, md: 16 }, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            Transform Your Startup with{' '}
            <Typography variant="h3" style={{fontWeight:"bold"}} component="h1" color="primary">
              Data-Driven Insights
            </Typography>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Analyze your startup's performance metrics, identify growth opportunities, and make informed decisions with our comprehensive analytics platform.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Start Analysis
            </Button>
            <Button variant="outlined" size="large">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            Features
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={4}>
            Everything you need to analyze and grow your startup
          </Typography>
          <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardHeader
                  avatar={<BarChartIcon color="primary" sx={{ fontSize: 48 }} />}
                  title="Performance Metrics"
                  subheader="Track key benchmark against industry standards"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardHeader
                  avatar={<TrendingUpIcon color="primary" sx={{ fontSize: 48 }} />}
                  title="Growth Analysis"
                  subheader="Identify growth opportunities and optimize your business strategy"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: 'center', p: 2 }}>
                <CardHeader
                  avatar={<ShowChartIcon color="primary" sx={{ fontSize: 48 }} />}
                  title="Financial Insights"
                  subheader="Deep dive into your financial metrics and cash flow analysis"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#f9fafb' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            Trusted by Startups
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={4}>
            Join hundreds of startups using our platform to grow their business
          </Typography>
          <Grid container spacing={4}>
            {Array.from({ length: 3 }).map((_, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card sx={{ textAlign: 'center', p: 2 }}>
                  <CardHeader
                    title="Amazing Platform"
                    subheader="CEO, Tech Startup"
                  />
                  <CardContent>
                    "StartupLens has been instrumental in helping us make data-driven decisions and accelerate our growth."
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
