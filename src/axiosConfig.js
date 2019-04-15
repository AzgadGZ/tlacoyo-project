import axios from 'axios';

axios.defaults.baseURL = 'https://talentland-restful-api.azurewebsites.net/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  response => response.data,
  (error) => {
    console.log(error);
    return Promise.reject(error.response.data);
  },
);
