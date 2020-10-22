import React, { Component } from 'react';
import Die from './Die1';
import './Dice.css';

class Dice extends Component {
  render() {
	console.log(this.props.rollsLeft);
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          num={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx}
		  isRolling={this.props.isRolling}
		  rollsLeft={this.props.rollsLeft}/>
      )}
    </div>
  }
}

export default Dice;