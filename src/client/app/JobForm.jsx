import React from 'react';

// import CurrentTime from './CurrentTime.jsx';

class JobForm extends React.Component {

	constructor() {
		super();

		this.state = {
			counter: 1000000
		};
		this._incrementId = this._incrementId.bind(this);
	}

	_setTime(){
		var fullDate = new Date();

		//Date
		var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
		var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
		
		//Time
		var hours = fullDate.getHours() < 10 ? "0" + fullDate.getHours() : fullDate.getHours();
		var minutes = fullDate.getMinutes() < 10 ? "0" + fullDate.getMinutes() : fullDate.getMinutes();
		var seconds = fullDate.getSeconds() < 10 ? "0" + fullDate.getSeconds() : fullDate.getSeconds();
		var currentTime = hours + ":" + minutes + ":" + seconds;

		//console.log('Date: [', currentDate, '] <=> Time: [', currentTime, ']');

		this.setState({
			currentTime: currentTime,
			currentDate: currentDate
		});
	}

	_getInitialState() {
		return {
			counter: counter,
			randomNumber: 1000000
		};
	}

	_generateRandomNumber() {
		var randomNumber = Math.floor((Math.random() * 1000000));
		this.setState({
			randomNumber: randomNumber
		});
		// console.log('_generateRandomNumber() called',randomNumber);
	}

	_incrementId() {
		var counter = this.state.counter++;
		this.setState({
			counter: this.state.counter
		});
		// console.log('_incrementId() called',this.state.counter);
	}

	componentWillMount(){
		this._setTime();
		//this._incrementId();
		this._generateRandomNumber();
	}

	componentDidMount(){
		this._timer = window.setInterval(function () {
			this._setTime();
			this._generateRandomNumber();
		}.bind(this), 1000);
		//this._incrementId();
	}

	componentWillUnmount() {
		clearInterval(this._timer);
	}

	_handleSubmit(event) {
		event.preventDefault();

		let jobid = this._jobid;
		let time = this._time;
		let name = this._name;
		let title = this._title;
		let desc = this._desc;

		this.props.addJob(jobid.value, time.value, name.value, title.value, desc.value);
	}

	render() {
		return (
			<form className="job-form" onSubmit={this._handleSubmit.bind(this)}>
				<h3>Add Job</h3>
				<div>Randomiser: {this.state.randomNumber}</div>
				<div>Number: {this.state.counter+1}</div>
				<div className="row job-form-fields">
					<input type="hidden" placeholder="Time:" value={`${this.state.currentDate} at ${this.state.currentTime}`} ref={(input) => this._time = input}/>
					<input type="hidden" placeholder="ID:" value={`${this.state.counter}${this.state.randomNumber}`}ref={(input) => this._jobid = input}/>

					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 job-field">
						<label>
							<input type="text" placeholder="Name:" ref={(input) => this._name = input}/>
						</label>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 job-field">
						<label>
							<input type="text" placeholder="Title:" ref={(input) => this._title = input}/>
						</label>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 job-field">
						<label>
							<textarea placeholder="Description:" ref={(textarea) => this._desc = textarea}></textarea>
						</label>
					</div>
				</div>
				<div className="job-form-actions">
					<button className="btn pull-left" onClick={this._incrementId} type="submit">Add job</button>
					<div className="pull-right">
						<div className="text-right">Current date and time:</div>
						<div className="text-right">{this.state.currentDate}</div>
						<div className="text-right">{this.state.currentTime}</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</form>
		);
	}
}

export default JobForm;