import axios from "axios";

export const $axios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 5000,
});

$axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
