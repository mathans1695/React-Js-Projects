import React, { Component } from 'react';
import Joke from './Joke';
import './Jokes.css';

class Jokes extends Component {
	render() {
		const self = this;
		
		return (
			<div className='Jokes'>
				{this.props.jokes.map(function(joke, index) {
					return <Joke key={index} joke={joke} id={index} emojis={self.props.emojis} />
				})}
			</div>
		)
	}
}


export default Jokes;