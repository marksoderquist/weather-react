import React, {Component} from 'react';
import './dashboard.css';
import TemperatureGauge from "./TemperatureGauge";
import Stats from "./Stats";
import {toDatestamp} from './util'

export default class WeatherStation extends Component {

	render() {
		return (
			<div className='weather'>
				<div className='title'>{this.props.station.name} Station</div>
				<div className='subtitle'>{toDatestamp(this.props.station.timestamp)}</div>
				<TemperatureGauge station={this.props.station}/>
				<Stats station={this.props.station}/>
			</div>
		);
	}

}
