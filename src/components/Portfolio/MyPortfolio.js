import React from "react";
import { Link } from "react-router-dom";

export default () => <div>
    Here is the inventory of my portfolio:
	<ul>
		<li> <Link to = '/portfolio/1'
			title = "Item 1 details" > Item 1 </Link></li>
		<li > <Link to = '/portfolio/2' > Item 2 </Link></li>
		<li > <Link to = '/portfolio/3' > Item 3 </Link></li>
	</ul> </div>
;