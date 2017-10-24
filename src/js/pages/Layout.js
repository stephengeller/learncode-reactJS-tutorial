import React from "React";
import { Link } from "react-router";

export default class Layout extends React.Component {
	navigate() {
		this.props.history.pushState(null, "/");
		// Could also use replaceState, which doesn't give you the option to use the 'back' button
	}

	render() {
		return (
			<div>
				<h1>Layout</h1>
				{this.props.children}
				<Link to="archives">Archives</Link>
				<Link to="settings">Settings</Link>
				<button onClick={this.navigate.bind(this)}>Featured</button>
			</div>
		);
	}
}
