
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getWeatherData(endpoint,
   place_id,
    measurementSystem
  ) {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}?place_id=${place_id}&timezone=auto&language=en&units=${measurementSystem}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
return result;
} catch (error) {
	console.error(error);
}
  }
 

   export async function searchPlaces(text) {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${text}&language=en`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
     if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);}
             const data = await response.json();
 return Array.isArray(data) ? data : data.data || data.places || [];
    } catch (error) {
        console.error(error);
        return [];
}
  }

 