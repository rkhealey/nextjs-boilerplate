import _ from 'lodash';
import { shallow } from 'enzyme';
import React from 'react';

import { MainForTest as Main } from '../pages';

const mockStore = {
  dispatch: _.noop,
  getState: () => ({
    counter: {
      count: 10,
    },
  }),
};

describe('main page', () => {
  it('renders with count', () => {
    const { count } = Main.getInitialProps({ store: mockStore });
    const main = shallow(<Main count={count} />);

    expect(main).toMatchSnapshot();
  });
});
