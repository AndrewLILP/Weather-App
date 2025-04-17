/**
 * Weather Forecast App - Temperature Toggle Component
 * src/components/TemperatureToggle.jsx
 * 
 * This component provides a toggle switch to change between 
 * Celsius (metric) and Fahrenheit (imperial) temperature units.
 */

import React from 'react';

function TemperatureToggle({ unit, onToggle }) {
  const isFahrenheit = unit === 'imperial';
  
  return (
    <div className="flex items-center space-x-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-2 rounded-full shadow-sm">
      <span className={`text-sm font-medium transition-colors duration-300 ${isFahrenheit ? 'text-gray-500 dark:text-gray-400' : 'text-blue-600 dark:text-blue-400'}`}>°C</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isFahrenheit}
          onChange={onToggle}
          aria-label="Toggle temperature unit between Celsius and Fahrenheit"
        />
        <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                      peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full 
                      peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                      rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
                      after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                      after:bg-white after:border-gray-300 after:border after:rounded-full 
                      after:h-5 after:w-5 after:transition-all dark:border-gray-600 
                      peer-checked:bg-blue-600"></div>
      </label>
      <span className={`text-sm font-medium transition-colors duration-300 ${isFahrenheit ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>°F</span>
    </div>
  );
}

export default TemperatureToggle;