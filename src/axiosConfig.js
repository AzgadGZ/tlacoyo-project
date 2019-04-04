import axios from "axios";

axios.defaults.baseURL = "http://todo-api-tl.herokuapp.com/api/";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error.response.data);
  }
);
