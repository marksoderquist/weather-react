import React, {Component} from 'react';
import {weatherService} from "./Api";
import {withIdleTimer} from "react-idle-timer";
import WeatherStation from './WeatherStation'
import Clock from './Clock';
import FlightConditions from './FlightConditions';
import './dashboard.css';

class IdleTimerDashboard extends Component {

	state = {
		stationA: {
			temperature: '',
			temperatureUnit: ''
		},
		stationB: {
			temperature: '',
			temperatureUnit: ''
		}
	}

	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		// The initial load
		setTimeout(this.loadWeatherFromServer, 0);
		// The remaining loads
		this.refreshTimer = setInterval(this.loadWeatherFromServer, 5000);
	}

	componentWillUnmount = () => {
		clearInterval(this.refreshTimer);
	}

	loadWeatherFromServer = () => {
		weatherService.fetchWeather('metric', (weather) => this.setState({stationA:  weather}));
		weatherService.fetchWeather('imperial', (weather) => this.setState({stationB: weather}));
	}

	onIdle() {
		console.log("IDLE")
		document.getElementsByTagName('html').item(0).style.cursor = "none"
	}

	onActive() {
		console.log("ACTIVE")
		document.getElementsByTagName('html').item(0).style.cursor = "default"
	}

	render() {
		return (
			<div className="dashboard">
				{/*<div className="mobile-header">*/}
				{/*	<FlightConditions station={this.state.stationA}/>*/}
				{/*	&nbsp;*/}
				{/*</div>*/}

				<div className="content-left col-4">
					<div className="buffer"/>
				{/*	<WeatherStation station={this.state.stationA}/>*/}
				</div>
				<div className="content-center col-4">
					<Clock/>
					{/*&nbsp;*/}
					{/*<FlightConditions station={this.state.stationA}/>*/}
					<p>Due to an upcoming move, Bluewing Station has been discontinued.</p>
				</div>
				<div className="content-right col-4">
					<div className="buffer"/>
					{/*<WeatherStation station={this.state.stationB}/>*/}
				</div>
			</div>
		)
	}
}

const Dashboard = withIdleTimer(IdleTimerDashboard)
export default Dashboard
