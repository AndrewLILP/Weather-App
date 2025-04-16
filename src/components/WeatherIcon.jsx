/**
 * Weather Forecast App - Weather Icon Component
 * src/components/WeatherIcon.jsx
 * 
 * This component displays custom SVG icons based on weather conditions.
 * It provides a more visually appealing alternative to the default OpenWeatherMap icons.
 */

import React from 'react';

function WeatherIcon({ condition, size = 'md' }) {
  // Map sizes to Tailwind classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
  
  // Get proper size class
  const iconClass = sizeClasses[size] || sizeClasses.md;
  
  // Normalize condition text to handle variations
  const normalizedCondition = condition.toLowerCase();
  
  // Determine the icon to display based on the weather condition
  if (normalizedCondition.includes('clear') || normalizedCondition.includes('sunny')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass} text-yellow-400`}
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <path 
          d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          fill="none" 
        />
      </svg>
    );
  }
  
  if (normalizedCondition.includes('cloud')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass} text-gray-400`}
      >
        <path 
          fill="currentColor" 
          d="M6.5 20a3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5h10.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H6.5z" 
        />
        <path 
          fill="currentColor" 
          d="M10 13a4 4 0 1 1 0-8 4 4 0 0 1 4 2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H10z" 
          fillOpacity="0.7"
        />
      </svg>
    );
  }
  
  if (normalizedCondition.includes('rain') || normalizedCondition.includes('drizzle')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass} text-blue-500`}
      >
        <path 
          fill="#9CA3AF" 
          d="M6.5 16a3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5h10.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H6.5z" 
        />
        <path 
          fill="#9CA3AF" 
          d="M10 9a4 4 0 1 1 0-8 4 4 0 0 1 4 2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H10z" 
          fillOpacity="0.7"
        />
        <path 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          d="M8 16v3M12 16v3M16 16v3" 
        />
      </svg>
    );
  }
  
  if (normalizedCondition.includes('thunder') || normalizedCondition.includes('lightning')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass}`}
      >
        <path 
          fill="#9CA3AF" 
          d="M6.5 16a3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5h10.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H6.5z" 
        />
        <path 
          fill="#9CA3AF" 
          d="M10 9a4 4 0 1 1 0-8 4 4 0 0 1 4 2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H10z" 
          fillOpacity="0.7"
        />
        <path 
          fill="#F59E0B" 
          d="M13 12l-3 5h4l-1 5 5-7h-3l1-3z" 
        />
      </svg>
    );
  }
  
  if (normalizedCondition.includes('snow')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass} text-blue-200`}
      >
        <path 
          fill="#9CA3AF" 
          d="M6.5 16a3.5 3.5 0 0 1-3.5-3.5 3.5 3.5 0 0 1 3.5-3.5h10.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H6.5z" 
        />
        <path 
          fill="#9CA3AF" 
          d="M10 9a4 4 0 1 1 0-8 4 4 0 0 1 4 2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H10z" 
          fillOpacity="0.7"
        />
        <circle cx="8" cy="18" r="1" fill="white" />
        <circle cx="12" cy="20" r="1" fill="white" />
        <circle cx="16" cy="18" r="1" fill="white" />
        <circle cx="10" cy="16" r="1" fill="white" />
        <circle cx="14" cy="16" r="1" fill="white" />
      </svg>
    );
  }
  
  if (normalizedCondition.includes('mist') || normalizedCondition.includes('fog') || normalizedCondition.includes('haze')) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={`${iconClass} text-gray-300`}
      >
        <path 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          d="M3 6h18M3 10h18M3 14h18M3 18h18" 
        />
      </svg>
    );
  }
  
  // Default icon for any other condition
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className={`${iconClass} text-gray-400`}
    >
      <circle cx="12" cy="12" r="6" fill="currentColor" />
      <path 
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round" 
        fill="none" 
        opacity="0.5"
      />
    </svg>
  );
}

export default WeatherIcon;