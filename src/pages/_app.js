import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../redux/store';

export default withRedux(initStore)(class Main extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
});
