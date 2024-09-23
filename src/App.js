import React, {Component} from 'react';
import Dashboard from './Dashboard'
import './app.css';

function getQueryVariable(variable) {
	const query = window.location.search.substring(1);
	const vars = query.split("&");
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split("=");
		if (pair[0] === variable) {
			return pair[1];
		}
	}
	return false;
}

export default class App extends Component {

	render() {
		return (
			<div className="app">
				<Dashboard timeout={1000} unitSystem={getQueryVariable('unit')} startOnMount/>
			</div>
		);
	}

}
