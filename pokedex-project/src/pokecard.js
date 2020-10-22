import React from 'react';
import './styles/Pokecard.css'

class Pokecard extends React.Component {
	render() {
		return (
			<div className='Pokedex__Pokecard Pokecard' key={this.props.id}>
				<h3 className='Pokecard__name'>{this.props.name}</h3>
				<div className='Pokecard__img'>
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`} alt='' className='Pokecard__img--fill' />
				</div>
				<p className='Pokecard__type'>Type: {this.props.type}</p>
				<p className='Pokecard__exp'>EXP: {this.props.exp}</p>
			</div>
		)
	}
}

export default Pokecard;