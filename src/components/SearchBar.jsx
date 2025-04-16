/**
 * Weather Forecast App - Search Bar Component
 * src/components/SearchBar.jsx
 * 
 * This component provides a form for users to search for cities
 * to display weather information.
 */

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full px-4 py-2 rounded-l-lg border-2 border-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        aria-label="City name"
      />
      <button 
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                 py-2 px-4 rounded-r-lg transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;