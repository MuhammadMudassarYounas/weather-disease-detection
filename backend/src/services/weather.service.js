import { axiosInstance } from "../config/axios.js";
import { env } from "../config/env.js";

/**
 * Fetch weather information from OpenWeather.
 */
export const getWeatherByCity = async (city) => {
  try {
    const response = await axiosInstance.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: env.WEATHER_API_KEY,
          units: "metric",
        },
      }
    );

    return {
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind_speed: response.data.wind.speed,
      weather: response.data.weather[0].main,
      description: response.data.weather[0].description,
    };
  } catch (error) {
    console.error("Weather Service Error:", error.response?.data || error.message);

    throw new Error("Unable to fetch weather data.");
  }
};