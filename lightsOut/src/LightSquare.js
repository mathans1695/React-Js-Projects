import React, { Component } from 'react';
import './LightSquare.css';

class LightSquare extends Component {
	render() {
		let clsName;
		if(this.props.isActive) {
			clsName = 'LightSquare LightSquare--active';
		} else {
			clsName = 'LightSquare LightSquare--deactivate';
		}
		
		return <button className={clsName}
					onClick={this.props.func}
					id={this.props.id}
					disabled={this.props.disable}
				/>;
	}
}

export default LightSquare;