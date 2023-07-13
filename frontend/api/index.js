import axios from "axios";
import { IP_HOST } from "@env";

const api = axios.create({
  baseURL: `http://${IP_HOST}:8080/`,
});

export default api;
