import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dogs.css';

class Dogs extends Component {
	render() {
		const dogs = this.props.dogs;
		const display = dogs.map((dog) => {
			return (
				<div className='Dogs-indiv'>
					<Link to={`/dogs/${dog.name.toLowerCase()}`} className='Dogs-indiv-link'>
						<img className='Dogs-indiv-img' src={dog.src} alt={dog.name} />
						<h1 className='Dogs-indiv-name'>{dog.name}</h1>
					</Link>
				</div>
			);
		});
		return (
			<div className='Dogs'>
				{display}			
			</div>
		);
	}
}

export default Dogs;