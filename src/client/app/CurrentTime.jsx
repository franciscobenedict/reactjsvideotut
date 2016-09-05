import React from 'react';

class CurrentTime extends React.Component {
	render () {
		const fullDate = new Date();
		//Date
		const twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
		const currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
		
		//Time
		const hours = fullDate.getHours() < 10 ? "0" + fullDate.getHours() : fullDate.getHours();
		const minutes = fullDate.getMinutes() < 10 ? "0" + fullDate.getMinutes() : fullDate.getMinutes();
		//const seconds = fullDate.getSeconds() < 10 ? "0" + fullDate.getSeconds() : fullDate.getSeconds();
		const time = hours + ":" + minutes;// + ":" + seconds;

		// return ( <span>{ fullDate.toTimeString() }</span>);
		return ( <span>{currentDate} at {time}</span>);
	}
}

export default CurrentTime;