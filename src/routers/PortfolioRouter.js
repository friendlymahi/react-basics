import React from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Welcome from "./../components/Portfolio/Welcome";
import Header from "./../components/Portfolio/Layout/Header";
import MyPortfolio from "./../components/Portfolio/MyPortfolio";
import DisplayItem from "./../components/Portfolio/DisplayItem";
import Contact from "./../components/Portfolio/Contact";
import Unknown from "./../components/Portfolio/Unknown";

export default
<BrowserRouter>

	<div>
		<Header />
		<Switch>
			<Route path="/" component={Welcome} exact />
			<Route path="/display" component={MyPortfolio} />
			<Route path="/contact" component={Contact} />
			<Route path="/portfolio/:id" component={DisplayItem} />
			<Route component={Unknown} />
		</Switch>
	</div>
</BrowserRouter>;