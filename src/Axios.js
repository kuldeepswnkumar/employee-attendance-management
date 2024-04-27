import axios from 'axios';

const Axios = axios.create();


Axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('AccessToken'); // Assuming you store the token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        // config.headers.set('x-client-id', '11');
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

Axios.interceptors.response.use((response) => {
    // console.log('interceptor repoinse', response)
    return response;
}, (error) => {
    // console.log('integeport error', error);
    if (error.response.status == 401) {
        localStorage.clear()
        window.location.href = window.location.origin + '/login'
    }
    return error;
});

export default Axios;