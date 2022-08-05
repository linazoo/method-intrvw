import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  const randomNums = () => {
    setnum1(Math.floor(Math.random() * 10));
    setnum2(Math.floor(Math.random() * 10));
  };

  return (
    <div className="App">
      <h1>Lina's solution</h1>
      <button onClick={randomNums}>two random numbers</button>
      <p>{num1}</p>
      <p>{num2}</p>
      {num1 === num2 ? <p>numbers match!</p> : <p>numbers don't match</p>}
    </div>
  );
}
