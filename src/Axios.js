import axios from 'axios';

const Axios = axios.create();

// Axios.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('_token'); // Assuming you store the token in localStorage
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         config.headers.set('x-client-id', '11');
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

export default Axios;