import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  response => response.data,
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  },
);
