import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Weather Disease AI
        </Link>

        <div className="flex gap-8">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/prediction"
            className="hover:text-blue-600"
          >
            Prediction
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-600"
          >
            History
          </Link>

        </div>

      </div>
    </nav>
  );
}