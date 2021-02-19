import axios from 'axios';

const api = axios.create({
  baseURL: 'https://602ed3cf4410730017c51595.mockapi.io/api/v1/'
});

export default api;