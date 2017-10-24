import React from "React";

import Header from "./Header.js";
import Footer from "./Footer.js";

export default class Layout extends React.Component {
	constructor() {
		// always call super() on first line!
		super();
		this.state = {
			title: "Welcome"
		};
	}

	changeTitle(title) {
		this.setState({ title });
	}

	render() {
		return (
			<div>
				<Header
					changeTitle={this.changeTitle.bind(this)}
					title={this.state.title}
				/>
				<Footer />
			</div>
		);
	}
}
