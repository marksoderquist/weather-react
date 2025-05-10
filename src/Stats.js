import React, {Component} from 'react';
import './dashboard.css';

export default class Stats extends Component {

	render() {
		const isImperial = this.props.station.unitSystem === 'IMPERIAL';
		const windSpeed = parseFloat(isImperial ? this.props.station.windTenMinAvg : this.props.station.windTwoMinAvg).toFixed(1);
		const gustSpeed = parseFloat(isImperial ? this.props.station.windTenMinMax : this.props.station.windTwoMinMax).toFixed(1);
		const windCardinal = windSpeed < 0.1 ? "---" : this.props.station.windCardinalTenMinAvg;
		const windDirection = windSpeed < 0.1 ? "---" : parseFloat(this.props.station.windDirectionTenMinAvg).toFixed(0);
		const humidity = parseFloat(this.props.station.humidity).toFixed(0);
		const rainTotalDaily = parseFloat(this.props.station.rainTotalDaily).toFixed(isImperial ? 2 : 1);
		const dewPoint = parseFloat(this.props.station.dewPoint).toFixed(1);
		const feelslike = parseFloat(this.props.station.feelsLike).toFixed(1);
		const tempUnit = this.props.station.temperatureUnit;
		return (
			<div className="stats">
				<table>
					<tbody>
					<tr>
						<td className="label">wind&nbsp;</td>
						<td className="value wind">&nbsp;{windSpeed}</td>
						<td className="unit">&nbsp;{this.props.station.windSpeedUnit}</td>
					</tr>
					<tr>
						<td className="label">gust&nbsp;</td>
						<td className="value wind">&nbsp;{gustSpeed}</td>
						<td className="unit">&nbsp;{this.props.station.windSpeedUnit}</td>
					</tr>
					<tr>
						<td className="label">from&nbsp;</td>
						<td className="value wind">&nbsp;{windCardinal}</td>
						<td className="unit">&nbsp;{windDirection}{this.props.station.windDirectionUnit}</td>
					</tr>
					<tr>
						<td className="label">humid&nbsp;</td>
						<td className="value humidity">&nbsp;{humidity}</td>
						<td className="unit">&nbsp;{this.props.station.humidityUnit}</td>
					</tr>
					<tr>
						<td className="label">dew</td>
						<td className="value temperature">{dewPoint}</td>
						<td className="unit">{tempUnit}</td>
					</tr>
					<tr>
						<td className="label">feel</td>
						<td className="value temperature">{feelslike}</td>
						<td className="unit">{tempUnit}</td>
					</tr>
					<tr>
						<td className="label">rain&nbsp;</td>
						<td className="value rain">&nbsp;{rainTotalDaily}</td>
						<td className="unit">&nbsp;{this.props.station.rainUnit}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}

}
