import React from "react";
import ReactDOM from "react-dom";

import './tailwind.output.css';

import DarkMode from './lib/darkmode'

import App from './app';

DarkMode();

ReactDOM.render(<App />, document.getElementById("root"));
