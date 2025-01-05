// src/components/About.jsx
import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          📊 About the Startup Analyzer
        </Typography>
        <Typography variant="body1" paragraph>
          The Startup Analyzer tool helps entrepreneurs and business owners evaluate their startup's performance using key metrics such as revenue, expenses, growth rate, and customer satisfaction scores.
        </Typography>
        <Typography variant="body1" paragraph>
          With insights powered by advanced analytics, this tool provides actionable feedback and recommendations to optimize startup growth.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
