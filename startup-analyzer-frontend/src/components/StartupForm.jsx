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
    <Box sx={{ flexGrow: 1, marginTop: 4 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://th.bing.com/th/id/OIG3.lt1htxrayJzYmydJ5GcI?pid=ImgGn"
            alt="Startup"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </Grid>

        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4 }}>
            <Typography variant="h5" gutterBottom>
              🚀 Startup Analysis Form
            </Typography>
            <form>
              {Object.keys(formData).map((field) => (
                <TextField
                  key={field}
                  label={field.replace(/_/g, ' ').toUpperCase()}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  type={typeof formData[field] === 'number' ? 'number' : 'text'}
                />
              ))}
              <Button type="submit" variant="contained" color="primary" onClick={handleAnalyze}
            disabled={loading} fullWidth sx={{ marginTop: 2 }}>
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
