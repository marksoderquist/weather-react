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
			unitSystem: '',
			weather: {
				temperature: '',
				temperatureUnit: ''
			}
		},
		stationB: {
			unitSystem: '',
			weather: {
				temperature: '',
				temperatureUnit: ''
			}
		}
	}

	constructor(props){
		super(props);
		this.state.unitSystem = props.unitSystem || '';
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
		weatherService.fetchWeather('metric', (weather) => this.setState({stationA:{weather: weather}}));
		weatherService.fetchWeather('imperial', (weather) => this.setState({stationB:{weather: weather}}));
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
				<div className="content-left col-4">
					<div className="buffer"/>
					<FlightConditions weather={this.state.stationA.weather}/>
					&nbsp;
					<WeatherStation weather={this.state.stationA.weather}/>
				</div>
				<div className="content-center col-4">
					<Clock/>
				</div>
				<div className="content-right col-4">
					<div className="buffer"/>
					<FlightConditions weather={this.state.stationB.weather}/>
					&nbsp;
					<WeatherStation weather={this.state.stationB.weather}/>
				</div>
			</div>
		)
	}
}

const Dashboard = withIdleTimer(IdleTimerDashboard)
export default Dashboard
