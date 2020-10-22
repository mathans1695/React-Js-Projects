import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { v4 as uuid } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todoList: [],
			isInputEmpty: false
		}
		
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.handleInputEmpty = this.handleInputEmpty.bind(this);
	}
	
	handleAddTodo(todoItem) {
		const todoList = this.state.todoList;
		
		todoList.push(todoItem);
		this.setState({todoList: todoList});
	}
	
	updateTask(taskId, taskItem) {
		const todoList = this.state.todoList;
		
		for(let i=0; i<todoList.length; i++) {
			if(todoList[i].id === taskId) {
				todoList[i].task = taskItem;
			}
		}
		
		this.setState({todoList: todoList});
	}
	
	removeTask(taskId) {
		const todoList = this.state.todoList;
		
		for(let i=0; i<todoList.length; i++) {
			if(todoList[i].id === taskId) {
				todoList.splice(i, 1);
			}
		}
		
		this.setState({todoList: todoList});
	}
	
	handleInputEmpty(isInputEmpty) {
		this.setState({isInputEmpty: isInputEmpty});
		
		let self = this;
		setTimeout(function() {
			self.setState({isInputEmpty: !isInputEmpty});
		}, 1000);
	}
	
	render() {
		const todoList = this.state.todoList.map((task) => {
			return (
				<TodoItem 
					todoItem={task}
					key={task.id} 
					removeTask={this.removeTask}
					updateTask={this.updateTask}
				/>
			)
		});
		
		return (
			<div className='TodoList'>
				<h1 className='TodoList-title'>TASKS</h1>
				<div className='TodoList-list'>
					{todoList}
				</div>
				{ this.state.isInputEmpty && <h2 className='TodoList-error'>Enter a valid tasks</h2> }
				<TodoForm 
					addTodo={this.handleAddTodo}
					isInputEmpty={this.handleInputEmpty}
				/>
			</div>
		)
	}
}


export default TodoList;