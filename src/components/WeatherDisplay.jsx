/**
 * Weather Forecast App - Weather Display Component
 * src/components/WeatherDisplay.jsx
 * 
 * This component displays the current weather information for a city
 * including temperature, humidity, wind speed, and conditions.
 */

import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherDisplay({ data, unit }) {
    const tempUnit = unit === 'metric' ? '°C' : '°F';
    const windUnit = unit === 'metric' ? 'm/s' : 'mph';
    
    // Determine temperature class for text color
    const getTempColorClass = () => {
        const temp = data.main.temp;
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
    
    // Get weather icon URL
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    return (
        <div className="bg-white/30 dark:bg-gray-700/30 rounded-lg p-6 mb-6 backdrop-blur-md shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{data.name}, {data.sys.country}</h2>
                <div className="flex items-center">
                    <WeatherIcon 
                        condition={data.weather[0].description}
                        size="lg"
                    />
                    <span className={`text-4xl font-bold ${getTempColorClass()}`}>
                        {Math.round(data.main.temp)}{tempUnit}
                    </span>
                </div>
            </div>
            
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-200 capitalize">
                {data.weather[0].description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-lg shadow">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Feels Like</p>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white">
                        {Math.round(data.main.feels_like)}{tempUnit}
                    </p>
                </div>
                
                <div className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-lg shadow">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Humidity</p>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white">
                        {data.main.humidity}%
                    </p>
                </div>
                
                <div className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-lg shadow">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Wind Speed</p>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white">
                        {data.wind.speed} {windUnit}
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-lg shadow">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Min/Max</p>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white">
                        {Math.round(data.main.temp_min)}{tempUnit} / {Math.round(data.main.temp_max)}{tempUnit}
                    </p>
                </div>
                
                <div className="bg-white/50 dark:bg-gray-600/50 p-3 rounded-lg shadow">
                    <p className="text-sm text-gray-500 dark:text-gray-300">Pressure</p>
                    <p className="text-xl font-semibold text-gray-800 dark:text-white">
                        {data.main.pressure} hPa
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;