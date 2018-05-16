const countUp = () => dispatch =>
  dispatch({ type: 'COUNT_UP' });

const countDown = () => dispatch =>
  dispatch({ type: 'COUNT_DOWN' });


export default {
  countUp,
  countDown,
};
