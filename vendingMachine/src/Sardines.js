import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sardines.css';

class Sardines extends Component {
	render() {
		return (
			<div className='Sardines'>
				<h1>Enjoy the sardines</h1>
				<Link to='/'>Back to Home</Link>
			</div>
		)
	}
}

export default Sardines;