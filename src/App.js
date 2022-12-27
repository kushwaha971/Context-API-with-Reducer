import "./styles.css";
// import  Contex  from "./context";
// import { useEffect,useContext } from "react";
import Temp from "./context";
import Cart from "./Cart";
// import { useContext } from "react";

export default function App({ children }) {
  // const contex = useContext(Contex);
  // console.log("ertgf",contex);
  // useEffect(() =>{
  //   console.log(contex);
  // },[])
  return (
    <div className="App">
      <Temp>
        <Cart />
      </Temp>
    </div>
  );
}
