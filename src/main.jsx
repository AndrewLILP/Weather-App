/**
 * Weather Forecast App - Entry Point
 * src/main.jsx
 * 
 * This file serves as the entry point for the React application.
 * It renders the root App component to the DOM.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)