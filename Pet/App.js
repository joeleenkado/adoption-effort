import React from "react";
import ReactDOM from "react-dom";
import Pet from "../Pet/Pet";

const App = () => {
  
  return React.createElement("div", { key: "" }, [
  
    React.createElement("h1", { key: "" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "charms",
      animal: "cat",
      breed: "calico",
    }),
    React.createElement(Pet, {
      name: "blackbean",
      animal: "cat",
      breed: "calico",
    }),
    React.createElement(Pet, { name: "sheba", animal: "cat", breed: "calico" }),
  ]); //END return
}; //END App

ReactDOM.render(React.createElement(App), document.getElementById("root"));
