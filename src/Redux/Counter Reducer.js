// const initialState = 0;

// export const CounterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + action.payload;

//     case "DECREMENT":
//       return state - action.payload;

//       default :
//       return state;
//   }
// };

const initialState = {
  timer: 0,
  interval: null,
  isRunning: false
};

const reducerThunk = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return { ...state, isRunning: true };
    case "UPDATE_TIMER":
      return { ...state, timer: state.timer + 1 };
    case "STOP_TIMER":
      return { ...state, timer: 0, isRunning: false, interval: null };
    case "SET_INTERVAL":
      return { ...state, interval: action.payload };
    default:
      return state;
  }
};

export default reducerThunk;
