export default function PredictionCard({ prediction }) {

  if (!prediction) return null;

  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">

        🦠 Predicted Disease

      </h2>

      <h1 className="text-4xl font-bold text-red-600">

        {prediction.predicted_disease}

      </h1>

    </div>

  );

}