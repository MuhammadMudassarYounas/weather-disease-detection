// components/layout/UserMenu.jsx
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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Get user initials
  const getInitials = () => {
    if (user?.name) {
      const names = user.name.split(" ");
      if (names.length >= 2) {
        return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
      }
      return user.name.charAt(0).toUpperCase();
    }
    return "U";
  };

  // Get avatar color based on user name
  const getAvatarColor = () => {
    const colors = [
      "bg-gradient-to-br from-blue-500 to-blue-600",
      "bg-gradient-to-br from-purple-500 to-purple-600",
      "bg-gradient-to-br from-green-500 to-green-600",
      "bg-gradient-to-br from-pink-500 to-pink-600",
      "bg-gradient-to-br from-indigo-500 to-indigo-600",
      "bg-gradient-to-br from-teal-500 to-teal-600",
    ];
    if (user?.name) {
      const index = user.name.length % colors.length;
      return colors[index];
    }
    return colors[0];
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 group focus:outline-none ml-2"
      >
        <div className="relative">
          <div className={`w-11 h-11 rounded-xl ${getAvatarColor()} text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all duration-200 group-hover:scale-105`}>
            {getInitials()}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="hidden md:block text-left">
          <p className="text-sm font-semibold text-gray-700 leading-tight">
            {user?.name || "User"}
          </p>
          <p className="text-xs text-gray-400 leading-tight">
            {user?.role || "Member"}
          </p>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 animate-slide-down">
          {/* User Info Header */}
          <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-100/50">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${getAvatarColor()} text-white flex items-center justify-center font-bold text-base shadow-lg shadow-blue-500/20`}>
                {getInitials()}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 truncate">
                  {user?.name || "User"}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {user?.email || "user@example.com"}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <Link
              to="/profile"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
            >
              <span className="text-lg">👤</span>
              <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                My Profile
              </span>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⌘P
              </span>
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
            >
              <span className="text-lg">📊</span>
              <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Dashboard
              </span>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⌘D
              </span>
            </Link>

            <Link
              to="/history"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors duration-150 group"
            >
              <span className="text-lg">📜</span>
              <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Prediction History
              </span>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⌘H
              </span>
            </Link>

            <div className="h-px bg-gray-100 my-2"></div>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50 transition-colors duration-150 group"
            >
              <span className="text-lg">🚪</span>
              <span className="flex-1 text-sm font-medium text-red-600 group-hover:text-red-700 transition-colors">
                Logout
              </span>
              <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ⌘L
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}