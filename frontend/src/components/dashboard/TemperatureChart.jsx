import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function TemperatureChart({ history }) {

  const data = history.map((item) => ({

    date: new Date(item.createdAt).toLocaleDateString(),

    temperature: item.weather.temperature,

  }));

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Temperature Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ef4444"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}