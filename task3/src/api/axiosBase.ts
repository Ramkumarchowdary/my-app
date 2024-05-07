// src/api/axiosBase.ts
import axios from "axios";

const axiosBase = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosBase.interceptors.request.use(
  (config) => {
    document.cookie = "MyCookie=Hello";
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosBase.interceptors.response.use(
  (response) => {
    console.log("Interceptor Response: ", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/refresh-token",
          {
            refreshToken,
          }
        );
        if (response.status === 200) {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${accessToken}`;
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return axiosBase(originalRequest);
        }
      } catch (refreshError) {
        console.error("Unable to refresh token:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosBase;
