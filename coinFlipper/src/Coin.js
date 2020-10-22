import React from 'react';
import './Coin.css';

class Coin extends React.Component {
	render() {
		let src, alt;
		if(this.props.head === true) {
			src = 'https://tinyurl.com/react-coin-heads-jpg';
			alt = 'head';
		} else if(this.props.head === false) {
			src = 'https://tinyurl.com/react-coin-tails-jpg';
			alt = 'tail';
		} else {
			return '';
		}
		
		return (
			<div className='Coin'>
				<img className='Coin-img' src={src} alt={alt}/>
			</div>
		)
	}
}

export default Coin;