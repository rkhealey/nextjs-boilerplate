import { static as Immutable } from 'seamless-immutable';

const getInitialState = () => ({
  count: 0,
});

export default (oldState = getInitialState(), action = {}) => {
  const state = Immutable.from(oldState);
  const reducers = {
    COUNT_UP: () => Immutable.merge(state, { count: state.count + 1 }),
    COUNT_DOWN: () => Immutable.merge(state, { count: state.count - 1 }),
  };

  return reducers[action.type] ? reducers[action.type]() : state;
};
