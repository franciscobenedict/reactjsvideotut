import React from 'react';
import {render} from 'react-dom';

/*
var $ = require('../../../node_modules/jquery/jquery.js');
window.jQuery = $;
window.$ = $;
*/

/*
import AwesomeComponent from './AwesomeComponent.jsx';
import Data from './data.jsx';
*/

import CurrentTime from './currentTime.jsx';
import JobBox from './JobBox.jsx';

class App extends React.Component {

	render () {
		return (
			<CurrentTime />
			<JobBox />
		);
	}
}

render(<App/>, document.getElementById('app'));