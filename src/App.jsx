import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import EvaluatorDashboard from './pages/EvaluatorDashboard'
import EvaluatePapers from './pages/EvaluatePapers'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/evaluator-dashboard" 
          element={
            <ProtectedRoute requiredRole="evaluator">
              <EvaluatorDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/evaluate-papers" 
          element={
            <ProtectedRoute requiredRole="evaluator">
              <EvaluatePapers />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AuthProvider>
  )
}
