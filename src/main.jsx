import { createRoot } from 'react-dom/client'
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
