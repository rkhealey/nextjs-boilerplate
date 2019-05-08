import countActions from './';

describe('redux/actions/count', () => {
  let spy;

  beforeEach(() => {
    spy = jest.fn();
  });

  it('dispatches countUp', () => {
    countActions.countUp()(spy);
    expect(spy).toHaveBeenCalledWith({ type: 'COUNT_UP' });
  });

  it('dispatches countDown', () => {
    countActions.countDown()(spy);
    expect(spy).toHaveBeenCalledWith({ type: 'COUNT_DOWN' });
  });
});
