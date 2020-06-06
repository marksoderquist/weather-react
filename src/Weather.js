import React, {Component} from 'react';
import './dashboard.css';
import TemperatureGauge from "./TemperatureGauge";
import Stats from "./Stats";

export default class Weather extends Component {

	render() {
		return (
			<div className='weather'>
				<div className='title'>{this.props.weather.name} Station</div>
				<TemperatureGauge weather={this.props.weather}/>
				<Stats weather={this.props.weather}/>
			</div>
		);
	}

}