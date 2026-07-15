import { deleteHistory } from "../../services/historyApi";

export default function HistoryCard({
  item,
  onDelete,
}) {

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this prediction?"
    );

    if (!confirmDelete) return;

    try {

      await deleteHistory(item._id);

      onDelete(item._id);

      alert("Prediction deleted successfully.");

    } catch (error) {

      console.error(error);

      alert("Unable to delete prediction.");

    }

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold text-blue-600">
          {item.prediction.disease}
        </h2>

        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

      <div className="mt-5 space-y-2">

        <p>
          <strong>City:</strong> {item.city}
        </p>

        <p>
          <strong>Temperature:</strong>{" "}
          {item.weather.temperature} °C
        </p>

        <p>
          <strong>Humidity:</strong>{" "}
          {item.weather.humidity} %
        </p>

        <p>
          <strong>Wind Speed:</strong>{" "}
          {item.weather.wind_speed} km/h
        </p>

      </div>

      <hr className="my-5" />

      <h3 className="font-bold mb-2">
        AI Summary
      </h3>

      <p className="text-gray-600">
        {item.ai_report.summary}
      </p>

      <p className="mt-5 text-sm text-gray-500">
        {new Date(item.createdAt).toLocaleString()}
      </p>

    </div>

  );

}