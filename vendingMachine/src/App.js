import React, { Component } from 'react';
import VendingMachine from './VendingMachine';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Soda from './Soda';
import Lays from './Lays';
import Sardines from './Sardines';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<VendingMachine />
				<div className='App-routes'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/soda' component={Soda} />
						<Route exact path='/lays' component={Lays} />
						<Route exact path='/sardines'component={Sardines} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;