import { useEffect, useState } from "react";

import { getDashboard } from "../services/dashboardApi";
import DiseasePieChart from "../components/dashboard/DiseasePieChart";
import WeatherAnalytics from "../components/dashboard/WeatherAnalytics";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const response = await getDashboard();

      setDashboard(response.dashboard);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <div className="text-center mt-20 text-2xl">

        Loading Dashboard...

      </div>

    );

  }

  if (!dashboard) {

    return (

      <div className="text-center mt-20">

        <h2 className="text-3xl font-bold">

          Dashboard

        </h2>

        <p className="mt-4 text-red-500">

          Unable to load dashboard data.

        </p>

      </div>

    );

  }

  return (

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">

        Dashboard

      </h1>

      {/* Statistics Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Total Predictions

          </p>

          <h2 className="text-4xl font-bold mt-2 text-blue-600">

            {dashboard.totalPredictions}

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Today's Predictions

          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-600">

            {dashboard.todayPredictions}

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Latest Disease

          </p>

          <h2 className="text-2xl font-bold mt-2 text-red-600">

            {dashboard.latestPrediction?.prediction?.disease || "N/A"}

          </h2>

        </div>

        <div className="bg-white rounded-xl shadow p-6">

          <p className="text-gray-500">

            Latest City

          </p>

          <h2 className="text-2xl font-bold mt-2 text-indigo-600">

            {dashboard.latestPrediction?.city || "N/A"}

          </h2>

        </div>

      </div>

      {/* Weather Analytics */}

      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-6">

          Weather Analytics

        </h2>

        <WeatherAnalytics
          analytics={dashboard.weatherAnalytics}
        />

      </div>

      {/* Charts & Recent Predictions */}

      <div className="grid lg:grid-cols-2 gap-8 mt-10">

        {/* Disease Pie Chart */}

        <DiseasePieChart
          data={dashboard.diseaseStats}
        />

        {/* Recent Predictions */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="text-2xl font-bold mb-6">

            Recent Predictions

          </h2>

          {

            dashboard.recentPredictions.length === 0 ? (

              <p>No Predictions Found</p>

            ) : (

              <table className="w-full">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-3">

                      Disease

                    </th>

                    <th className="text-left py-3">

                      City

                    </th>

                    <th className="text-left py-3">

                      Date

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {

                    dashboard.recentPredictions.map((item) => (

                      <tr
                        key={item._id}
                        className="border-b hover:bg-gray-50"
                      >

                        <td className="py-3">

                          {item.prediction.disease}

                        </td>

                        <td>

                          {item.city}

                        </td>

                        <td>

                          {new Date(item.createdAt).toLocaleDateString()}

                        </td>

                      </tr>

                    ))

                  }

                </tbody>

              </table>

            )

          }

        </div>

      </div>

    </div>

  );

}