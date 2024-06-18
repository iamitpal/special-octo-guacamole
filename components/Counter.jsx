"use client";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Count: {count}
      </p>
    </>
  );
};
