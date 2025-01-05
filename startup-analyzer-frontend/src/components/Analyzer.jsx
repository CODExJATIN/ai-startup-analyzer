// src/components/Analyzer.js
import React, { useState } from 'react';
import { analyzeStartup } from '../services/api';

const Analyzer = () => {
  const [startupData, setStartupData] = useState({
    name: '',
    revenue: '',
    expenses: '',
    churn_rate: ''
  });
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = async () => {
    const response = await analyzeStartup(startupData);
    setAnalysisResult(response.data);
  };

  return (
    <div>
      <h2>Startup AI Analyzer</h2>
      <input type="text" placeholder="Name" onChange={(e) => setStartupData({ ...startupData, name: e.target.value })} />
      <input type="number" placeholder="Revenue" onChange={(e) => setStartupData({ ...startupData, revenue: e.target.value })} />
      <input type="number" placeholder="Expenses" onChange={(e) => setStartupData({ ...startupData, expenses: e.target.value })} />
      <input type="number" placeholder="Churn Rate" onChange={(e) => setStartupData({ ...startupData, churn_rate: e.target.value })} />
      <button onClick={handleAnalyze}>Analyze</button>

      {analysisResult && (
        <div>
          <h3>AI Insights:</h3>
          <p>Profit: {analysisResult.profit}</p>
          <p>Insights: {analysisResult.insights}</p>
          <p>Success Probability: {analysisResult.success_probability}%</p>
        </div>
      )}
    </div>
  );
};

export default Analyzer;
