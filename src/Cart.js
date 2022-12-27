import React, { useContext, useEffect } from "react";
import { Context } from "./context";

const Cart = () => {
  const contex = useContext(Context);

  useEffect(() => {
    console.log(contex);
  }, []);
  return (
    <>
      <h1>{contex.state.count}</h1>
      <br />
      <br />
      <button onClick={contex.increment} style={{ margin: "25px" }}>
        increm
      </button>
      <button onClick={contex.decrement} style={{ margin: "25px" }}>
        decrem
      </button>
    </>
  );
};

export default Cart;
