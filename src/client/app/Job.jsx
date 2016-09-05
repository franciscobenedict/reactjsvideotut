import React from 'react';

class Job extends React.Component {

	render () {
		const divStyle = {
			color: 'blue',
			//backgroundImage: 'url(' + imgUrl + ')',
			WebkitTransition: 'all', // note the capital 'W' here
			msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		}

		const aTagBtn = {
			backgroundColor: '#666666',
			color: '#ffffff'
		}

		return (
			<div className="job" style={divStyle}>
				<p className="time-stamp">Date/Time: {this.props.time}</p>
				<p className="job-id">ID: {this.props.jobid}</p>
				<p className="name">Name: {this.props.name}</p>
				<p className="job-header">Job title {this.props.title}</p>
				<p className="job-desc">Description: {this.props.desc}</p>
				<div className="job-footer">
					<a href="#"
						className="btn job-footer-delete"
						style={aTagBtn} 
						onClick={this._handleDelete.bind(this)}>
						Delete Job
					</a>
				</div>
			</div>
		);
	}

	_handleDelete(event) {
		event.preventDefault();
		if (confirm("Are you sure?")) {
			this.props.onDelete(this.props.job);
		}
	}
}

export default Job;