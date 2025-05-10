import React from "react";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] w-screen text-white">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-2xl mb-6">Oops! Page not found.</p>
    <a
      href="/"
      className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg transition"
    >
      Back
    </a>
  </div>
);

export default NotFound;
