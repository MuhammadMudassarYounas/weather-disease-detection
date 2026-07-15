import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authApi";

export default function RegisterForm() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

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

      await registerUser(formData);

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
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

      <h2 className="text-3xl font-bold mb-8 text-center">

        Register

      </h2>

      <div className="mb-4">

        <label className="font-semibold">

          Name

        </label>

        <input
          className="w-full border rounded-lg p-3 mt-2"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-4">

        <label className="font-semibold">

          Email

        </label>

        <input
          type="email"
          className="w-full border rounded-lg p-3 mt-2"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-6">

        <label className="font-semibold">

          Password

        </label>

        <input
          type="password"
          className="w-full border rounded-lg p-3 mt-2"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3"
      >

        {loading ? "Creating Account..." : "Register"}

      </button>

    </form>

  );

}