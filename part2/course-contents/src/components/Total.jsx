import React from "react";

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  console.log(sum);
  return (
    <div>
      <strong>Total of {sum} exercises.</strong>
    </div>
  );
};

export default Total;
