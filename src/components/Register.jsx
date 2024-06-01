import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
