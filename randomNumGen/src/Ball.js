import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
	
	display(propsArr) {
		let temp = [];
		
		for(let i=0; i<propsArr.length; i++) {
			temp.push(<div className='Ball__indiv'>{`0${propsArr[i]}`.slice(-2)}</div>)
		}
		return temp;
	}
	
	render() {
		
		const arr = this.display(this.props.randArrNum);
		
		return (
			<div className='Ball'>
				{arr}
			</div>
		)
	}
}

export default Ball;