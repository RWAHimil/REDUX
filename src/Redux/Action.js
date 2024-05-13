export const Add = (payload) => {
  return {
    type: "ADD",
    payload
  };
};

export const Delete = (payload) => {
  return {
    type: "DELETE",
    payload
  };
};

export const Edit = (payload) => {
  return {
    type: "EDIT",
    payload
  };
};

export const Inc = (num) => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

export const Dec = (num) => {
  return {
    type: "DECREMENT",
    payload: num
  };
};
