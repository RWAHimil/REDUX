// export const Add = (payload) => {
//   return (dispatch) => {
//     // Perform asynchronous tasks here
//     // For example, you can make an API call before dispatching the actual action
//     setTimeout(() => {
//       console.log("Hello");
//     }, 5000);
//     dispatch({
//       type: "ADD",
//       payload
//     });
//   };
// };

// export const Delete = (payload) => {
//   return {
//     type: "DELETE",
//     payload
//   };
// };

// export const Edit = (payload) => {
//   return {
//     type: "EDIT",
//     payload
//   };
// };

// export const Inc = (num) => {
//   return {
//     type: "INCREMENT",
//     payload: num
//   };
// };

// export const Dec = (num) => {
//   return {
//     type: "DECREMENT",
//     payload: num
//   };
// };

export const startTimer = () => {
  return (dispatch) => {
    dispatch({ type: "START_TIMER" });
    const interval = setInterval(() => {
      dispatch({ type: "UPDATE_TIMER" });
    }, 1000);
    dispatch({ type: "SET_INTERVAL", payload: interval });
  };
};

export const stopTimer = () => {
  return (dispatch, getState) => {
    clearInterval(getState().interval);
    dispatch({ type: "STOP_TIMER" });
  };
};
