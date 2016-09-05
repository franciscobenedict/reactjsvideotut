//jobs.js
/*
var React = require('react');
var ReactDOM = require('react-dom');

var Jobs = React.createClass({
	render: function() {
		return {
			"jobsList" : [
				{
					"jobType": "Web developer",
					"desc": "Creates website"
				},
				{
					"jobType": "Bin Man",
					"desc": "Collects bins"
				},
				{
					"jobType": "Teddy bear maker",
					"desc": "Sews fabrics together to create children's soft toys"
				}
			]
		}	
	}
});

module.exports = Jobs;
*/


/*
var Jobs = (function () {
	"use strict";
	return {
		"jobs": [
			{
				"jobType": "Web developer",
				"desc": "Creates website"
			},
			{
				"jobType": "Bin Man",
				"desc": "Collects bins"
			},
			{
				"jobType": "Teddy bear maker",
				"desc": "Sews fabrics together to create children's soft toys"
			}
		]
	};
}());
*/

export default {
	jobs: [
		{
			"jobType": "Web developer",
			"desc": "Creates website"
		},
		{
			"jobType": "Bin Man",
			"desc": "Collects bins"
		},
		{
			"jobType": "Teddy bear maker",
			"desc": "Sews fabrics together to create children's soft toys"
		}
	]
};