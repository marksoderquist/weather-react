import React, {Component} from 'react';
import './dashboard.css';

export default class Stats extends Component {

	render() {
		const windSpeed = parseFloat(this.props.weather.windTenMinAvg).toFixed(1);
		const gustSpeed = parseFloat(this.props.weather.windTwoMinMax).toFixed(1);
		const windCardinal = windSpeed < 0.1 ? "---" : this.props.weather.windCardinalTenMinAvg;
		const windDirection = windSpeed < 0.1 ? "---" : parseFloat(this.props.weather.windDirectionTenMinAvg).toFixed(0);
		const rainTotalDaily = parseFloat(this.props.weather.rainTotalDaily).toFixed(2);
		const feelslike = parseFloat(this.props.weather.feelsLike).toFixed(1);
		const tempUnit = this.props.weather.temperatureUnit;
		return (
			<div className="stats">
				<table>
					<tbody>
					<tr className="stats">
						<td className="label">feel </td>
						<td className="value">{feelslike}</td>
						<td className="unit">{tempUnit}</td>
					</tr>
					<tr>
						<td className="label">wind&nbsp;</td>
						<td className="value">&nbsp;{windSpeed}</td>
						<td className="unit">&nbsp;{this.props.weather.windSpeedUnit}</td>
					</tr>
					<tr>
						<td className="label">gust&nbsp;</td>
						<td className="value">&nbsp;{gustSpeed}</td>
						<td className="unit">&nbsp;{this.props.weather.windSpeedUnit}</td>
					</tr>
					<tr>
						<td className="label">from&nbsp;</td>
						<td className="value">&nbsp;{windCardinal}</td>
						<td className="unit">&nbsp;{windDirection}{this.props.weather.windDirectionUnit}</td>
					</tr>
					<tr>
						<td className="label">rain&nbsp;</td>
						<td className="value">&nbsp;{rainTotalDaily}</td>
						<td className="unit">&nbsp;{this.props.weather.rainUnit}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}

}
