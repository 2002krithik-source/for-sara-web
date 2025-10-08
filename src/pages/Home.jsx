import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg.jpg'

export default function Home() {
  return (
    <div id="index-page">
      <header>
        <img src={bgImage} alt="Saranathan College of Engineering - Excellence in Education" />
      </header>
      <main>
        <h1>Welcome to the College Portal</h1>
        <p>Your comprehensive gateway to academic excellence, resources, and campus life. Join our community of learners and innovators.</p>
        <div className="buttons">
          <Link to="/login" className="btn">Sign In</Link>
          <Link to="/register" className="btn btn-secondary">Signup</Link>
        </div>
      </main>
    </div>
  )
}
