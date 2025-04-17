/**
 * Weather Forecast App - Entry Point
 * src/main.jsx
 * 
 * This file serves as the entry point for the React application.
 * It renders the root App component to the DOM after a small delay
 * to allow the loading screen to be visible.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Adding a small delay to show the loading screen
// This simulates the app initialization process
setTimeout(() => {
  const rootElement = document.getElementById('root')
  
  // Clear the loading screen
  rootElement.innerHTML = ''
  
  // Mount the React app
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}, 1000) // 1 second delay - adjust as needed