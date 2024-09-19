import React, {Component} from 'react';
import './dashboard.css';

export default class TemperatureGauge extends Component {

	render() {
		const temperatureMetric = parseFloat(this.props.weather.temperatureMetric).toFixed(1);
		const unitMetric = this.props.weather.temperatureUnitMetric;
		return (
			<div>
				<div className="temperature">{temperatureMetric}<span className="unit">{unitMetric}</span></div>
			</div>
		)
	}

}
