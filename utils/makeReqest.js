import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1337/api/",
  Headers : {
    Authorization : "Bearer " + process.env.NODE_ENV.REACT_APP_API_TOKEN
  } 
});