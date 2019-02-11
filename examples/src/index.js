import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";
// import './blackrock/blackrock.css';
// import "./nav-styles/nav1.css";
// import "./nav-styles/nav2.css";
// import "./nav-styles/nav3.css";
import "./nav-styles/nav4.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
