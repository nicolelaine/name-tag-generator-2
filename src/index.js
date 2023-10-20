import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NameTag from "./NameTag.js";
import { nameTagNames } from "./data.js";

const renderNameTag = (name) => <NameTag key={name.id} name={name.name} />;

const NameTagElements = nameTagNames.map((name) => renderNameTag(name));

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    {NameTagElements}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
