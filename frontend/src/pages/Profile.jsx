import { useAuth } from "../context/AuthContext";

export default function Profile() {

  const { user } = useAuth();

  return (

    <div className="max-w-5xl mx-auto p-8">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">

            {user?.name?.charAt(0).toUpperCase()}

          </div>

          <div>

            <h1 className="text-3xl font-bold">

              {user?.name}

            </h1>

            <p className="text-gray-500 mt-2">

              {user?.email}

            </p>

          </div>

        </div>

        <hr className="my-8" />

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h2 className="text-xl font-semibold mb-2">

              Full Name

            </h2>

            <div className="border rounded-lg p-4">

              {user?.name}

            </div>

          </div>

          <div>

            <h2 className="text-xl font-semibold mb-2">

              Email

            </h2>

            <div className="border rounded-lg p-4">

              {user?.email}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}