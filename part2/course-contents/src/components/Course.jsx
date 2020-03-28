import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  // Destructure name and parts into new variables:
  const { name, parts } = course;

  console.log(parts);
  return (
    <div>
      <Header title={name} />
      {parts.map(part => (
        <Content key={part.id} part={part} />
      ))}
      <Total parts={parts} />
    </div>
  );
};

export default Course;
