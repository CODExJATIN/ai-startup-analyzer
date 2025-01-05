// src/components/AnalysisDialog.jsx
import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const AnalysisDialog = ({ open, onClose, analysisResult }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Analysis Result</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Your Startup's Analysis:</Typography>
        <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AnalysisDialog;
