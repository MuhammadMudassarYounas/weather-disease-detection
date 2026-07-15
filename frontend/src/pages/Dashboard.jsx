import { useEffect, useState } from "react";
import { getHistory } from "../services/historyApi";
import DiseaseChart from "../components/dashboard/DiseaseChart";
import MonthlyChart from "../components/dashboard/MonthlyChart";
import TemperatureChart from "../components/dashboard/TemperatureChart";

export default function Dashboard() {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {

            const response = await getHistory();

            setHistory(response.history);

        } catch (error) {

            console.error(error);

        }

    };

    const totalPredictions = history.length;

    const averageTemperature =
        history.length === 0
            ? 0
            : (
                history.reduce(
                    (sum, item) => sum + item.weather.temperature,
                    0
                ) / history.length
            ).toFixed(1);

    const diseaseCount = {};

    history.forEach((item) => {

        diseaseCount[item.prediction.disease] =
            (diseaseCount[item.prediction.disease] || 0) + 1;

    });

    let mostCommonDisease = "N/A";

    let highest = 0;

    Object.entries(diseaseCount).forEach(([disease, count]) => {

        if (count > highest) {

            highest = count;

            mostCommonDisease = disease;

        }

    });

    return (

        <div className="max-w-7xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-10">

                Dashboard

            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-gray-500">

                        Total Predictions

                    </h2>

                    <p className="text-4xl font-bold mt-3">

                        {totalPredictions}

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-gray-500">

                        Average Temperature

                    </h2>

                    <p className="text-4xl font-bold mt-3">

                        {averageTemperature}°C

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-gray-500">

                        Most Common Disease

                    </h2>

                    <p className="text-2xl font-bold mt-3">

                        {mostCommonDisease}

                    </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">

                    <h2 className="text-gray-500">

                        Diseases Detected

                    </h2>

                    <p className="text-4xl font-bold mt-3">

                        {Object.keys(diseaseCount).length}

                    </p>

                </div>

            </div>
            <div className="mt-10">

                <DiseaseChart
                    history={history}
                />

            </div>
            <div className="mt-10">

                <MonthlyChart
                    history={history}
                />

            </div>
            <div className="mt-10">

                <TemperatureChart
                    history={history}
                />

            </div>

        </div>


    );

}