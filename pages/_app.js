  
import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import configureStore from '../store/configureStore';
import Layout from '../components/layout';

class CounterCultureDev extends App {

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        );
    }

}

export default withRedux(configureStore)(CounterCultureDev);