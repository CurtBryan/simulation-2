import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Pass1 from "./components/passingProps/pass1";
import Header from "./components/Header/Header";
import Body1 from "./components/Body/Body1";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Pass1 />
        <Body1 />
      </div>
    </div>
  );
}

export default App;
