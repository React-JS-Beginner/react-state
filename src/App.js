import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  /* 
  //Multiple Line
  const [count, setCount] = useState(0);

  const increaser = () =>
  {
    const increaseCount = count + 1;
    return setCount(increaseCount)
  }

  const decreaser = () =>
  {
    const decreaseCount = count - 1;
    return setCount(decreaseCount)
  }
 */

  //Single Line
  const [count, setCount] = useState(0);

  const increaser = () => setCount(count + 1);

  const decreaser = () => setCount(count - 1);

  const resetCounter = () => setCount(count * 0);
  
  return (
    <div className="counter">
      <div className="circle">
        <span>{count}</span>
      </div>

      <div className="buttons">
        <button onClick={increaser}>
          <span>+</span>
        </button>

        <button onClick={decreaser}>
          <span>-</span>
        </button>

        <button className="reset" onClick={resetCounter}>
          <span>RESET</span>
        </button>
      </div>
    </div>
  );
}

export default App;
