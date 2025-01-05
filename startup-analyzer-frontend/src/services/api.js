// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

export const analyzeStartup = (data) => API.post('/analyze', data);
