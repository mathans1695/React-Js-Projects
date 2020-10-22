import React, { Component } from 'react';

class Box extends Component {
	render() {
		const box=this.props.boxItem;
		const styles = {
			width: `${box.width}px`,
			height: `${box.height}px`,
			backgroundColor: box.backgroundColor
		}
		
		return <div 
			className='Box'
			style={styles}
		/>
	}
}

export default Box;