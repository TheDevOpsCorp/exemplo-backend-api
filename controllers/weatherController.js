const axios = require('axios');
const Weather = require('../models/weatherModel');

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    const weather = await Weather.fetchWeather(city);
    res.json(weather);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};