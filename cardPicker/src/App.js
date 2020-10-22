import React from 'react';
import { Component } from 'react';
import './App.css';
import Card from './card';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deckArr: []
		}
		this.drawCard = this.drawCard.bind(this);
	}
	
	componentDidMount() {
		const response = fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
		const self = this;
		response.then(function(res) {
			return res.json();
		}).then(function(json) {
			self.state.deckId = json.deck_id;
		}).catch(function(err) {
			console.log(err);
		})
	}
	
	drawCard(e) {
		let url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
		const imgSrcJSON = fetch(url);
		const self = this;
		
		let angle = Math.random() * 90 - 45;
		let posX = Math.random() * 20 - 10;
		let posY = Math.random() * 20 - 10;
		
		let transform = `rotate(${angle}deg) translate(${posX}px, ${posY}px)`;
		
		imgSrcJSON
		.then(function(res) {
			return res.json();
		}).then(function(json) {
			const deckArrCopy = self.state.deckArr;
			
			deckArrCopy.push({
				src: json.cards[0].image,
				code: json.cards[0].code,
				remaining: json.remaining,
				transform: transform
			});
			
			self.setState({ deckArr: deckArrCopy });
		}).catch(err => console.log(err));
	}
	
	render() {
		const self = this;
				
		const displayStack = this.state.deckArr.map(function(item, index) {
			return <Card src={ self.state.deckArr[index].src }
						alt={ self.state.deckArr[index].code }
						key={ self.state.deckArr[index].code }
					/>
		});
		
		if (this.state.deckArr.length > 0) {
			console.log(this.state.deckArr[this.state.deckArr.length - 1].remaining);
		}
		
		return (
			<div className='content'>
				<h1 className='title'>Random Card Generator</h1>
				<button 
					className='draw_button'
					onClick={ this.drawCard }
				>Click to draw</button>
				{ this.state.deckArr.length > 0 
				  && this.state.deckArr[this.state.deckArr.length - 1].remaining > 0
				  && displayStack
				}
			</div>
		);
	}
}

export default App;
