import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function MonthlyChart({ history }) {

  const monthMap = {};

  history.forEach((item) => {

    const month = new Date(item.createdAt)
      .toLocaleString("default", {
        month: "short",
      });

    monthMap[month] =
      (monthMap[month] || 0) + 1;

  });

  const data = Object.entries(monthMap).map(
    ([month, predictions]) => ({
      month,
      predictions,
    })
  );

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Monthly Predictions

      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="predictions"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}