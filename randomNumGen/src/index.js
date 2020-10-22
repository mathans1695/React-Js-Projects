import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Lottery from './Lottery';
import './style.css';


class App extends Component {
	render() {
		return (
			<Lottery />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));