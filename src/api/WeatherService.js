import {ApiService} from "./ApiService";

export default class WeatherService extends ApiService {

	URI = 'https://mark.soderquist.net/weather/api/station?id=bluewing';

	fetchWeather(unitSystem, success) {
		return fetch(this.URI + ( unitSystem ? '-' + unitSystem : ''), {
			headers: {
				Accept: 'application/json',
			},
		})
			.then(this.checkStatus)
			.then(this.parseJSON)
			.then(success);
	}

}
