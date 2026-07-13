import Layout from "../components/layout/Layout";
import PredictionForm from "../components/prediction/PredictionForm";

export default function Prediction() {

  return (

    <Layout>

      <div className="bg-slate-100 min-h-screen py-12">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-3">

            Disease Prediction

          </h1>

          <p className="text-gray-600 mb-10">

            Enter patient information and symptoms to generate
            an AI-powered disease prediction.

          </p>

          <PredictionForm />

        </div>

      </div>

    </Layout>

  );

}