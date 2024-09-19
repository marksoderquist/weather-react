import React, {Component} from 'react';
import './dashboard.css';

export default class TemperatureImpGauge extends Component {

	render() {
		const temperature = parseFloat(this.props.weather.temperature).toFixed(1);
		const unit = this.props.weather.temperatureUnit;
		return (
			<div>
				<div className="temperature">{temperature}<span className="unit">{unit}</span></div>
			</div>
		)
	}

}
