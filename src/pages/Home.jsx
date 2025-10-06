import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div id="index-page">
      <header>
        <img src="https://placehold.co/1200x300?text=Saranathan+College+of+Engineering+%7C+Excellence+in+Education" alt="College Banner" />
      </header>
      <main>
        <h1>Welcome to the College Portal</h1>
        <p>Your comprehensive gateway to academic excellence, resources, and campus life. Join our community of learners and innovators.</p>
        <div className="buttons">
          <Link to="/login" className="btn">Sign In</Link>
          <Link to="/register" className="btn btn-secondary">Get Started</Link>
        </div>
      </main>
    </div>
  )
}
