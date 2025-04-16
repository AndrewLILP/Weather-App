/**
 * Weather Forecast App - Forecast Component
 * src/components/Forecast.jsx
 * 
 * This component displays a 5-day weather forecast with
 * daily temperature and weather conditions.
 */

import React from 'react';
import WeatherIcon from './WeatherIcon';

function Forecast({ data, unit }) {
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';
  
  // Helper function to get weekday name
  const getWeekday = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  // Get temperature color class
  const getTempColorClass = (temp) => {
    if (unit === 'metric') {
      if (temp < 0) return 'text-blue-700';
      if (temp < 10) return 'text-blue-500';
      if (temp < 20) return 'text-green-500';
      if (temp < 30) return 'text-orange-400';
      return 'text-red-500';
    } else {
      if (temp < 32) return 'text-blue-700';
      if (temp < 50) return 'text-blue-500';
      if (temp < 68) return 'text-green-500';
      if (temp < 86) return 'text-orange-400';
      return 'text-red-500';
    }
  };

  return (
    <div className="bg-white/30 dark:bg-gray-700/30 rounded-lg p-6 backdrop-blur-md shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">5-Day Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((item, index) => {
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
          return (
            <div 
              key={index} 
              className="bg-white/50 dark:bg-gray-600/50 rounded-lg p-3 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="font-semibold text-gray-700 dark:text-gray-200">
                {getWeekday(item.dt_txt)}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(item.dt_txt).toLocaleDateString()}
              </p>
              <div className="my-2">
                <WeatherIcon 
                  condition={item.weather[0].description}
                  size="md"
                />
              </div>
              <p className={`text-lg font-bold ${getTempColorClass(item.main.temp)}`}>
                {Math.round(item.main.temp)}{tempUnit}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                {item.weather[0].description}
              </p>
              <div className="mt-2 w-full flex justify-between text-xs">
                <span className="text-blue-500">
                  {Math.round(item.main.humidity)}%
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {Math.round(item.wind.speed)} {windUnit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;