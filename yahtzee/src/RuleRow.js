import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
	let display;
	if(this.props.rollsLeft === 3) {
		display = (
			<tr className="RuleRow">
				<td className="RuleRow-name">{this.props.name}</td>
				<td className="RuleRow-score">{!this.props.score ? this.props.points : this.props.score}</td>
			</tr>
		);
	} else {
		if(!this.props.isUsed) {
			display = (
				<tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
					<td className="RuleRow-name">{this.props.name}</td>
					<td className="RuleRow-score">{!this.props.score ? this.props.points : this.props.score}</td>
				</tr>
			);
		} else {
			display = (
				<tr className="RuleRow RuleRow-disabled">
					<td className="RuleRow-name">{this.props.name}</td>
					<td className="RuleRow-score">{this.props.score}</td>
				</tr>
			);
		}
	}
	  
    return display
  }
}

export default RuleRow;