import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id="index-page">
      <header>
        <img src="https://placehold.co/1200x200?text=Saranathan+College+of+Engineering" alt="College Banner" />
      </header>
      <main>
        <h1>Welcome to the College Portal</h1>
        <p>Your gateway to all college resources and information.</p>
        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Register</Link>
        </div>
      </main>
    </div>
  )
}
