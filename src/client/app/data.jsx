import React from 'react';

class JobBox extends React.Component {

	render () {
		const jobs = this._getData();
		return (
			<div className="jobs-list">
				<h1>A List of Jobs</h1>
				<h2>
					{this._getJobsTitle(jobs.length)}
				</h2>
				<ul>
					<li className="job-items">{jobs}</li>
				</ul>
			</div>
		);
	}

	_getData() {
		const jobList = [
			{ id: 1, name: "Nancy", title: "Career Advisor" },
			{ id: 2, name: "Cisco", title: "Programmer" }
		];

		return jobList.map((job) => {
			return (<Job name={job.name} job={job.title} key={job.id}/>);
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
}

export default JobBox;