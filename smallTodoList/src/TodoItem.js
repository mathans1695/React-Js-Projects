import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.todoItem.task,
			isCompleted: false,
			isInputEmpty: false
		}
		this.handleRemoveTask = this.handleRemoveTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleCompletion = this.handleCompletion.bind(this);
	}
	
	editTask(e) {
		this.setState({isEditing: !this.state.isEditing});
	}
	
	handleCompletion(e) {
		this.setState({isCompleted: !this.state.isCompleted});
	}
	
	handleUpdate(e) {
		e.preventDefault();
		
		if(!this.state.task) {
			this.setState({isInputEmpty: true});
			
			let self = this;
			setTimeout(function() {
				self.setState({isInputEmpty: false})
			}, 1000);
		} else {
			this.props.updateTask(e.target.id, this.state.task);
			this.editTask();
		}
	}
	
	handleChange(e) {
		this.setState({task: e.target.value});
	}
	
	
	handleRemoveTask(e) {
		this.props.removeTask(e.target.parentElement.parentElement.id);
	}
	
	render() {
		let result;
		if(this.state.isEditing) {
			result = (
				<div className='TodoItem-Form'>
					{ this.state.isInputEmpty && <h2 className='TodoItem-error'>Enter a valid tasks</h2> }
					
					<form onSubmit={this.handleUpdate} id={this.props.todoItem.id} className='TodoItem-editForm' >
						<input 
							name='task'
							id='task'
							value={this.state.task}
							onChange={this.handleChange}
							autoFocus={true}
							className='TodoItem-editForm-inputField'
							autoComplete='off'
							onFocus={(e) => e.target.select()}
						/>
						<button className='TodoItem-editForm-button'>DONE</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className='TodoItem' id={this.props.todoItem.id} >
					{this.state.isCompleted 
						? <li className='TodoItem-task-completed' onClick={this.handleCompletion} >{this.props.todoItem.task}</li>
						: <li className='TodoItem-task-progress' onClick={this.handleCompletion} >{this.props.todoItem.task}</li>
					}	
					<div className='TodoItem-button'>
						<button 
							className='TodoItem-editTask'
							onClick={this.editTask}
						>EDIT</button>
				
						<button 
							className='TodoItem-removeTask'
							onClick={this.handleRemoveTask}
						>REMOVE</button>
					</div>
				</div>
			);
		}
		
		return result;
	}
}


export default TodoItem;