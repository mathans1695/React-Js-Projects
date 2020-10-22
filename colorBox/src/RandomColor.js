import React from 'react';
import ColorBox from './ColorBox';
import { randomColor } from './helper';
import './RandomColor.css';

class RandomColor extends React.Component {
	constructor(props) {
		super(props);
		
		let elem = [];
		for(let i=0; i<15; i++) {
			elem.push(randomColor());
		}
		
		this.state = {
			color: elem
		}
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	changeColor(e) {
		const children = e.target.parentElement.children;
		let index;
		
		for(let i=0; i<children.length; i++) {
			if(children[i] === e.target) {
				index = i;
			}
		}
		
		let elem = [];
		for(let i=0; i<index; i++) {
			elem.push(this.state.color[i]);
		}
		
		elem.push(randomColor());
		
		for(let i=index + 1; i<children.length; i++) {
			elem.push(this.state.color[i]);
		}
		
		this.setState({color: elem});
	}
	
	handleClick(e) {
		this.changeColor(e);
	}
	
	render() {
		let element = [];
		
		for(let i=0; i<this.state.color.length; i++) {
			element.push(
				<ColorBox 
					color={this.state.color[i]}
					func={this.handleClick}
					key={i}
				/>
			);
		}
		
		return (
			<div className='RandomColor'>
				{element}
			</div>
		);
	}
}

export default RandomColor;