import Header from './Header';
import Footer from './Footer';

export default function Page({children}) {
    return (
        <div>
            <style jsx>
                {`
          .page {
            min-height: calc(100vh - 56px);
            margin-bottom: -50px;
          }
          .push {
            height: 50px;
          }
        `}
            </style>
            <Header />
            <div className="container page pt-4 ">
                {children}
                <div className="push" />
            </div>
            <Footer />
        </div>
    );
}
