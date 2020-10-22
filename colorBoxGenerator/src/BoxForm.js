import React, { Component } from 'react';
import './BoxForm.css';

class BoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: "",
			height: "",
			backgroundColor: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.addBox({
			width: this.state.width,
			height: this.state.height,
			backgroundColor: this.state.backgroundColor
		});
		
		this.setState({width: '', height: '', backgroundColor: ''});
	}
	
	render() {
		return (
			<form id='BoxForm' className='BoxForm' onSubmit={this.handleSubmit}>
				<fieldset form='BoxForm'>
					<legend>Enter the following inputs to draw box</legend>
					<label htmlFor='width'>Width: 
						<input 
							id='width'
							name='width'
							value={this.state.width}
							onChange={this.handleChange}
						/>
					</label>
					
					<label htmlFor='height'>Height: 
						<input 
							id='height'
							name='height'
							value={this.state.height}
							onChange={this.handleChange}
						/>
					</label>
					
					<label htmlFor='backgroundColor'>Background-Color: 
						<input 
							id='backgroundColor'
							name='backgroundColor'
							value={this.state.backgroundColor}
							onChange={this.handleChange}
						/>
					</label>
					<button>Submit!</button>
				</fieldset>
			</form>
		)
	}
}


export default BoxForm;