import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#dc2626",
  "#f59e0b",
  "#7c3aed",
  "#0ea5e9",
  "#db2777",
  "#14b8a6",
  "#f97316",
  "#84cc16",
];

export default function DiseaseChart({ history }) {

  const diseaseMap = {};

  history.forEach((item) => {

    const disease = item.prediction.disease;

    diseaseMap[disease] =
      (diseaseMap[disease] || 0) + 1;

  });

  const chartData = Object.entries(diseaseMap).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">

        Disease Distribution

      </h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <PieChart>

          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={140}
            label
          >

            {

              chartData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[
                      index % COLORS.length
                    ]
                  }
                />

              ))

            }

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}