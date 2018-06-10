import React from "react";
const name = "Fiddy";
const nameL = name.length;
const think = "is pretty cool"

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {nameL} letters</h2>
        <h2>I think React {think}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
