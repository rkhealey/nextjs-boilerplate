import { shallow } from 'enzyme';
import React from 'react';

import App from './index';

describe('main page', () => {
  it('renders"', () => {
    const app = shallow(<App />);

    expect(app).toMatchSnapshot();
  });
});
