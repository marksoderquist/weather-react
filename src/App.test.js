import React from 'react';
import App from './App';
import fetchMock from 'fetch-mock';
import {render} from "@testing-library/react";

const defaultWeatherContent = {
    weather: {
        "id": "bluewing",
        "name": "Bluewing Way",
        "timestamp": 0,
        "temperature": 0,
        "pressure": 0,
        "humidity": 0,
        "dewPoint": 0,
        "windChill": 0,
        "heatIndex": 0,
        "pressureTrend": 0,
        "windDirection": 0,
        "wind": 0,
        "windTenMinMax": 0,
        "windTenMinAvg": 0,
        "windTenMinMin": 0,
        "windTwoMinMax": 0,
        "windTwoMinAvg": 0,
        "windTwoMinMin": 0,
        "rainTotalDaily": 0,
        "rainRate": 0
    }
};

it('renders without crashing', () => {
    fetchMock.get('begin:http://mark.soderquist.net/weather/api/station?id=', defaultWeatherContent);
    render(<App/>);
});
