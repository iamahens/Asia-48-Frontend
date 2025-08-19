// File: src/services/ApiService.jsx
import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { 'Content-Type': 'application/json' }
});

// --- Auth Functions ---
export const login = (username, password) => apiClient.post('/auth/login', { username, password });
export const register = (userData) => apiClient.post('/auth/register', userData);

// --- Country Functions ---
export const getAllCountries = () => apiClient.get('/countries');
export const getCountryByName = (countryName) => apiClient.get(`/countries/${countryName}`);

// --- Visa Functions ---
export const getVisaDetails = (country, type) => apiClient.get(`/visas?country=${country}&type=${type}`);

// --- Visa Highlight Functions ---
export const getFeaturedCountries = () => {
  return apiClient.get('/highlights/countries');
};
export const getVisaHighlight = (country, type) => {
  return apiClient.get(`/highlights/filter?country=${country}&type=${type}`);
};

// --- NEW: Blog Service Functions ---
export const getAllBlogs = () => {
  return apiClient.get('/blogs');
};

export const getBlogBySlug = (slug) => {
  return apiClient.get(`/blogs/${slug}`);
};
// --- NEW: Scholarship Service Functions ---
export const getAllScholarships = () => {
  return apiClient.get('/scholarships');
};

export const getScholarshipsByCountry = (country) => {
  return apiClient.get(`/scholarships/country/${country}`);
};

export const getAllUniversities = () => {
  return apiClient.get('/universities');
};

export const getUniversityById = (id) => {
  return apiClient.get(`/universities/${id}`);
};

export const getPlannerTasks = (country, courseLevel) => {
  return apiClient.get(`/planner/tasks?country=${country}&courseLevel=${courseLevel}`);
};



export default apiClient;