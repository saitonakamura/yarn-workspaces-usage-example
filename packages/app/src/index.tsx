import React, { useState } from "react";
import ReactDOM from "react-dom";
import { add } from "@saitonakamura/package-1";
import { subtract } from "@saitonakamura/package-2";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{"Count: " + count}</div>
      <button onClick={() => setCount(add)}>Inc</button>
      <button onClick={() => setCount(subtract)}>Dec</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
