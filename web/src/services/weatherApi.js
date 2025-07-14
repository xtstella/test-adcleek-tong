import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const getCities = async () => {
  const response = await axios.get(`${API_BASE_URL}/cities`);
  return response.data;
};

export const getForecast = async (insee) => {
  const response = await axios.get(`${API_BASE_URL}/forecast/${encodeURIComponent(insee)}`);
  return response.data;
};

export const addCity = async (insee) => {
  const response = await axios.post(`${API_BASE_URL}/cities`, { insee });
  return response.data;
};
