import React, {Component} from 'react';
import './dashboard.css';
import TemperatureImpGauge from "./TemperatureImpGauge";
import StatsImp from "./StatsImp";
import {toDatestamp} from './util'

export default class WeatherStation extends Component {

	render() {
		return (
			<div className='weather'>
				<div className='title'>{this.props.weather.name} Station</div>
				<div className='subtitle'>{toDatestamp(this.props.weather.timestamp)}</div>
				<TemperatureImpGauge weather={this.props.weather}/>
				<StatsImp weather={this.props.weather}/>
			</div>
		);
	}

}
