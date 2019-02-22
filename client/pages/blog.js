import {useStore} from 'easy-peasy';
import Page from '../layouts/Page';
import store from '../store';
import Article from '../components/Article';

store.dispatch.blog.fetchArticle();

export default function Blog() {
    const articles = useStore(({blog}) => blog.articles);

    return (
        <Page>
            {articles.map(({_id}) => <Article key={_id} />)}
        </Page>
    );
}
