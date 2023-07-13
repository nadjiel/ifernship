import axios from "axios";
import { IP_HOST } from "@env";

const api = axios.create({
  baseURL: `http://${IP_HOST}:8080/`,
});

function doNothing(res) {
  return res;
}

api.interceptors.response.use(doNothing, (error) => {
  const { response } = error;
  if (response) {
    console.error(response);
  } else {
    console.error(error);
  }
  throw error;
});

export default api;
