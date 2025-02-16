import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'
import './index.css'
import Hero from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </App>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)
