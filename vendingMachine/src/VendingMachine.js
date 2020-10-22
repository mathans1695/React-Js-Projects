import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Soda from './Soda';
import Lays from './Lays';
import Sardines from './Sardines';
import './VendingMachine.css';

class VendingMachine extends Component {
	render() {
		return (
			<div className='VendingMachine'>
				<nav className='VendingMachine-nav'>
					<NavLink 
						className='VendingMachine-nav-link' 
						activeClassName='VendingMachine-nav-linkActive' 
						to='/'
						exact
					>
						Home
					</NavLink>
					<NavLink 
						className='VendingMachine-nav-link'
						activeClassName='VendingMachine-nav-linkActive' 
						to='/soda'
						exact
					>
						Soda
					</NavLink>
					<NavLink 
						className='VendingMachine-nav-link' 
						activeClassName='VendingMachine-nav-linkActive' 
						to='/lays'
						exact
					>
						Lays
					</NavLink>
					<NavLink 
						className='VendingMachine-nav-link' 
						activeClassName='VendingMachine-nav-linkActive' 
						to='/sardines'
						exact
					>
						Sardines
					</NavLink>
				</nav>
			</div>
		)
	}
}

export default VendingMachine;