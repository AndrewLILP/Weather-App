# Weather App

A modern, responsive weather application built with React that provides current weather conditions and 5-day forecasts for any city.

## Features

- Clean, intuitive user interface with responsive design
- Current weather conditions with temperature, humidity, wind speed, and more
- 5-day weather forecast
- Custom weather icons based on conditions
- Toggle between Celsius and Fahrenheit
- Automatic dark mode support based on system preferences
- Mobile-friendly design

## Live Demo

Check out the live demo: 

*********** - change / update
[Weather App Demo](https://your-username.github.io/weather-app)

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/AndrewLILP/Weather-App
cd Weather-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create OpenWeatherMap API key

This app uses the OpenWeatherMap API to fetch weather data. You'll need to create a free API key:

1. Visit [OpenWeatherMap](https://openweathermap.org/) and sign up for a free account
2. After signing up, go to your account's "API Keys" section
3. Generate a new API key (it may take a few hours to activate)

### 4. Set up environment variables

Create a `.env` file in the project root directory:

```
REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the API key you generated in the previous step.

### 5. Start the development server

```bash
npm run dev
```

The app will be available at:

http://localhost:5173/


## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `build` directory.

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Forecast.jsx
│   │   ├── Forecast.css
│   │   ├── SearchBar.jsx
│   │   ├── TemperatureToggle.jsx
│   │   ├── WeatherDisplay.jsx
│   │   ├── WeatherDisplay.css
│   │   └── WeatherIcon.jsx
│   ├── App.jsx
│   ├── Main.jsx
│   └── index.css
├── .env
└── package.json
└── tailwind.config.js
└── vite.config.js
```

## Using the App

1. When you open the app, you'll see a search bar in the middle of the screen
2. Enter a city name (e.g., "London", "New York", "Tokyo") and click Search
3. The app will display the current weather and forecast for that location
4. Use the temperature toggle to switch between Celsius and Fahrenheit - the default is Celsius

## API Usage

This project uses the following OpenWeatherMap API endpoints:

- Current weather: `https://api.openweathermap.org/data/2.5/weather`
- 5-day forecast: `https://api.openweathermap.org/data/2.5/forecast`

For more information, refer to the [OpenWeatherMap API documentation](https://openweathermap.org/api).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Acknowledgments

- Circuit Stream
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Background image from [Unsplash](https://unsplash.com/)
- Icons created with custom SVG components
