import { React, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  //styles
  const btnPlus = {
    width: "50px",
    height: "50px",
    backgroundColor: "#15b055",
  };
  const btnMinus = {
    backgroundColor: "#ec2a2a",
    width: "50px",
    height: "50px",
  };
  //increase counter
  const plus = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const minus = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button style={btnPlus} onClick={plus}>
        +
      </button>

      <span className="counter__output">{counter}</span>

      <button style={btnMinus} onClick={minus}>
        -
      </button>
    </div>
  );
}
