// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box ,Container} from '@mui/material';
import StartupForm from './components/StartupForm';
import About from './components/About';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box sx={{ flexGrow: 1, overflow: 'auto' }}> {/* Adjust for Navbar height */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/analyze" element={<StartupForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
