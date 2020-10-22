import React, { Component } from 'react';
import Pokecard from './pokecard';
import './styles/Pokedex.css';
import ReactDOM from 'react-dom';

class Pokedex extends Component {
	render() {
		let array = [];
		let self = this;
		const poke = (function() {
			for(let i=0; i<self.props.pokeman.length; i++) {
				array.push(<Pokecard 
						id={self.props.pokeman[i].id}
						name={self.props.pokeman[i].name}
						type={self.props.pokeman[i].type}
						exp={self.props.pokeman[i].base_experience}
					/>);
			}
			return array;
		})();
		
		return (
			<div className='Pokedex'>
				{array}
			</div>
		)
	}
}


export default Pokedex;