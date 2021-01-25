import axios from 'axios';

const api = axios.create({
  baseURL: 'https://provadev.xlab.digital/api/v1',
  params: {
    uuid: process.env.REACT_APP_UUID_KEY,
  },
});

export default api;
