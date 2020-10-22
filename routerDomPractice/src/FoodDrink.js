import React, { Component } from 'react';

class FoodDrink extends Component {
	render() {
		const foodName = `https://source.unsplash.com/640x480/?${this.props.foodName}`;
		const drinkName = `https://source.unsplash.com/640x480/?${this.props.drinkName}`;
		
		return (
			<div className='FoodDrink'>
				<h2>COMBO {`${this.props.foodName} + ${this.props.drinkName}`}</h2>
				<img src={foodName} alt={this.props.foodName} />
				<img src={drinkName} alt={this.props.drinkName} />
			</div>
		)
	}
}

export default FoodDrink;