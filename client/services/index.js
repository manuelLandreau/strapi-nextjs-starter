import blogService from "./blogService";
import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://localhost:1337',
});

export default {
    blog: blogService
}