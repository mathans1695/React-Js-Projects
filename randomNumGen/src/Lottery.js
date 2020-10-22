import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component {
	static defaultProps = {
		title: 'Mega Lottery',
		max: 40,
		numBalls: 6
	}
	
	constructor(props) {
		super(props);
		
		this.state = {
			randNum: []
		}
		
		this.randomNum = this.randomNum.bind(this);
		this.randomArray = this.randomArray.bind(this);
	}
	
	randomNum() {
		return Math.floor(Math.random() * this.props.max) + 1;
	}
	
	randomArray() {
		for(let i=0; i<this.props.numBalls; i++) {
			this.state.randNum.push(this.randomNum());
		}
	}
	
	render() {
		this.randomArray();
		return (
			<div className='Lottery'>
				<h3 className='Lottery__title'>{this.props.title}</h3>
				<Ball randArrNum = {this.state.randNum} />
				<button 
				className='Lottery__GenerateButton'
				onClick={this.randomArray}
				>
					Generate
				</button>
			</div>
		)
	}
}

export default Lottery;