// pages/Home.js
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <>
    {/* Navbar */}
      <Navbar />
      {/* ===== HERO SECTION with professional image ===== */}
      <section className="relative overflow-hidden hero-gradient text-white">
        {/* background image with overlay */}
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat hero-image-overlay"></div>
        {/* subtle shine overlay */}
        <div className="absolute inset-0 shine pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto py-28 px-6 z-10 flex flex-col md:flex-row items-center gap-12">
          {/* left text content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-white/90 mb-6 border border-white/20">
              <span className="animate-pulse">●</span> AI-Powered · Real‑time Weather
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              <span className="text-white">AI Weather</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                Disease Detection
              </span>
            </h1>
            <p className="text-xl mt-6 max-w-2xl text-white/90 drop-shadow-md leading-relaxed">
              Predict diseases using{" "}
              <span className="font-semibold text-white">Machine Learning</span>,
              <span className="font-semibold text-white">Live Weather Data</span>,
              and <span className="font-semibold text-white">Gemini AI</span>.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/prediction"
                className="btn-cta inline-block px-9 py-4 rounded-xl font-bold text-lg shadow-2xl"
              >
                Start Prediction →
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium transition border-b border-white/30 pb-1"
              >
                <span>▶</span> See how it works
              </Link>
            </div>
            {/* small trust badges */}
            <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1">✅ 96.2% accuracy</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="flex items-center gap-1">⚡ Real‑time API</span>
              <span className="w-1 h-1 bg-white/30 rounded-full"></span>
              <span className="flex items-center gap-1">📊 MongoDB Atlas</span>
            </div>
          </div>
          {/* right image (hero visual) */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-sm bg-white/10 p-3">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                  alt="AI health prediction dashboard"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
              {/* floating tag */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md text-gray-800 px-5 py-2.5 rounded-2xl shadow-xl border border-white/50 flex items-center gap-2 text-sm font-semibold">
                <span className="text-2xl">🧠</span> Gemini AI <span className="text-blue-600">+</span> ML
              </div>
            </div>
          </div>
        </div>
        {/* subtle wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-12"
          >
            <path
              d="M0 30L60 35C120 40 240 50 360 45C480 40 600 20 720 15C840 10 960 20 1080 25C1200 30 1320 20 1380 15L1440 10V60H0V30Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (3 pillars) ===== */}
      <section className="max-w-7xl mx-auto py-20 px-6 relative -mt-2 z-10">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full">
            Core intelligence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-lg">
            Integrated weather, AI diagnosis, and secure history — all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Live Weather */}
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100/60">
            <div className="flex items-center gap-3 mb-4">
              <span className="feature-icon">🌤️</span>
              <h3 className="text-2xl font-bold text-gray-800">Live Weather</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Uses <span className="font-medium text-blue-700">OpenWeather API</span> to automatically
              collect <span className="font-medium">temperature</span>,{" "}
              <span className="font-medium">humidity</span>, and{" "}
              <span className="font-medium">wind speed</span> in real time.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-blue-600">
              <span className="bg-blue-50 px-3 py-1 rounded-full">⚡ live</span>
              <span className="bg-blue-50 px-3 py-1 rounded-full">🌡️ precise</span>
            </div>
          </div>

          {/* Card 2: AI Diagnosis (with Gemini + ML) - PROFESSIONAL redesign */}
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100/60 relative overflow-hidden">
            {/* subtle gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-cyan-100/30 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="feature-icon">🤖</span>
                <h3 className="text-2xl font-bold text-gray-800">AI Diagnosis</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-700">Machine Learning</span> predicts diseases
                while <span className="font-semibold text-blue-700">Gemini AI</span> explains{" "}
                <span className="font-medium">precautions</span> and{" "}
                <span className="font-medium">treatments</span> with clinical clarity.
              </p>
              {/* visual tag: ML + Gemini */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                  🧬 ML ensemble
                </span>
                <span className="bg-gray-100 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700">
                  ⚡ Gemini Pro
                </span>
                <span className="bg-gray-100 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-700">
                  📋 explainability
                </span>
              </div>
              {/* extra professional detail */}
              <div className="mt-4 p-3 bg-gray-50/80 rounded-xl border border-gray-200/60 flex items-start gap-2 text-sm">
                <span className="text-blue-500 text-lg">🧾</span>
                <span className="text-gray-600">
                  Evidence‑based recommendations &amp; risk stratification
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Prediction History */}
          <div className="bg-white rounded-3xl shadow-xl p-8 card-hover border border-gray-100/60">
            <div className="flex items-center gap-3 mb-4">
              <span className="feature-icon">📈</span>
              <h3 className="text-2xl font-bold text-gray-800">Prediction History</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Save every prediction securely inside{" "}
              <span className="font-medium text-blue-700">MongoDB Atlas</span> and review them anytime
              with full audit trails.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                🔒 encrypted
              </span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                ⏳ versioned
              </span>
            </div>
          </div>
        </div>

        {/* extra professional separator + CTA */}
        <div className="mt-20 text-center bg-white/60 backdrop-blur-sm rounded-3xl shadow-inner border border-gray-200/50 p-10 max-w-4xl mx-auto">
          <p className="text-gray-600 text-lg font-medium">
            ⚕️ Trusted by clinicians &amp; researchers. Start your first prediction in seconds.
          </p>
          <Link
            to="/prediction"
            className="inline-block mt-5 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-2xl font-bold shadow-lg transition duration-200"
          >
            Launch Prediction →
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}