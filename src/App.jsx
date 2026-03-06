import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'  // Removed BrowserRouter
import "./App.css";
import Login from "./components/login/login";
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
    // Provide logout handler globally
    window.onLogout = () => setIsAuthenticated(false);

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
        <Route 
          path="/profile" 
          element={
            isAuthenticated ? 
            <Profile /> : 
            <Navigate to="/" />
          } 
        />
        <Route 
          path="/settings" 
          element={
            isAuthenticated ? 
            <Settings /> : 
            <Navigate to="/" />
          } 
        />
      </Routes>
    </div>
  )
}

export default App