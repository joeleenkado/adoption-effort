import React from "react";
import ReactDOM from "react-dom";
// import Pet from "../Pet/Pet";
import SearchParams from "./SearchParams";
const App = () => {

  // return React.createElement("div", { key: "" }, [
  
  //   React.createElement("h1", { key: "" }, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "charms",
  //     animal: "cat",
  //     breed: "calico",
  //   }),
  //   React.createElement(Pet, {
  //     name: "blackbean",
  //     animal: "cat",
  //     breed: "calico",
  //   }),
  //   React.createElement(Pet, { name: "sheba", animal: "cat", breed: "calico" }),
  // ]); //END return

return (
  
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
    <SearchParams/>
    </div>
  );
};
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
 ReactDOM.render(App(), document.getElementById("root")); //js
// ReactDOM.render(<App/>, document.getElementById("root")); //jsx
