import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Context = React.createContext();
const Temp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state: state,
    increment: () => {
      dispatch({ type: ACTIONS.INCREMENT });
    },

    decrement: () => {
      dispatch({ type: ACTIONS.DECREMENT });
    }
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Temp;
export { Context };
