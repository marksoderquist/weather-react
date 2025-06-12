import React, {Component} from 'react';
import './dashboard.css';
import {getDowName, pad} from "./util";

export default class FlightConditions extends Component {

	state = {
		yy: '',
		mo: '',
		dd: '',
		hh: '',
		mm: '',
		ss: ''
	};

	componentDidMount() {
		setTimeout(this.updateTime, 0);
		this.refreshTimer = setInterval(this.updateTime, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.refreshTimer);
	}

	updateTime = () => {
		let timestamp = new Date();
		let yy = timestamp.getUTCFullYear();
		let mo = timestamp.getUTCMonth() + 1;
		let dd = timestamp.getUTCDate();
		let hh = timestamp.getUTCHours();
		let mm = timestamp.getUTCMinutes();
		let ss = timestamp.getUTCSeconds();
		let day = timestamp.getUTCDay();
		let dw = getDowName( day );

		this.setState({yy: yy, mo: mo, dd: dd, hh: hh, mm: mm, ss: ss, dw: dw});
	};

	render() {
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
				<div className='time'>{pad(this.state.hh,2)}{pad( this.state.mm, 2)} Z</div>
			</div>
		);
	}
}
