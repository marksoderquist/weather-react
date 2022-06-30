import React, {Component} from 'react';
import Dashboard from './Dashboard'
import './app.css';

export default class App extends Component {

	render() {
		return (
			<div id='app' className="app">
				<Dashboard
					timeout={1000}
					startOnMount
				/>
			</div>
		);
	}

}
