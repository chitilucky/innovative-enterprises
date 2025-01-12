import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Innovative Enterprises
        </h1>
        <p className="text-gray-600 mb-8">
        </p>
          <Link href="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go to Products
          </Link>
      </div>
    </main>
  );
};

export default Home;