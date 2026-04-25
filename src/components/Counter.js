import React, { useState } from "react";

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  // Handle button click
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Counter;