/**
 * Weather Forecast App - Weather Display Component
 * src/components/WeatherDisplay.jsx
 * 
 * This component displays the current weather information for a city
 * including temperature, humidity, wind speed, and conditions.
 */

import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherDisplay.css'; // Make sure CSS is imported

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
    
    return (
        <div className="weather-display">
            <h2 className="location-header">{data.name}, {data.sys.country}</h2>
            <h3 className="today-header">Today's Weather</h3>
            
            <div className="weather-cards">
                {/* Current Temperature Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Current</p>
                    <div className="weather-card-icon">
                        <WeatherIcon 
                            condition={data.weather[0].description}
                            size="sm"
                        />
                    </div>
                    <p className={`weather-card-value ${getTempColorClass()}`}>
                        {Math.round(data.main.temp)}{tempUnit}
                    </p>
                    <p className="weather-card-description">
                        {data.weather[0].description}
                    </p>
                </div>
                
                {/* Feels Like Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Feels Like</p>
                    <p className="weather-card-value">
                        {Math.round(data.main.feels_like)}{tempUnit}
                    </p>
                </div>
                
                {/* Humidity Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Humidity</p>
                    <p className="weather-card-value">
                        {data.main.humidity}%
                    </p>
                </div>
                
                {/* Wind Speed Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Wind Speed</p>
                    <p className="weather-card-value">
                        {data.wind.speed} {windUnit}
                    </p>
                </div>
            
                {/* Min/Max Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Min/Max</p>
                    <p className="weather-card-value">
                        {Math.round(data.main.temp_min)}{tempUnit} / {Math.round(data.main.temp_max)}{tempUnit}
                    </p>
                </div>
                
                {/* Pressure Card */}
                <div className="weather-card">
                    <p className="weather-card-label">Pressure</p>
                    <p className="weather-card-value">
                        {data.main.pressure} hPa
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDisplay;