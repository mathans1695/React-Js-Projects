import React, { Component } from 'react';
import Die from './Die';
import { randomNum } from './helper';
import './Dices.css';

class Dices extends Component {
	constructor(props) {
		super(props);
		this.state = {
			die1: 0,
			die2: 0,
			isRolling: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	
	rollDies() {
		this.setState({isRolling: true,
					   die1: 0,
					   die2: 0
		});
		let self = this;
		
		setTimeout(function() {
			self.setState(
			{isRolling: false,
			 die1: randomNum(1, 6),
			 die2: randomNum(1, 6)
			});
		}, 1000);
	}
	
	handleClick(e) {
		this.rollDies();
	}
	
	render() {
		const diceButton = this.state.isRolling 
			? <button className='Dices-rolling' onClick={this.handleClick} disabled={true}>Rolling....</button>
			: <button className='Dices-roll-dices' onClick={this.handleClick}>Roll Dice!</button>
		
		
		return (
			<div className='Dices'>
				<Die num={this.state.die1} isRolling={this.state.isRolling}/>
				<Die num={this.state.die2} isRolling={this.state.isRolling}/>
				{diceButton}
			</div>
		);
	}
}

export default Dices;