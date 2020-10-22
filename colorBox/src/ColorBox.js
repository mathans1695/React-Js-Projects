import React from 'react';
import './ColorBox.css';

class ColorBox extends React.Component {
	render() {
		return (
			<div 
				className='ColorBox'
				style={{backgroundColor: this.props.color}}
				onClick={this.props.func}
			/>
		)
	}
}

export default ColorBox;