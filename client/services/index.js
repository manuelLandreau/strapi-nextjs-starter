import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import blogService from './blogService';

export const http = axios.create({
    baseURL: 'http://localhost:1337',
});

export default {
    blog: blogService,
};
