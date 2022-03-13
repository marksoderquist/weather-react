import React, {Component} from 'react';
import './dashboard.css';

export default class TemperatureGauge extends Component {

	render() {
		const temperature = parseFloat(this.props.weather.temperature).toFixed(1);
		const feelslike = parseFloat(this.props.weather.feelsLike).toFixed(1);
		const unit = this.props.weather.temperatureUnit;
		return (
			<div>
			<div className="temperature">{temperature}<span className="unit">{unit}</span></div>
			<div className="temperature">{feelslike}<span className="unit">{unit}</span></div>
			</div>
		);
	}

}
