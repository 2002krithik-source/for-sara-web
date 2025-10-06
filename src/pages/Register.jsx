import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username || !password || !confirmPassword) {
      alert('Please fill in all fields.')
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
            <h2>Join Our Community</h2>
            <p>Create your account and become part of our academic excellence journey.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Username</label>
              <input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Choose a unique username" 
                required 
              />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Create a strong password" 
                required 
              />
            </div>
            <div className="form-control">
              <label>Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm your password" 
                required 
              />
            </div>
            <button className="btn" type="submit">Create My Account</button>
            <p className="form-footer">
              Already part of our community? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      <div className="auth-showcase">
        <div className="showcase-content">
          <h3>Saranathan College of Engineering</h3>
          <p>"Innovation • Excellence • Future Leaders"</p>
          <img src="https://placehold.co/500x350?text=Join+Our+Community+%7C+10000%2B+Students" alt="College Community" />
        </div>
      </div>
    </div>
  )
}
