import React, { Component } from 'react';
import './TotalPoints.css';

class TotalPoints extends Component {
	render() {
		let total = 0;
		Object.values(this.props.scores).forEach(value => {
			if(value) {
				total += value;
			}
		});
		return (
			<div className='TotalPoints'>
				<h2 className='TotalPoints-points'>Total Points: {total}</h2>
			</div>
		)
	}
}

export default TotalPoints;