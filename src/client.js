import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3002/api/search',
    timeout: 10000,
});

export default instance;