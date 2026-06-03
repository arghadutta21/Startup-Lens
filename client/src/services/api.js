import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const submitStartup = async (startupData) => {
  const response = await axios.post(`${API_URL}/startups/submit`, startupData);
  return response.data;
};

export const getDashboardData = async () => {
  const response = await axios.get(`${API_URL}/dashboard`);
  return response.data;
};

export const getStartupDetails = async (id) => {
  const response = await axios.get(`${API_URL}/startups/${id}`);
  return response.data;
};
// Add more api functions as needed
