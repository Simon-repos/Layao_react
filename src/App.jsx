import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'  // Removed BrowserRouter
import "./App.css";
import Login from "./components/login/login";
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Login onLogin={() => setIsAuthenticated(true)} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <Dashboard /> : 
            <Navigate to="/" />
          } 
        />
      </Routes>
    </div>
  )
}

export default App