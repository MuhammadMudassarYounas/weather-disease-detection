export default function WeatherCard({ weather }) {

  if (!weather) return null;

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">

        🌤 Weather

      </h2>

      <div className="space-y-2">

        <p><strong>City:</strong> {weather.city}</p>

        <p><strong>Temperature:</strong> {weather.temperature} °C</p>

        <p><strong>Humidity:</strong> {weather.humidity}%</p>

        <p><strong>Wind Speed:</strong> {weather.wind_speed} km/h</p>

        <p><strong>Condition:</strong> {weather.description}</p>

      </div>

    </div>

  );

}