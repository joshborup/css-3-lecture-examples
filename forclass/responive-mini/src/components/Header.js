import React, { Component } from "react";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
	}

	toggler = () => {
		this.setState((prevState) => {
			return {
				toggle: !prevState.toggle
			};
		});
	};

	render() {
		return (
			<header>
				<div>
					<div className="logo">My logo</div>
					<button onClick={this.toggler}>Menu</button>
					<ul className={this.state.toggle ? "show" : ""}>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Staff</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}
