import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password || !role) {
      alert('Please fill in all fields and select a role.')
      return
    }
    alert('Login successful!')
    navigate('/dashboard')
  }

  return (
    <div className="auth-container">
      <div className="auth-panel">
        <div className="auth-form-wrapper">
          <div className="form-header">
            <h2>Welcome Back!</h2>
            <p>Login to access your college portal.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
            </div>
            <div className="form-control">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="" disabled>Select your role</option>
                <option value="admin">Admin</option>
                <option value="participant">Participant</option>
                <option value="evaluator">Evaluator</option>
              </select>
            </div>
            <button className="btn" type="submit">Login</button>
            <p className="form-footer">Don't have an account? <Link to="/register">Sign Up</Link></p>
          </form>
        </div>
      </div>
      <div className="auth-showcase">
        <div className="showcase-content">
          <h3>Saranathan College of Engineering</h3>
          <p>"Winners Begin with Saranathan"</p>
          <img src="https://placehold.co/400x300?text=College+Campus" alt="College Campus" />
        </div>
      </div>
    </div>
  )
}
