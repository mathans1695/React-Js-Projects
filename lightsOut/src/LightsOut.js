import React, { Component } from 'react';
import './LightsOut.css';
import LightSquare from './LightSquare';
import { randomArr } from './helpers';


class LightsOut extends Component {
	constructor(props) {
		super(props);
		let arr = [];
		let initialSet = randomArr(this.props.numActive, this.props.numSquare);
		
		for(let i=0; i<this.props.numSquare; i++) {
			if(initialSet.has(i)) {
				arr[i] = true;
			} else {
				arr[i] = false;
			}
		}
		
		this.state = {
			isActive: arr,
			isWinner: false
		}
		this.changeState = this.changeState.bind(this);
		this.restartGame = this.restartGame.bind(this);
	}
	
	changeState(e) {
		let elem = [];
		let leftId, rightId, topId, bottomId;
		const temp = Number(e.target.id);
		const squareRoot = Math.sqrt(this.props.numSquare);
		
		if(temp === squareRoot 
		   || temp === squareRoot * 2 
		   || temp === squareRoot * 3 
		   || temp === squareRoot * 4) {
			rightId = temp + 1;
			topId = temp - squareRoot;
			bottomId = temp + squareRoot;
		} 
		else if(temp === (squareRoot - 1) 
				  || temp === (squareRoot * 2 - 1) 
				  || temp === (squareRoot * 3 - 1)
				  || temp === (squareRoot * 4 - 1)
				  || temp === (squareRoot * 5 - 1)) {
			leftId = temp - 1;
			topId = temp - squareRoot;
			bottomId = temp + squareRoot;
		} 
		else {
			rightId = temp + 1;
			leftId = temp - 1;
			topId = temp - squareRoot;
			bottomId = temp + squareRoot;
		}
			  
		for(let i=0; i<this.props.numSquare; i++) {
			if(rightId === i
			   || leftId === i
			   || topId === i
			   || bottomId === i
			   || temp === i
			) {
				try {
					if(this.state.isActive[i]) {
						elem.push(false);
					} else {
						elem.push(true);
					}
				} catch(err) {
				}
			} else {
				if(this.state.isActive[i]) {
					elem.push(true);
				} else {
					elem.push(false);
				}
			}
		}
		this.setState({isActive: elem});
	}
	
	restartGame() {
		let arr = [];
		let initialSet = randomArr(this.props.numActive, this.props.numSquare);
		
		for(let i=0; i<this.props.numSquare; i++) {
			if(initialSet.has(i)) {
				arr[i] = true;
			} else {
				arr[i] = false;
			}
		}
		
		this.setState({isActive: arr});
	}
	
	render() {
		let count = 0;
		let disable = false;
		for(let i=0; i<this.props.numSquare; i++) {
			if(this.state.isActive[i] !== false) {
				count += 1;
			}
		}
		
		if(count === 0) {
			disable = true
		}
		
		let elem = [];	
		for(let i=0; i<this.props.numSquare; i++) {
			elem.push(<LightSquare isActive={this.state.isActive[i]} key={i} id={i} func={this.changeState} disable={disable}/>);
		}
		
		return (
			<div className='LightsOut'>
				<h1 className='LightsOut-title'>LIGHTS OUT</h1>
				<div className='LightsOut-container'>
					{disable ? <h2 className='LightsOut-win'>You Won</h2> : elem}
				</div>
				<button className='LightsOut-restart' onClick={this.restartGame}>Restart</button>
			</div>
		);
	}
}

export default LightsOut;