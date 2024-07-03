const axios = require('axios');

class Weather {
  static async fetchWeather(city) {
    const apiKey = process.env.API_KEY;
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    return response.data;
  }
}

module.exports = Weather;
