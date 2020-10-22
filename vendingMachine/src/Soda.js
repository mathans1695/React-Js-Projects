import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Soda.css'

class Soda extends Component {
	render() {
		return (
			<div className='Soda'>
				<img src='/images/cocacola.jpg' alt='' className='Soda-img' />
				<div className='Soda-content'>
					<h2>Enjoy the Soda</h2>
					<Link 
						to='/' 
						className='Soda-HomeLink'
					>
						Back To Homepage
					</Link>
				</div>
				<img src='/images/cocacola.jpg' alt='' className='Soda-img' />
			</div>
		);
	}
}

export default Soda;