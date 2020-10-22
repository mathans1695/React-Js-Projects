import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Dog.css';

class Dog extends Component {
	render() {
		const [display] = this.props.dogs.filter((dog) => dog.name.toLowerCase() === this.props.match.params.name);
		let renderThis = '';
		
		if(display) {
			renderThis = (<div className='Dog'>
							<h1 className='Dog-name'>{display.name}</h1>
							<img src={display.src} alt={display.name} className='Dog-img' />
							<p className='Dog-age'>AGE - {display.age}</p>
							<ul className='Dog-facts'>
								{display.facts.map((fact, index) => <li className='Dog-fact' key={index}>{fact}</li>)}
							</ul>
						 </div>)
		} else {
			renderThis = <Redirect to='/' />
		}
		
		return renderThis;
	}
}

export default Dog;