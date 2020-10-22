import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ReactDOM from 'react-dom';


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));