import React, {Component} from 'react';
import {weatherService} from "./Api";
import {withIdleTimer} from "react-idle-timer";
import WeatherStation from './WeatherStation'
import Clock from './Clock';
import FlightConditions from './FlightConditions';
import './dashboard.css';

class IdleTimerDashboard extends Component {

	state = {
		weather: {
			temperature: '',
			temperatureUnit: ''
		}
	};

	componentDidMount() {
		// The initial load
		setTimeout(this.loadWeatherFromServer, 0);
		// The remaining loads
		this.refreshTimer = setInterval(this.loadWeatherFromServer, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.refreshTimer);
	}

	loadWeatherFromServer = () => {
		weatherService.fetchWeather((weather) => this.setState({weather: weather}));
	}

	onIdle() {
		document.body.style.cursor="none"
	}

	onActive() {
		document.body.style.cursor="default"
	}

	render() {
		return (
			<div className="dashboard">
				<div className="content-left col-4">
					<div className="buffer"/>
					<WeatherStation weather={this.state.weather}/>
				</div>
				<div className="content-center col-4">
					<Clock/>
				</div>
				<div className="content-right col-4">
					<div className="buffer"/>
					<FlightConditions weather={this.state.weather}/>
				</div>
			</div>
		)
	}
}

const Dashboard = withIdleTimer(IdleTimerDashboard)
export default Dashboard
