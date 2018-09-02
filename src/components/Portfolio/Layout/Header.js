import React from "react";
import {NavLink} from "react-router-dom";
import "./../styles/Navigation.css";

export default () =>
	<div>
		<h1>Portfolio App</h1>
		<ul>
			<li>
				<NavLink to="/" exact activeClassName='is-active'>Home</NavLink></li>
			<li><NavLink to="/display" activeClassName='is-active'>My Portfolio</NavLink></li>
			<li><NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
			</li>
		</ul>
	</div>;