import axios from "axios";

const api = axios.create({
	baseURL: "http://10.3.135.199:8080",
});

export default api;
