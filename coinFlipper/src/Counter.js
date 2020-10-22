import React from 'react';


class Counter extends React.Component {
	render() {
		return (
			<div className='Counter'>
				<p>Out of {this.props.nFlips} flips, {this.props.nHeads} heads and {this.props.nTails} tails</p>
				<h2>Probability</h2> 
				<p>{(this.props.nHeads/this.props.nFlips) * 100}% Heads</p>
				<p>{(this.props.nTails/this.props.nFlips) * 100}% Tails</p>
			</div>
		)
	}
}

export default Counter;