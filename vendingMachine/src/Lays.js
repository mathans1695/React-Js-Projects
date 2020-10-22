import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Lays.css';

class Lays extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			arrOfStyles: []
		}
	}
	
	handleClick(evt) {
		const [xPos, yPos] = this.randomPos();
		const style = {
			position: 'absolute',
			top: `${yPos+50}px`,
			left: `${xPos}px`
		}
		
		const arrOfStyles = this.state.arrOfStyles;
		
		arrOfStyles.push(style);
		this.setState({arrOfStyles: arrOfStyles});
	}
	
	randomPos() {
		let arrOfPos = [];
		arrOfPos[0] = Math.random() * (window.innerWidth-250);
		arrOfPos[1] = Math.random() * (window.innerHeight-350);
		
		return arrOfPos;
	}
	
	render() {
		return (
			<div className='Lays'>
				<div className='Lays-main'>
					<h2>Enjoy the lays</h2>
					<button onClick={this.handleClick}>Get More</button>
					<Link to='/' className='Lays-homeLink'>Back To Homepage</Link>
				</div>
				<div className='Lays-img'>
					{this.state.arrOfStyles.map((style) => {
						return <img src='/images/lays.jpeg' alt='' style={style} />
					})}
				</div>
			</div>
		);
	}
}

export default Lays;