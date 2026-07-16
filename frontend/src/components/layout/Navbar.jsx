import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserMenu from "./UserMenu";

export default function Navbar() {

  const { isAuthenticated } = useAuth();

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          Weather Disease AI
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/prediction"
            className="hover:text-blue-600 transition"
          >
            Prediction
          </Link>

          {

            isAuthenticated ? (

              <>
                <UserMenu />

              </>

            ) : (

              <>

                <Link
                  to="/login"
                  className="hover:text-blue-600 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </Link>

              </>

            )

          }

        </div>

      </div>

    </nav>

  );

}