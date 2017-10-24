import React from "React";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {
	constructor() {
		// always call super() on first line!
		super();
		this.name = "Stephen";
	}

	render() {
		const name = "Stephen";
		return (
			<div>
				<Header />
				<h3>It's working!</h3>
				<h3>Wow, 3 + 3 = {3 + 3}!</h3>
				<h3>This person is {this.name}!</h3>
				<Footer />
			</div>
		);
	}
}
