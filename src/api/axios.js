import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://railway.app",
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

