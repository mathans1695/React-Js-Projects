import React, { Component } from 'react';
import Food from './Food';
import FoodDrink from './FoodDrink';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/food/:name' 
								 render={(routeProps) => <Food name={routeProps.match.params.name} />}
					/>
					<Route exact path='/food/:foodName/drink/:drinkName' 
								 render={(routeProps) => <FoodDrink foodName={routeProps.match.params.foodName}
																	drinkName={routeProps.match.params.drinkName} />} 
					/>
					<Route exact path='/' render={() => <Home />} />
					<Route render={() => <h1>Error Not Found</h1>} />
				</Switch>
			</div>
		)
	}
}

export default App;	