import React, {Component} from 'react';
import './dashboard.css';

export default class TemperatureGauge extends Component {

	render() {
		const isImperial = this.props.station.unitSystem === 'IMPERIAL';
		const temperatureMetric = parseFloat(this.props.station.temperature).toFixed(1);
		const unitMetric = this.props.station.temperatureUnit;
		return (
			<div>
				<div className="temperature">{temperatureMetric}<span className="unit">{unitMetric}</span></div>
			</div>
		)
	}

}
