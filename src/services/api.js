import axios from 'axios';

const api = axios.create({
    baseURL: 'https://springboot-banking-api.herokuapp.com/',
});

export default api;