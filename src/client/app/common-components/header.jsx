import React from 'react';
import {render} from 'react-dom';

class Header extends React.Component {
	render () {
		return (
			<div className="header-section">
				<div className="logo-and-search">
					<div className="container">
						<img src="./public/images/ca-logo_100px.svg" alt="" />
					</div>
				</div>
				<nav className="main-nav">
					<div className="container">
						<ul>
							<li>Link 1</li>
							<li>Link 2</li>
							<li>Link 3</li>
							<li>Link 4</li>
						</ul>
					</div>
				</nav>
			</div>

		)
	}
}

export default Header;