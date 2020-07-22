"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
require("./index.css");
const App_1 = require("./App");
const serviceWorker = require("./serviceWorker");
react_dom_1.default.render(
  <react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.jsx.map
