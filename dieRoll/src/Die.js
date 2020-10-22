import React, { Component } from 'react';
import './Die.css';


class Die extends Component {
	
	render() {
		let dieCircle = [];
		
		if(this.props.num === 1) {
			for(let i=0; i<9; i++) {
				if(i === 4) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		} else if(this.props.num === 2) {
			for(let i=0; i<9; i++) {
				if(i === 0 || i === 8) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		} else if(this.props.num === 3) {
			for(let i=0; i<9; i++) {
				if(i === 0 || i === 8 || i === 4) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		} else if(this.props.num === 4) {
			for(let i=0; i<9; i++) {
				if(i === 0 || i === 2 || i === 6 || i === 8) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		} else if(this.props.num === 5) {
			for(let i=0; i<9; i++) {
				if(i === 0 || i === 2 || i === 4 || i === 6 || i === 8) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		} else if(this.props.num === 6) {
			for(let i=0; i<9; i++) {
				if(i === 0 || i === 2 || i === 3 || i === 5 || i === 6 || i === 8) {
					dieCircle.push(<div key={i} className='Die-circle Die-circle--display' />);
				} else {
					dieCircle.push(<div key={i} className='Die-circle' />);
				}
			}
		}
		
		const isRolling = this.props.isRolling ? 'Die Die--rolling' : 'Die';
		
		return (
			<div className={isRolling}>
				{dieCircle}
			</div>
		);
	}
}

export default Die;