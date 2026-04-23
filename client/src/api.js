import axios from "axios";

const API = axios.create({
  baseURL: "https://github.com/Sahil-Khoja/to-do-app/api",
});

export default API;
