import React from 'react';
import './Card.css';

class Card extends React.Component {
	constructor(props) {
		super(props);
		let angle = Math.random() * 90 - 45;
		let xPos = Math.random() * 20 - 10;
		let yPos = Math.random() * 20 - 10;
		
		this.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
	}
	
	render() {
		return <img src={ this.props.src }
						alt={ this.props.code }
						key={ this.props.code }
						className='drawn_card'
						style={{ transform: this.transform }}
				/>
	}
}

export default Card;