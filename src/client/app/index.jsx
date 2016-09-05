import React from 'react';
import {render} from 'react-dom';

import controller from '../public/react-controllers/scripts/common-controller.js';

/*
var $ = require('../../../node_modules/jquery/jquery.js');
window.jQuery = $;
window.$ = $;
*/

/*
import AwesomeComponent from './AwesomeComponent.jsx';
import Data from './data.jsx';
import Person from './data/person.js';
*/

import Header from './common-components/header.jsx';
import Footer from './common-components/footer.jsx';
import JobBox from './JobBox.jsx';

// Header
class CommonComponentHeader extends React.Component {
	render () {
		return (
			<Header />
		);
	}
}
render(<CommonComponentHeader/>, document.getElementById('headerComponent'));

// Main Application
class App extends React.Component {
	render () {
		return (
			<JobBox />
		);
	}
}
render(<App/>, document.getElementById('app'));

// Footer
class CommonComponentFooter extends React.Component {
	render () {
		return (
			<Footer />
		);
	}
}
render(<CommonComponentFooter/>, document.getElementById('footerComponent'));