import axios from "axios";

const API_URL = "http://localhost:7000/api"; 

export const register = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const forgetPassword = async (email) => {
  return axios.post(`${API_URL}/auth/forget-password`, { email });
};

export const resetPassword = async (token, newPassword) => {
  return axios.post(`${API_URL}/auth/reset-password`, { token, newPassword });
};
