import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SessionProvider } from './context/SessionProvider.jsx'

createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <App />
  </SessionProvider>
)
