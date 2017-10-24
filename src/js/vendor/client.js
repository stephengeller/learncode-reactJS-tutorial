import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Bootstrap from "./bootstrap-without-jquery";

import Archives from "../pages/Archives";
import Featured from "../pages/Featured";
import Layout from "../pages/Layout";
import Settings from "../pages/Settings";

const app = document.getElementById("app");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Featured} />
			<Route path="archives" component={Archives} />
			<Route path="settings" component={Settings} />
			<Route path="featured" component={Featured} />
		</Route>
	</Router>,
	app
);

// ReactDOM.render(<Layout />, app);
