import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
		hasWon: false
	}
	this.won = this.won.bind(this);
  }
  
  won(wonOrNot) {
	this.setState({hasWon: wonOrNot});
  }
  
  render() {
    return (
      <div className='App'>
		<h1 className='App-title'>LIGHTS OUT</h1>
			<Board handleWon={this.won} />
		{this.state.hasWon && <h2 className='App-won'>YOU WON</h2>}
      </div>
    );
  }
}

export default App;
