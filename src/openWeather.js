import axios from 'axios';

async function weatherByName(name) {
    console.log(process.env);
    const apiKey = process.env.REACT_APP_API_KEY;
    if (!apiKey) {
        throw new Error('Environment variable REACT_APP_API_KEY is not defined');
    }

    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = { q: name, appid: apiKey };
    const resp = await axios.get(url, { params });
    return resp.data;
}

export { weatherByName };
