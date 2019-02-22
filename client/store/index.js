import {createStore} from 'easy-peasy';
import blogStore from './blogStore';

export default createStore({
    blog: blogStore,
});
