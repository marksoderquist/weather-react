import React, {Component} from 'react';
import './dashboard.css';

export default class FlightConditions extends Component {

	render() {
		const isImperial = this.props.station.unitSystem === 'IMPERIAL';
		let summary = (this.props.station.flightCondition && this.props.station.flightCondition.summary) || '';
		let reasons = (this.props.station.flightCondition && this.props.station.flightCondition.reasons) || [];
		return (
			<div className='flight-conditions'>
				<div className='title'>Flight Conditions</div>
				<div className='summary'>{summary}</div>
				<div className='reason'>
					{reasons.map((reason, index) => (
						<span key={index}>{index > 0 ? ' ' : ''}{reason}</span>
					))}
				</div>
			</div>
		);
	}
}
