import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg.jpg'

export default function Home() {
  return (
    <>
      <header className="top-header">
        <img src={bgImage} alt="Saranathan College of Engineering - Excellence in Education" />
      </header>
      <div id="index-page">
        <main>
          <h1>Welcome to the National Conference Portal</h1>
          <p>Your comprehensive gateway to academic excellence, resources, and campus life. Join our community of learners and innovators.</p>
          <div className="buttons">
            <Link to="/login" className="btn">Sign In</Link>
            <Link to="/register" className="btn btn-secondary">Signup</Link>
          </div>
        </main>
      </div>
    </>
  )
}
