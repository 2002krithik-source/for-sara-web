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
            <p>Sign in to access your personalized college portal experience.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Username or Email</label>
              <input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter your username or email" 
                required 
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <div className="form-control">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="" disabled>Select your role</option>
                <option value="admin">Administrator</option>
                <option value="evaluator">Evaluator</option>
                <option value="participant">Participant</option>
              </select>
            </div>
            <button className="btn" type="submit">Sign In to Portal</button>
            <p className="form-footer">
              New to our portal? <Link to="/register">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="auth-showcase">
        <div className="showcase-content">
          <h3>Saranathan College of Engineering</h3>
          <p>"Excellence in Engineering Education & Innovation"</p>
          <img src="https://placehold.co/500x350?text=Modern+Campus+%7C+State-of-the-Art+Facilities" alt="College Campus" />
        </div>
      </div>
    </div>
  )
}
