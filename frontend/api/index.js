import axios from "axios";
import { API_URL } from "@env";

const api = axios.create({
  baseURL: `${API_URL}/`,
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
