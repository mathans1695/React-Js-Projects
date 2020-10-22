import React from 'react';
import Pokedex from './pokedex';
import './styles/Pokegame.css';


const deck1 = [
	{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
	{id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
	{id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
	{id: 12, name: 'Butterfree', type: 'flying', base_experience: 178}	
]

const deck2 = [
	{id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
	{id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
	{id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
	{id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

let deck1Total = 0;
let deck2Total = 0;

for(let i=0; i<deck1.length; i++) {
	deck1Total += deck1[i].base_experience;
}

for(let i=0; i<deck1.length; i++) {
	deck2Total += deck2[i].base_experience;
}

class Pokegame extends React.Component {
	render() {
		return (
		<div className='Pokegame'>
			<h1 className='Pokegame__heading'>POKEGAME</h1>
			{deck1Total > deck2Total ? 
				<li className='Pokegame__winner'>Winner</li> :
				<li className='Pokegame__loser'>Loser</li>
			}
			<Pokedex pokeman={deck1} />
			{deck1Total < deck2Total ? 
				<li className='Pokegame__winner'>Winner</li> :
				<li className='Pokegame__loser'>Loser</li>
			}
			<Pokedex pokeman={deck2} />
		</div>
		)
	}
}

export default Pokegame;