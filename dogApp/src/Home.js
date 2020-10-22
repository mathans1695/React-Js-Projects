import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<h1>Want to Explore Dogs?</h1>
				<Link exact to='/dogs' className='Home-link'>Click to Explore</Link>
			</div>
		)
	}
}

export default Home;