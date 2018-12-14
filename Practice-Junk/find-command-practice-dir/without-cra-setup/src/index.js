import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { registerServiceWorker } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
