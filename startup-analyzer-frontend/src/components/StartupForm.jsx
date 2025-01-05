// src/components/StartupForm.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { analyzeStartup } from '../services/api';
import AnalysisDialog from './AnalysisDialog';

const StartupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    revenue: 0,
    expenses: 0,
    churn_rate: 0,
    user_growth_rate: 0,
    funding_received: 0,
    profit_margin: 0,
    customer_satisfaction_score: 0,
  });

  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAnalyze = async () => {
    setLoading(true);

    // Create a new object with only the required fields
    const dataToSend = {
        revenue: formData.revenue,
        expenses: formData.expenses,
        churn_rate: formData.churn_rate,
        user_growth_rate: formData.user_growth_rate,
        funding_received: formData.funding_received,
        profit_margin: formData.profit_margin,
        customer_satisfaction_score: formData.customer_satisfaction_score,
    };

    try {
      const response = await analyzeStartup(dataToSend);
      setAnalysisResult(response.data);
      setDialogOpen(true); // Open the dialog after receiving the analysis result
    } catch (error) {
      console.error('Error during analysis:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
  };

  

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, padding:'20px', backgroundColor: 'background.paper' }}>
      <Grid container spacing={2} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://th.bing.com/th/id/OIG3.lt1htxrayJzYmydJ5GcI?pid=ImgGn"
            alt="Startup"
            style={{ width: '90%', height: '90%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Paper  elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h5" style={{fontWeight:'bold'}} gutterBottom>
              🚀 Startup Analysis Form
            </Typography>
            <form>
              {/* Single Fields */}
              <TextField
                label="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="INDUSTRY"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />

              {/* Side-by-Side Fields */}
              <Grid container spacing={2}>
                {/* Revenue & Expenses */}
                <Grid item xs={6}>
                  <TextField
                    label="REVENUE"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="EXPENSES"
                    name="expenses"
                    value={formData.expenses}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>

                {/* Churn Rate & Growth Rate */}
                <Grid item xs={6}>
                  <TextField
                    label="CHURN RATE"
                    name="churn_rate"
                    value={formData.churn_rate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="USER GROWTH RATE"
                    name="user_growth_rate"
                    value={formData.user_growth_rate}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>

                {/* Funding Received & Profit Margin */}
                <Grid item xs={6}>
                  <TextField
                    label="FUNDING RECEIVED"
                    name="funding_received"
                    value={formData.funding_received}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="PROFIT MARGIN"
                    name="profit_margin"
                    value={formData.profit_margin}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    type="number"
                  />
                </Grid>
              </Grid>

              {/* Customer Satisfaction Score */}
              <TextField
                label="CUSTOMER SATISFACTION SCORE"
                name="customer_satisfaction_score"
                value={formData.customer_satisfaction_score}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="number"
              />

              {/* Submit Button */}
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={handleAnalyze}
                disabled={loading}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                {loading ? 'Analyzing...' : 'Analyze Startup'}
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <AnalysisDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        analysisResult={analysisResult}
      />
    </Box>
  );
};

export default StartupForm;
