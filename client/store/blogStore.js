import { thunk } from 'easy-peasy';
import service from '../services';

const blogStore = {
    articles: [],
    fetchArticle: thunk(async actions => {
        service.blog.fetch().then(({data}) => actions.setArticles(data));
    }),
    setArticles: (state, articles) => {
        state.articles = articles;
    },
};

export default blogStore;
