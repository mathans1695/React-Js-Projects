import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const links = this.props.names.map(name => (
							<li key={name} className='Navbar-link' >
								<NavLink exact 
									to={`/dogs/${name.toLowerCase()}`}
									className='Navbar-links'
									activeClassName='Navbar-active'>
										{name}
								</NavLink>
							</li>
						));
		return (
			<div className='Navbar'>
				<li key='home' className='Navbar-link'>
					<NavLink exact 
							to='/' 
							className='Navbar-links'
							activeClassName='Navbar-active'>
								Home
					</NavLink>
				</li>
				{links}
				<li key='back' className='Navbar-link' >
					<button onClick={this.props.history.goBack} className='Navbar-back' >Back</button>
				</li>
			</div>
		);
	}
}

export default withRouter(Navbar);