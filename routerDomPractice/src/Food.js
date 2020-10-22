import React, { Component } from 'react';
import './Food.css';

class Food extends Component {
	render() {
		const src = `https://source.unsplash.com/640x480/?${this.props.name}`;
		return (
			<div className='Food'>
				<h1>Have a nice {this.props.name}</h1>
				<img src={src} alt='this.props.name' className='Food-img' />
			</div>
		);
	}
}

export default Food;