import React from "React";
import ReactDOM from "react-dom";

import Title from "./Header/Title";

export default class Header extends React.Component {
	render() {
		return (
			<div>
				<Title />
			</div>
		);
	}
}

function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById("time"));
}

setInterval(tick, 1000);
