import React from 'react';

import JobForm from './JobForm.jsx';
import Job from './Job.jsx';

class JobBox extends React.Component {
	constructor() {
		super();

		this.state = {
			showJobs: false,
			jobs: []
		};
	}

	componentWillMount() {
		this._fetchJobs();
	}
	
	render () {
		const jobs = this._getJobs();
		const disableButton = {
			cursor: 'default',
			pointerEvents: 'none',
			color: '#c0c0c0',
			backgroundColor: '#ffffff'
		}
		let jobNodes;
		
		if (this.state.showJobs) {
			jobNodes = <div className="job-list">{jobs}</div>;
		}

		let buttonText = 'Show jobs';
		if (this.state.showJobs) {
			buttonText = 'Hide jobs';
		}

		return (
			<div className="job-box">
				<JobForm addJob={this._addJob.bind(this)}/>
				<h3>Jobs {jobs.length}</h3>
				<h4 className="job-count">{ this._getJobsTitle(jobs.length) }</h4>
				<button onClick={this._handleClick.bind(this)} className={"btn " + (jobs.length > 0 ? '' : 'disableButton')}>{buttonText}</button>
				{jobNodes}
			</div>
		);
	}

	_getJobs() {
		return this.state.jobs.map((job) => {
			return (
				<Job 
					key={ job.id } 
					//id={ job.id }
					jobid={ job.jobid }
					time={ job.time } 
					name={ job.name } 
					title={ job.title } 
					desc={ job.desc } 
					onDelete={this._deleteJob.bind(this)}
				/>
			);
		});
	}

	_getJobsTitle(jobCount) {
		if (jobCount === 0) {
			return "No jobs yet";
		} else if (jobCount === 1) {
			return "1 job";
		} else {
			return `${jobCount} jobs`;
		}
	}

	_addJob (jobid, time, name, title, desc) {
		// let job = {
		// 	id: Math.floor(Math.random() * (9999 - this.state.jobs.length + 1)) + this.state.jobs.length,
		// 	jobid: jobid,
		// 	time: time,
		// 	name: name,
		// 	title: title,
		// 	desc: desc
		// };
		// this.setState({ 
		// 	jobs: this.state.jobs.concat([job])
		// });

		const job = {
			jobid,
			time,
			name,
			title,
			desc
		};

		$.ajax ({
			type: "POST",
			dataType : 'json',
			async: false,
			cache: false,
			url: 'app/api/jobs.json',
			data: { job: job },
			success: function (job) {
				//alert("Thanks!");
				this.setState({ 
					jobs: this.state.jobs.concat([job]) 
				})
			}.bind(this),
			failure: function() {
				alert("Error!");
			}
		});

		// jQuery.post("app/api/jobs.json", { job })
		// 	.success: function (newJob) {
		// 		//alert("Thanks!");
		// 		this.setState({ 
		// 			jobs: this.state.jobs.concat([newJob]) 
		// 		})
		// 	}.bind(this),
		// 	failure: function() {
		// 		alert("Error!");
		// 	}

			// .success(newJob => {
			// 	this.setState({ jobs: this.state.jobs.concat([newJob]) });
			// });





				// {
				// this.setState({
				// 	jobs: this.state.jobs.concat([newJob])
				// })
			//.success(newJob => this.setState.jobs.concat({newJob})	
				//}
		



		// $.ajax({
		// 	url : '/app/api/jobs.json',
		// 	type : 'POST',
		// 	data : { 'job': job },
		// 	success : function( job ) {
		// 		console.log( response );
		// 	}
		// });

	}

	_fetchJobs() {
		console.log('_fetchJobs() called');
		// THIS EXAMPLE WORKS PERFECTLY!!!! (Check out the two success methods below)
		$.ajax({
			url: "app/api/jobs.json", 
			dataType: "json", 
			cache: false,
			method: "GET",
			success: (jobs) => this.setState({jobs})

			// success: function(jobs) { 
			// 	this.setState({ 
			// 		jobs: jobs 
			// 	})
			// }.bind(this)
		});

		// $.ajax ({
		// 	type: "GET",
		// 	dataType : 'json',
		// 	cache: false,
		// 	async: false,
		// 	url: 'app/api/jobs.json',
		// 	//data: { data: data },
		// 	success: function (jobs) {
		// 		//alert("Thanks!");
		// 		this.setState({ 
		// 			jobs: jobs 
		// 		})
		// 	}.bind(this),
		// 	failure: function() {
		// 		alert("Error!");
		// 	}
		// });


		// // THIS EXAMPLE WORKED!!!!
		//===========================
		// $.getJSON( "app/api/jobs.json", function( data ) {
		// 	var jobs = data;
		// 	console.log('jobs',jobs);
		// });
	}
        
	_deleteJob(job) {
		console.log('job.id',job.id);
		// const jobs = this.state.jobs.filter(
		// 	job => job.id !== jobID
		// );

		$.ajax({
			method: "DELETE",
			url: `app/api/jobs.json/${job.id}`
		});


		// $.ajax ({
		// 	method: "DELETE",
		// 	dataType : 'json',
		// 	async: false,
		// 	cache: false,
		// 	url: `/app/api/jobs.json/${job.id}`,
		// 	data: { job: job },
		// 	success: function (job) {
		// 		//alert("Thanks!");
		// 		this.setState({ 
		// 			jobs: this.state.jobs.concat([job]) 
		// 		})
		// 	}.bind(this),
		// 	failure: function() {
		// 		alert("Error!");
		// 	}
		// });


		const jobs = [...this.state.jobs];
		const jobIndex = jobs.indexOf(job);
		jobs.splice(jobIndex, 1);

		this.setState({ jobs });
	}
	
	componentDidMount() {
		this._timer = setInterval(
			() => this._fetchJobs(),
			5000
		);
	}

	componentWillUnmount() {
		clearInterval(this._timer);
	}

	_handleClick() {
		this.setState({
			showJobs: !this.state.showJobs
		});
	}
}

export default JobBox;