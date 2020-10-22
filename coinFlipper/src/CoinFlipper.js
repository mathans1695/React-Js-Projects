import React from 'react';
import Coin from './Coin';
import Counter from './Counter';
import './styles/CoinFlipper.css';


class CoinFlipper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nFlips: 0,
			nHeads: 0,
			nTails: 0,
			isHead: null
		}
		
		this.handleClick = this.handleClick.bind(this);
	}
	
	changeState() {
		const flip = this.randomFunc();
		this.setState({ nFlips: this.state.nFlips + 1 });
		
		if(flip === 1) {
			this.setState({ nHeads: this.state.nHeads + 1,
							isHead: true });
		} else {
			this.setState({ nTails: this.state.nTails + 1,
							isHead: false });
		}
	}
	
	handleClick() {
		this.changeState();
	}
	
	randomFunc() {
		return Math.floor(Math.random() * 2);
	}
	
	render() {
		
		return (
			<div className='CoinFlipper'>
				<h1 className='CoinFlipper-title'>Coin Flipper</h1>
				<Coin head={this.state.isHead} />
				
				<button 
				className='CoinFlipper-button'
				onClick={this.handleClick}
				>
				Flip Meee</button>
				
				<Counter nFlips={this.state.nFlips} 
						 nTails={this.state.nTails}
						 nHeads={this.state.nHeads}
				/>
			</div>
		)
	}
}

export default CoinFlipper;