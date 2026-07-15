import { useEffect, useState } from "react";

import { getHistory } from "../services/historyApi";
import HistoryCard from "../components/history/HistoryCard";

export default function History() {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {

    try {

      const response = await getHistory();

      setHistory(response.history);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDelete = (id) => {

    setHistory((prev) =>
      prev.filter((item) => item._id !== id)
    );

  };

  // Search Filter
  const filteredHistory = history.filter((item) => {

    const disease = item.prediction.disease.toLowerCase();

    const city = item.city.toLowerCase();

    const keyword = search.toLowerCase();

    return (
      disease.includes(keyword) ||
      city.includes(keyword)
    );

  });

  if (loading) {

    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Loading...
      </div>
    );

  }

  return (

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        Prediction History

      </h1>

      {/* Search Box */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search by disease or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {

        filteredHistory.length === 0 ? (

          <div className="text-center text-2xl text-gray-500 mt-20">

            No Prediction History Found

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

            {

              filteredHistory.map((item) => (

                <HistoryCard
                  key={item._id}
                  item={item}
                  onDelete={handleDelete}
                />

              ))

            }

          </div>

        )

      }

    </div>

  );

}