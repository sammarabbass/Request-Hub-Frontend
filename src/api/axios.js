import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"||"http://request-hub-backend-production.up.railway.app",
});
export const authHeader = () => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};

export default API;

