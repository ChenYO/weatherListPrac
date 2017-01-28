import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/weatherChart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const temp = _.map(cityData.list.map(weather => weather.main.temp), temp => temp-273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat} = cityData.city.coord;
		// const lat = cityData.city.coord.lat; es6 syntax

		return(
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td>
					<WeatherChart data={temps} color="orange" units="K"/>
				</td>
				<td>
					<WeatherChart data={pressures} color="red" units="hPa"/>
				</td>
				<td>
					<WeatherChart data={humidities} color="blue" units="%"/>
				</td>
			</tr>
		);
	}

	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (k)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>			
		);
	}
}

function mapStateToProps({ weather }){
	return { weather }; // { weather } === { weather : weather }
}

export default connect(mapStateToProps)(WeatherList);