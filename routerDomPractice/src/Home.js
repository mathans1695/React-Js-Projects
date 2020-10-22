import React, { Component } from 'react';
import FoodSearch from './FoodSearch';

class Home extends Component {
	render() {
		return (
			<div className='Home'>
				<FoodSearch />
			</div>
		)
	}
}

export default Home;