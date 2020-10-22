import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<div className='Home-info'>
					Take whatever you want, but before that feed the machine with money
				</div>
				<div className='Home-buy'>
					<Link 
						to='/soda'
						className='Home-buy-links'
					>
						Soda
					</Link>
					<Link 
						to='/lays'
						className='Home-buy-links'
					>
						Lays
					</Link>
					<Link 
						to='/sardines'
						className='Home-buy-links'
					>	
						Sardines
					</Link>
				</div>
			</div>
		);
	}
}

export default Home;