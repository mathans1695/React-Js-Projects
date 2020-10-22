import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import './BoxList.css';
import { v4 as uuidv4 } from 'uuid';


class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxSpec: []
		}
		this.addBox = this.addBox.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	addBox(box) {
		const id=uuidv4();
		const { width, height, backgroundColor } = box;
		
		const tempBox = {
			width: width,
			height: height,
			backgroundColor: backgroundColor,
			id: id
		}
		
		this.setState({
			boxSpec: [...this.state.boxSpec, tempBox]
		});
	}
	
	removeBox(e) {
		const boxId = e.target.parentElement.id;
		let boxList = this.state.boxSpec;
		
		for(let i=0; i<boxList.length; i++) {
			if(boxId === boxList[i].id) {
				boxList.splice(i, 1);
			}
		}
		
		this.setState({boxSpec: boxList});
	}
	
	handleClick(e) {
		this.removeBox(e);
	}
	
	render() {
		return (
			<div>
			<BoxForm addBox={this.addBox} />
			<ul className='BoxList'>
				{this.state.boxSpec.map((box, index) => {
				return (
					<li key={box.id} id={box.id}>
						<Box boxItem={{
							width: box.width,
							height: box.height,
							backgroundColor: box.backgroundColor
						}} />
						<button 
						onClick={this.handleClick}
						>RemoveBox</button>
					</li>
					)
				})}
			</ul>
			</div>
		);
	}
}

export default BoxList;