import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Router>
)
