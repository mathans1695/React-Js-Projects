import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItem: ''
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
		
		if(!this.state.todoItem) {
			this.props.isInputEmpty(true);
		} else {
			this.props.addTodo({
				task: this.state.todoItem,
				id: uuidv4()
			});
		}
		
		this.setState({todoItem: ""});
	}
	
	render() {
		return (
			<form className='TodoForm' onSubmit={this.handleSubmit}>
				<input
					className='TodoForm-inputField'
					name='todoItem'
					id='todoItem'
					value={this.state.todoItem}
					onChange={this.handleChange}
					placeholder='Enter Tasks to add'
					autoComplete="off"
				/>
				<button className='TodoForm-AddTodo'>Add Todo</button>
			</form>
		);
	}
}

export default TodoForm;