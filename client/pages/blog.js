import {useStore} from 'easy-peasy';
import Page from '../layouts/Page';
import store from '../store';

store.dispatch.blog.fetchArticle();

export default function Blog() {

    const articles = useStore(({blog}) => blog.articles);

    console.log(articles);

    return (
        <Page>
            {articles.map(({title, content}, i) => (
                <div key={i}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            ))}
        </Page>
    );
}
