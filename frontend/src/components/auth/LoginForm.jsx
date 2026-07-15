import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authApi";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await loginUser(formData);

      login(
        response.user,
        response.token
      );

      alert("Login Successful!");

      navigate("/");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto"
    >

      <h2 className="text-3xl font-bold text-center mb-8">

        Login

      </h2>

      <div className="mb-5">

        <label className="font-semibold">

          Email

        </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-2"
          required
        />

      </div>

      <div className="mb-6">

        <label className="font-semibold">

          Password

        </label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 mt-2"
          required
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
      >

        {
          loading
            ? "Logging in..."
            : "Login"
        }

      </button>

    </form>

  );

}