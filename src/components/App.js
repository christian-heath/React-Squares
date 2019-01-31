import React, { Component } from "react";
import Block1 from "./block1";
import Block2 from "./block2";
import Block3 from "./block3";
import "./App.css";
const App = props => {
  return (
    <div>
      <Block1 text="white on blue" />
      <Block2 text="blue on red" />
      <Block3 text="green on pink" />
    </div>
  );
};

export default App;
