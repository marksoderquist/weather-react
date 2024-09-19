import React, {Component} from 'react';
import './dashboard.css';
import {toDatestamp} from "./util";
import TemperatureGauge from "./TemperatureGauge";
import Stats from "./Stats";

export default class FlightConditions extends Component {

	render() {
		let summary = (this.props.weather.flightCondition && this.props.weather.flightCondition.summary) || '';
		let reasons = (this.props.weather.flightCondition && this.props.weather.flightCondition.reasons) || [];
		return (
			<div className='flight-conditions'>
				<div className='title'>Flight Conditions</div>
				<div className='summary'>{summary}</div>
				<div className='reason'>
					{reasons.map((reason, index) => (
						<span key={index}>{index > 0 ? ' ' : ''}{reason}</span>
					))}
				</div>

				<div>&nbsp;</div>
				<div className='title'>{this.props.weather.name} Station</div>
				<div className='subtitle'>{toDatestamp(this.props.weather.timestamp)}</div>
				<TemperatureGauge weather={this.props.weather}/>
				<Stats weather={this.props.weather}/>

			</div>
		);
	}
}
