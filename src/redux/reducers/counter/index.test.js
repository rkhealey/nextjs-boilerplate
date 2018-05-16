import countReducers from './';

describe('redux/reducers/count', () => {
  const state = undefined;

  const defaultState = {
    count: 0,
  };

  it('reduces no args to initial state', () => {
    expect(countReducers()).toEqual({
      ...defaultState,
    });
  });

  it('reduces unknown action to untouched object', () => {
    const action = {};
    expect(countReducers(state, action)).toEqual({
      ...defaultState,
    });
  });

  describe('count', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('reduces COUNT_UP action', () => {
      const action = { type: 'COUNT_UP' };
      const newState = countReducers(state, action);
      expect(newState).toEqual({
        ...defaultState,
        count: 1,
      });
    });

    it('reduces COUNT_DOWN action', () => {
      const action = { type: 'COUNT_DOWN' };
      const newState = countReducers(state, action);
      expect(newState).toEqual({
        ...defaultState,
        count: -1,
      });
    });
  });
});
