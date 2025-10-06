import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password || !confirmPassword || !role) {
      alert('Please fill in all fields and select a role.')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    alert('Registration successful! Please login.')
    navigate('/login')
  }

  return (
    <div className="auth-container">
      <div className="auth-panel">
        <div className="auth-form-wrapper">
          <div className="form-header">
            <h2>Create Your Account</h2>
            <p>Join the college portal today.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Choose a username" required />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required />
            </div>
            <div className="form-control">
              <label>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
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
            <button className="btn" type="submit">Create Account</button>
            <p className="form-footer">Already have an account? <Link to="/login">Log In</Link></p>
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
