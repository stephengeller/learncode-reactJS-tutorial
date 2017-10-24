import React from "React";
import ReactDOM from "react-dom";

import Title from "./Header/Title";

export default class Header extends React.Component {
	handleChange(e) {
		// e.target is the element that is receiving the onChange, which is the input
		const title = e.target.value;
		this.props.changeTitle(title);
	}

	render() {
		return (
			<div>
				<Title title={this.props.title} />
				<input onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}

// function tick() {
// 	const element = (
// 		<div>
// 			<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 		</div>
// 	);
// 	ReactDOM.render(element, document.getElementById("time"));
// }
//
// tick();
// setInterval(tick, 1000);
