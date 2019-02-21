import {http} from './'

const blogService = {
    fetch: () => http.get('http://localhost:1337/posts'),
};

export default blogService;
