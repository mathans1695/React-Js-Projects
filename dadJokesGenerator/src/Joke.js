import React, { Component } from 'react';
import upArrow from './images/up-arrow.png';
import downArrow from './images/down-arrow.png';
import './Joke.css';

class Joke extends Component {
	constructor(props) {
		super(props);
		this.state = {
			vote: 0,
			emotion: 'neither happy nor sad'
		}
		this.upVote = this.upVote.bind(this);
		this.downVote = this.downVote.bind(this);
	}
	
	componentDidMount() {
		const vote = +window.localStorage.getItem(this.props.id);
		if (vote) {
			this.setState({ vote: vote });
			this.setEmotion(vote);
		}
	}
	
	upVote(e) {
		let curVote = this.state.vote;	
		curVote++;
		
		window.localStorage.setItem(this.props.id, curVote);
		this.setEmotion(curVote);
		this.setState({ vote: curVote });
	}
	
	downVote(e) {
		let curVote = this.state.vote;	
		curVote--;
		
		window.localStorage.setItem(this.props.id, curVote);
		this.setEmotion(curVote);
		this.setState({ vote: curVote });
	}
	
	setEmotion(curVote) {
		if (curVote > 0 && curVote <= 5) {
			this.setState({
				emotion: this.props.emojis.happy
			});
		} else if (curVote > 5 && curVote <= 10) {
			this.setState({
				emotion: this.props.emojis.superHappy
			});
		} else if (curVote > 10) {
			this.setState({
				emotion: this.props.emojis.extremeHappy
			});
		} else if (curVote < 0 && curVote >= -5) {
			this.setState({
				emotion: this.props.emojis.sad
			});
		} else if (curVote < -5 && curVote >= -10) {
			this.setState({
				emotion: this.props.emojis.superSad
			});
		} else if (curVote < -10) {
			this.setState({
				emotion: this.props.emojis.extremeSad
			});
		} else {
			this.setState({
				emotion: 'neither happy nor sad'
			});
		}
	}
	
	render() {
		return (
			<div className='Joke'>
				<img src={upArrow} className='upvote' alt='upvote' onClick={this.upVote} />
				<div className='vote-count'>{this.state.vote}</div>
				<img src={downArrow} className='downvote' alt='downvote' onClick={this.downVote} />
				<p id={this.props.id} className='Joke-text'>{this.props.joke}</p>
				<div className='emoji'>{this.state.emotion}</div>
			</div>
		)
	}
}

export default Joke;