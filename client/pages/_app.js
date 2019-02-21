import App, { Container } from 'next/app';
import { StoreProvider } from 'easy-peasy';
import React from 'react';
import store from '../store';
import '../scss/main.scss';

export default class CustomApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <StoreProvider store={store}>
                    <Component {...pageProps} />
                </StoreProvider>
            </Container>
        );
    }
}
