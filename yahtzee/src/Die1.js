import React, { Component } from 'react';
import './Die1.css';


class Die extends Component {
	
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		this.props.handleClick(this.props.idx);
	}
	
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
		
		let dieRolling = [];
		for(let i=0; i<9; i++) {
			dieRolling.push(<div key={i} className='Die-circle' />);
		}
		
		
		const isRolling = this.props.isRolling && !this.props.locked ? 'Die Die--rolling' : 'Die';
		
		let result;
		if(this.props.rollsLeft === 3) {
			result = (
				<div
					className={isRolling}
				>
					{dieRolling}
				</div>
			);
		} else {
			result = (
				<div
					style={{ backgroundColor: this.props.locked ? 'grey' : "pink" }}
					className={isRolling}
					onClick={this.handleClick}
				>
					{this.props.isRolling && !this.props.locked ? dieRolling : dieCircle}
				</div>
			);
		}
		
		return result
	}
}

export default Die;