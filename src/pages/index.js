import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import defaultTheme from '../styles/defaultTheme';

class Main extends Component {
  static getInitialProps({ store }) {
    store.dispatch({ type: 'COUNT_UP' });
    const { count } = store.getState().counter;
    return { count };
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <div>The current count is {this.props.count}</div>
      </ThemeProvider>
    );
  }
}

Main.propTypes = {
  count: PropTypes.number.isRequired,
};

export default connect()(Main);

export { Main as MainForTest };
