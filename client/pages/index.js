import { Jumbotron } from 'reactstrap';
import Page from '../layouts/Page';

export default function Home() {
    return (
        <Page>
            <Jumbotron>
                <h1 className="display-3">NextJS + Strapi = &hearts;</h1>
                <p className="lead">Boiler plate</p>
                <hr className="my-2" />
                <h3 className="mt-4">Features :</h3>
                <p><a href="https://strapi.io/">Strappi</a></p>
                <p><a href="https://nextjs.org">NextJS</a></p>
                <p><a href="https://github.com/ctrlplusb/easy-peasy">easy-peasy</a></p>
                <p><a href="https://reactstrap.github.io">Reactstrap</a></p>
            </Jumbotron>
        </Page>
    );
}
