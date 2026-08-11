const initialState = 0;

const reducer = (state = initialState, { type, step }) => {
  console.log(type);
  switch (type) {
    case "counter/+":
      return state + step;
    case "counter/-":
      return state - step;
    default:
      return state;
  }
};

const add = (payload) => {
    return {
        type: "counter/+",
        payload: payload
    }
}

const minus = (payload) => {
    return {
        type: "counter/-",
        payload: payload
    }
}

export { reducer, add, minus };
