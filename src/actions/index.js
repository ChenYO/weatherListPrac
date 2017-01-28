import axios from 'axios';

const API_KEY = 'f9e9bbc6001071e6bc4c9a98079b4b88';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = ROOT_URL + '&q=' + city + ',tw';  

	// Instead of using jquery's ajax, using axios to make it practice
	// Because jquery is large library, we don't want to add something
	// which doesn't use.
	const request = axios.get(url);
	
	return{
		type: FETCH_WEATHER,
		payload: request
	};
}