import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Main from "./Main";

const App = () => {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
