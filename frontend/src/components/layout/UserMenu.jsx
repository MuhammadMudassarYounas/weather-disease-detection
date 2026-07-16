import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UserMenu() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

  }, []);

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <div
      className="relative"
      ref={menuRef}
    >

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

          {user?.name?.charAt(0).toUpperCase()}

        </div>

      </button>

      {

        open && (

          <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-xl border z-50">

            <div className="p-4 border-b">

              <h3 className="font-bold">

                {user?.name}

              </h3>

              <p className="text-sm text-gray-500">

                {user?.email}

              </p>

            </div>

            <Link
              to="/profile"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              👤 My Profile
            </Link>

            <Link
              to="/dashboard"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              📊 Dashboard
            </Link>

            <Link
              to="/history"
              className="block px-4 py-3 hover:bg-gray-100"
            >
              📜 Prediction History
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
            >
              🚪 Logout
            </button>

          </div>

        )

      }

    </div>

  );

}