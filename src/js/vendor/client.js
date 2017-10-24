import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Bootstrap from "./bootstrap-without-jquery";

import Layout from "../pages/Layout";

const app = document.getElementById("app");

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout} />
	</Router>,
	app
);
