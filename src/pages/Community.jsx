import React, { useState } from "react";

export default function Community() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{`Clicks: ${counter}`}</button>
    </div>
  );
}
