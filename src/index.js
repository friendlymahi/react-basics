import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import AppRouter from "./routers/ExpensifyRouter";
// import AppRouter from "./routers/PortfolioRouter.js";

ReactDOM.render(AppRouter, document.getElementById("root"));
registerServiceWorker();
