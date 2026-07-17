import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Prediction from "../pages/Prediction";
import History from "../pages/History";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";


export default function AppRoutes() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Routes */}

      <Route
        path="/prediction"
        element={
          <ProtectedRoute>
            <Prediction />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <History />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );

}