import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// import AppRouter from "./routers/ExpensifyRouter";
// import AppRouter from "./routers/PortfolioRouter.js";
import Workspace from "./components/Workspace";

ReactDOM.render(<Workspace/>, document.getElementById("root"));
registerServiceWorker();
