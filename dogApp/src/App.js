import React, { Component } from 'react';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
import Dogs from './Dogs';
import Dog from './Dog';
import './App.css';
import whiskey from './imgs/whiskey.jpg';
import hazel from './imgs/hazel.jpg';
import tubby from './imgs/tubby.jpg';
import helena from './imgs/helena.jpg';

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: "Whiskey",
				age: 5,
				src: whiskey,
				facts: [
					"Whiskey loves eating popcorn.",
					"Whiskey is a terrible guard dog.",
					"Whiskey wants to cuddle with you!"
				]
			},
			{
				name: "Hazel",
				age: 3,
				src: hazel,
				facts: [
					"Hazel has soooo much energy!",
					"Hazel is highly intelligent.",
					"Hazel loves people more than dogs."
				]
			},
			{
				name: "Tubby",
				age: 4,
				src: tubby,
				facts: [
					"Tubby is not the brightest dog",
					"Tubby does not like walks or exercise.",
					"Tubby loves eating food."
				]
			},
			{
				name: "Helena",
				age: 6,
				src: helena,
				facts: [
					"Helena is the brightest dog",
					"Helena likes to walks or exercise.",
					"Helena loves eating food."
				]
			}
		]
	}
	render() {
		const names = this.props.dogs.map(dog => dog.name)
		return (
			<div className='App'>
				<Navbar names={names} />
				<Switch>
					<Route exact path='/' render={() => <Home />} />
					<Route exact path='/dogs' render={() => <Dogs dogs={this.props.dogs} />} />
					<Route exact path='/dogs/:name' render={(routeProps) => <Dog {...routeProps} dogs={this.props.dogs} />} />
					<Route render={() => <Error />} />
				</Switch>
			</div>
		)
	}
}

export default App;