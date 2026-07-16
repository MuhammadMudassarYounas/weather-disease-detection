export default function WeatherAnalytics({ analytics }) {

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* Average Temperature */}

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl shadow-lg p-6">

        <div className="text-5xl mb-4">

          🌡️

        </div>

        <h3 className="text-lg font-semibold">

          Average Temperature

        </h3>

        <p className="text-4xl font-bold mt-3">

          {analytics.averageTemperature}°C

        </p>

      </div>

      {/* Average Humidity */}

      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl shadow-lg p-6">

        <div className="text-5xl mb-4">

          💧

        </div>

        <h3 className="text-lg font-semibold">

          Average Humidity

        </h3>

        <p className="text-4xl font-bold mt-3">

          {analytics.averageHumidity}%

        </p>

      </div>

      {/* Average Wind Speed */}

      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg p-6">

        <div className="text-5xl mb-4">

          💨

        </div>

        <h3 className="text-lg font-semibold">

          Average Wind Speed

        </h3>

        <p className="text-4xl font-bold mt-3">

          {analytics.averageWindSpeed} km/h

        </p>

      </div>

      {/* Top City */}

      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl shadow-lg p-6">

        <div className="text-5xl mb-4">

          📍

        </div>

        <h3 className="text-lg font-semibold">

          Most Predicted City

        </h3>

        <p className="text-3xl font-bold mt-3">

          {analytics.topCity}

        </p>

      </div>

    </div>

  );

}