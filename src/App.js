import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
// import Pet from "../Pet/Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const App = () => {
const themeHook = useState('red')
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
console.log('themeHook:', themeHook);

return (
  <ThemeContext.Provider value={themeHook}>
    <div>

<BrowserRouter>

      <header>
      <Link to='/'>
      <h1>Adopt Me!</h1>
      </Link>
      {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
</header>



      <Switch>
      <Route path='/details/:id'>
        <Details/>
      </Route>
      <Route path='/'>
      <SearchParams/>

      </Route>
      </Switch>
    </BrowserRouter>
    {/* <SearchParams/> */}
    </div>
    </ThemeContext.Provider>
  );
};
// ReactDOM.render(React.createElement(App), document.getElementById("root"));
 ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById("root")); //js
// ReactDOM.render(<App/>, document.getElementById("root")); //jsx
