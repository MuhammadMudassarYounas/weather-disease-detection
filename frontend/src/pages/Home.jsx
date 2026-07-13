import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Home() {

    return (

        <Layout>

            <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">

                <div className="max-w-7xl mx-auto py-28 px-6">

                    <h1 className="text-6xl font-extrabold">

                        AI Weather Disease Detection

                    </h1>

                    <p className="text-xl mt-8 max-w-2xl">

                        Predict diseases using
                        Machine Learning,
                        Live Weather Data,
                        and
                        Gemini AI.

                    </p>

                    <Link
                        to="/prediction"
                        className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 duration-300"
                    >
                        Start Prediction
                    </Link>

                </div>

            </section>

            <section className="max-w-7xl mx-auto py-20 px-6">

                <h2 className="text-4xl font-bold text-center">

                    Why Choose Our Platform?

                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold">

                            🌤 Live Weather

                        </h3>

                        <p className="mt-5 text-gray-600">

                            Uses OpenWeather API to automatically
                            collect temperature,
                            humidity,
                            and wind speed.

                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold">

                            🤖 AI Diagnosis

                        </h3>

                        <p className="mt-5 text-gray-600">

                            Machine Learning predicts
                            diseases while
                            Gemini AI explains
                            precautions and treatments.

                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h3 className="text-2xl font-bold">

                            📈 Prediction History

                        </h3>

                        <p className="mt-5 text-gray-600">

                            Save every prediction securely
                            inside MongoDB Atlas
                            and review them anytime.

                        </p>

                    </div>

                </div>

            </section>

        </Layout>

    );

}