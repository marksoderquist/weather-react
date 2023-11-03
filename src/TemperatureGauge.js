import React, {Component} from 'react';
import './dashboard.css';

export default class TemperatureGauge extends Component {

	render() {
		const temperature = parseFloat(this.props.weather.temperature).toFixed(1);
		const unit = this.props.weather.temperatureUnit;
		const temperatureMetric = parseFloat(this.props.weather.temperatureMetric).toFixed(1);
		const unitMetric = this.props.weather.temperatureUnitMetric;
		return (
			<div>
				<div className="temperature">{temperature}<span className="unit">{unit}</span></div>
				<div className="temperature">{temperatureMetric}<span className="unit">{unitMetric}</span></div>
			</div>
		)
	}

}
