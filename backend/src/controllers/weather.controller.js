import { getWeatherByCity } from "../services/weather.service.js";

/**
 * GET /api/v1/weather?city=Lahore
 */
export const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        success: false,
        message: "City is required.",
      });
    }

    const weather = await getWeatherByCity(city);

    return res.status(200).json({
      success: true,
      data: weather,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};