import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Main extends Component {
  static getInitialProps({ store }) {
    store.dispatch({ type: 'COUNT_UP' });
    const { count } = store.getState().counter;
    return { count };
  }

  render() {
    return (
      <div>The current count is {this.props.count}</div>
    );
  }
}

Main.propTypes = {
  count: PropTypes.number.isRequired,
};

export default connect()(Main);

export { Main as MainForTest };
