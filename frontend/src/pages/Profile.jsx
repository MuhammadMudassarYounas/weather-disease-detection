// pages/Profile.jsx
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();

  // Get user initials for avatar
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
      "bg-gradient-to-br from-red-500 to-red-600",
      "bg-gradient-to-br from-orange-500 to-orange-600",
    ];
    if (user?.name) {
      const index = user.name.length % colors.length;
      return colors[index];
    }
    return colors[0];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100/50">
          {/* Header with Gradient */}
          <div className="relative h-32 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute -bottom-12 left-8">
              <div className="relative">
                <div className={`w-28 h-28 rounded-2xl ${getAvatarColor()} text-white flex items-center justify-center text-4xl font-bold shadow-2xl shadow-blue-500/30 border-4 border-white`}>
                  {getInitials()}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-16 px-8 pb-8">
            {/* User Info */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800">
                  {user?.name || "User"}
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {user?.email || "user@example.com"}
                  </p>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Active
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/dashboard"
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Dashboard
                </Link>
                <Link
                  to="/profile/edit"
                  className="px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Profile
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-5 border border-blue-100/50">
                <p className="text-sm text-blue-600 font-medium">Total Predictions</p>
                <p className="text-2xl font-bold text-blue-800 mt-1">24</p>
                <p className="text-xs text-blue-500 mt-1">↑ 12% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-5 border border-purple-100/50">
                <p className="text-sm text-purple-600 font-medium">Accuracy Rate</p>
                <p className="text-2xl font-bold text-purple-800 mt-1">94.8%</p>
                <p className="text-xs text-purple-500 mt-1">↑ 2.3% improvement</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-5 border border-green-100/50">
                <p className="text-sm text-green-600 font-medium">Member Since</p>
                <p className="text-2xl font-bold text-green-800 mt-1">2024</p>
                <p className="text-xs text-green-500 mt-1">Active member</p>
              </div>
            </div>

            {/* User Details */}
            <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Account Details
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1.5">Full Name</label>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {user?.name || "Not set"}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-1.5">Email Address</label>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 font-medium flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {user?.email || "Not set"}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8 bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recent Activity
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="font-medium">Prediction completed</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">2 hours ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="font-medium">Profile updated</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">3 days ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 bg-white rounded-xl px-4 py-3 border border-gray-100">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="font-medium">New prediction saved</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}