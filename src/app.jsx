/**
 * Weather Forecast App - Main Component
 * src/App.jsx
 * 
 * This component serves as the main container for the Weather Forecast application.
 * It manages state for city search, weather data, and temperature unit preferences.
 */

import React, { useState, useEffect } from 'react';

import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Forecast from './components/Forecast';
import './index.css';

// Temperature toggle component with F and toggle on the same line
const TemperatureToggle = ({ unit, onToggle }) => {
  return (
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Weather Forecast App</h1>
      
      <div className="flex flex-col items-center space-y-3">
        {/* Celsius on its own line */}
        <div className={`px-4 py-2 rounded-lg ${unit === 'metric' ? 'bg-blue-100 text-blue-600 font-bold' : 'bg-gray-100 text-gray-600'}`}>
          °C
        </div>
        
        {/* F and toggle on the same line */}
        <div className="flex items-center justify-center space-x-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={unit === 'imperial'}
              onChange={onToggle}
            />
            <div className="w-14 h-7 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500 relative"></div>
          </label>
          <div className={`px-4 py-2 rounded-lg ${unit === 'imperial' ? 'bg-blue-100 text-blue-600 font-bold' : 'bg-gray-100 text-gray-600'}`}>
            °F
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit

  // Helper function to determine background color based on temperature
  const getBackgroundClass = () => {
    if (!weatherData) return 'bg-blue-100';
    
    const temp = weatherData.main.temp;
    if (unit === 'metric') {
      if (temp < 0) return 'bg-blue-900';
      if (temp < 10) return 'bg-blue-700';
      if (temp < 20) return 'bg-blue-500';
      if (temp < 30) return 'bg-blue-300';
      return 'bg-blue-200';
    } else {
      // Temperature is in Fahrenheit
      if (temp < 32) return 'bg-blue-900';
      if (temp < 50) return 'bg-blue-700';
      if (temp < 68) return 'bg-blue-500';
      if (temp < 86) return 'bg-blue-300';
      return 'bg-blue-200';
    }
  };

  // Toggle temperature unit handler
  const handleUnitToggle = () => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric');
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setError('');
      
      try {
        const apiKey = '06519f6a5771bf6176a065e1f8b00ecc';
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`
        );
  
        if (!weatherRes.ok) {
          throw new Error('City not found');
        }
  
        const weather = await weatherRes.json();
        setWeatherData(weather);
  
        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
        );
        
        if (!forecastRes.ok) {
          throw new Error('Forecast not found');
        }
        
        const forecast = await forecastRes.json();
        // Get one forecast per day (at noon)
        const dailyForecast = forecast.list.filter(item => item.dt_txt.includes('12:00:00'));
        setForecastData(dailyForecast);
      }
      catch(err) {
        setError(err.message);
        setWeatherData(null);
        setForecastData([]);
      }
      finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, unit]); // Re-fetch when unit changes

  return (
    <div className={`min-h-screen w-full p-4 transition-colors duration-500 ${getBackgroundClass()}`}>
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <div className="content-center">
          {/* Temperature toggle component with integrated title */}
          <TemperatureToggle unit={unit} onToggle={handleUnitToggle} />
          
          {/* Search bar centered */}
          <div className="w-full max-w-md mx-auto mb-6">
            <SearchBar onSearch={setCity} />
          </div>
          
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{error}</p>
            </div>
          )}
          
          {weatherData && <WeatherDisplay data={weatherData} unit={unit} />}
          
          {forecastData.length > 0 && <Forecast data={forecastData} unit={unit} />}
        </div>
      </div>
    </div>
  );
}

export default App;