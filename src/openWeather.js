import axios from 'axios';

async function weatherByName(name) {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
        throw new Error('Environment variable REACT_APP_API_KEY is not defined');
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = { q: name, appid: apiKey, units: 'metric' };
    const resp = await axios.get(url, { params });
    return resp.data;
}

export { weatherByName };
