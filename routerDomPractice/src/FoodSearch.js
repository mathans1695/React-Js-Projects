import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foodName: '',
			drinkName: ''
		}
		this.changeFoodName = this.changeFoodName.bind(this);
		this.changeDrinkName = this.changeDrinkName.bind(this);
	}
	
	changeFoodName(e) {
		this.setState({foodName: e.target.value});
	}
	
	changeDrinkName(e) {
		this.setState({drinkName: e.target.value});
	}
	
	render() {
		return (
			<div className='FoodSearch'>
				<label htmlFor='food'>What food do you want?</label>
				<input type='text' name='food' value={this.state.foodName} id='food' onChange={this.changeFoodName} />
				<Link to={`food/${this.state.foodName}`} >Go!</Link>
				<label htmlFor='food'>What drink do you want?</label>
				<input type='text' name='drink' value={this.state.drinkName} id='food' onChange={this.changeDrinkName} />
				<Link to={`food/${this.state.foodName}/drink/${this.state.drinkName}`} >Go!</Link>
			</div>
		)
	}
}

export default FoodSearch;