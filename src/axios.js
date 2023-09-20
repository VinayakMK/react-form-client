import axios from 'axios';

const instance = axios.create({
    basseURL:"http://localhost:4000"
});

export default instance;