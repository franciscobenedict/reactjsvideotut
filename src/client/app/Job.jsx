import React from 'react';

class Job extends React.Component {

	render () {
		const divStyle = {
			color: '#666666',
			//backgroundImage: 'url(' + imgUrl + ')',
			WebkitTransition: 'all', // note the capital 'W' here
			msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		}

		const detailStyle = {
			color: 'blue'
		}

		const aTagBtn = {
			backgroundColor: '#666666',
			color: '#ffffff'
		}

		return (
			<div className="job" style={divStyle}>
				<p className="time-stamp">Date/Time: <span style={detailStyle}>{this.props.time}</span></p>
				<p className="job-id">ID: <span style={detailStyle}>{this.props.jobid}</span></p>
				<p className="name">Name: <span style={detailStyle}>{this.props.name}</span></p>
				<p className="job-header">Job title: <span style={detailStyle}>{this.props.title}</span></p>
				<p className="job-desc">Description: <span style={detailStyle}>{this.props.desc}</span></p>
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