// import axios from "axios";

// const axiosInstance = axios.create({
// 	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
// 	withCredentials: true, // send cookies to the server
// });

// export default axiosInstance;

import axios from "axios";

// Create Axios instance with dynamic baseURL
const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api", // Using 'import.meta.env.MODE' for mode detection
    withCredentials: true, // send cookies to the server
});
 

export default axiosInstance;
