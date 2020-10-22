import React, {Component} from 'react';
import Jokes from './Jokes.js';
import spinner from './images/spinner.svg';
import './App.css';

class App extends Component {
	static defaultProps = {
		numOfJokesToGet: 10
	}
	
	constructor(props) {
		super(props);
		this.state = {
			jokes: [],
			emojis: {
				happy: 'ha',
				superHappy: 'haha',
				extremeHappy: 'hahaha',
				sad: 'oh',
				superSad: 'ohoh',
				extremeSad: 'ohohoh'
			},
			isLoading: true
		}
		
		this.setJokes = new Set();
		this.clearJokes = this.clearJokes.bind(this);
	}
	
	componentDidMount() {
		const self = this;
		let jokesJSON = [];
		
		if (localStorage.length > 0) {
			this.setState({
				jokes: JSON.parse(localStorage.getItem('jokes')),
				isLoading: false
			});
			
			this.setJokes = new Set(JSON.parse(localStorage.getItem('jokes')));
		} else {
			for (let i=0; i<this.props.numOfJokesToGet; i++) {
				let xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://icanhazdadjoke.com/', true);
				xhr.setRequestHeader('Accept', 'application/json');
				xhr.onreadystatechange = function() {
					if(xhr.readyState === 4) {
						if(xhr.status === 200) {
							const json = JSON.parse(xhr.responseText);
							jokesJSON.push(json.joke);
						
							if (jokesJSON.length === self.props.numOfJokesToGet) {
								stateSetter();
							}
						} else {
							console.log(xhr.status);
						}
					}
				}
		
				xhr.send();
			}
		}	
		
		function stateSetter() {
			jokesJSON.forEach(jokeJSON => {
				if (!self.setJokes.has(jokeJSON)) {
					self.setJokes.add(jokeJSON);
				}
			});
			
			if (self.setJokes.size !== self.props.numOfJokesToGet) {
				self.getJokes(self.props.numOfJokesToGet - self.setJokes.size);
			} else {
				window.localStorage.setItem('jokes', JSON.stringify(jokesJSON));
				self.setState({ 
					jokes: jokesJSON,
					isLoading: false
				});
			}
		}
	}
	
	getJokes(numJokes) {
		this.setState({isLoading: true});
		const self = this;
		
		for (let i=0; i<numJokes; i++) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://icanhazdadjoke.com/', true);
			xhr.setRequestHeader('Accept', 'application/json');
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4) {
					if(xhr.status === 200) {
						const json = JSON.parse(xhr.responseText);
						if (!self.setJokes.has(json.joke)) {
							self.setJokes.add(json.joke);
							
							if (i === numJokes-1) {
								stateSetter();
							}
						} else {
							i--;
						}
					} else {
						console.log(xhr.status);
					}
				}
			}
		
			xhr.send();
		}
		
		function stateSetter() {
			window.localStorage.setItem('jokes', JSON.stringify(Array.from(self.setJokes)));
			self.setState({ 
				jokes: Array.from(self.setJokes),
				isLoading: false
			});
		}
	}
	
	clearJokes(e) {
		localStorage.clear();
		this.setState({
			jokes: [],
		});
		
		this.setJokes = new Set();
	}
	
	
	render() {
		let display;
		if (this.state.isLoading) {
			display = (
				<div className='loading'>
					<img src={spinner} alt='loading' className='loading-spinner' />
				</div>
			)
		} else {
			display = (
				<div className='DadJokes'>
					<h1 className='DadJokes-title'>Dad Jokes</h1>
					<button className='new-jokes' onClick={() => this.getJokes(this.props.numOfJokesToGet)}>New Jokes</button>
					<button className='clear-jokes' onClick={this.clearJokes}>Clear Jokes</button>
					<Jokes jokes={this.state.jokes} emojis={this.state.emojis} />					
				</div>
			)
		}
		
		return display;
	}
}

export default App;