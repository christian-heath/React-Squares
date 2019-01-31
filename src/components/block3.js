import React from "react";
const Block3 = props => {
  const bgColor = "pink";
  const color = "green";
  const display = "inline-block";
  const width = "200px";
  const height = "200px";
  return (
    <div
      style={{
        backgroundColor: bgColor,
        display: display,
        width: width,
        height: height
      }}
    >
      <h2 style={{ color: color }}>{props.text}</h2>
    </div>
  );
};
export default Block3;
