import React, { Component } from 'react';
import TodoForm from './TodoForm';
import './TodoTasks.css';

class TodoTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoTask: []
		}
		
		this.addTask = this.addTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.displayEditedTask = this.displayEditedTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	addTask(task) {
		let todoTask = this.state.todoTask;
		todoTask.push(task);
		
		this.setState({todoTask: todoTask});
	}
	
	editTask(e) {
		const taskId = e.target.parentElement.id;
		const todoTask = this.state.todoTask;
		
		for(let i=0; i<todoTask.length; i++) {
			if(todoTask[i].id === taskId) {
				todoTask[i].isEditActive = true;
			}
		}
		
		this.setState({todoTask: todoTask});
	}
	
	removeTask(e) {
		const taskId = e.target.parentElement.id;
		const todoTask = this.state.todoTask;
		
		for(let i=0; i<todoTask.length; i++) {
			if(todoTask[i].id === taskId) {
				todoTask.splice(i, 1);
			}
		}
		
		this.setState({todoTask: todoTask});
	}
	
	displayEditedTask(e) {
		e.preventDefault();
		
		const taskId = e.target.parentElement.id;
		const todoTask = this.state.todoTask;
		
		for(let i=0; i<todoTask.length; i++) {
			if(todoTask[i].id === taskId) {
				todoTask[i].isEditActive = false;
			}
		}
		
		this.setState({todoTask: todoTask});
	}
	
	handleChange(e) {
		e.preventDefault();
		this.setState({task: e.target.value});
	}
	
	render() {
		const todoTasks = this.state.todoTask.map((task, index) => {
			const editForm = (
				<form className='edit-form' onSubmit={this.displayEditedTask}>
					<input
						name='task'
						id='task'
						autoFocus
						value={task.task}
						onChange={this.handleChange}
					/>
					<button>DONE</button>
				</form>
			)
			
			const taskItem = task.isEditActive
					 ? editForm
					 : <li>{task.task}</li>;
			
			
			return (
				<div className='TodoTasks-list' key={task.id} id={task.id}>
					{taskItem}
					{!task.isEditActive
					 && <button className='TodoEdit' onClick={this.editTask}>Edit</button>
					}
					{!task.isEditActive
					 && <button className='TodoRemove' onClick={this.removeTask}>Remove</button>
					}
				</div>
			);
		});
		
		return (
			<div className='TodoTasks'>
				{todoTasks}
				<TodoForm addTask={this.addTask} />
			</div>
		);
	}
}


export default TodoTasks;
	