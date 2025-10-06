import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div id="dashboard">
      <div className="dashboard-content">
        <header>
          <h1>Welcome to Your Dashboard</h1>
          <p>Your personalized hub for academic excellence, campus activities, and institutional resources.</p>
        </header>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>4</h3>
            <p>Active Courses</p>
          </div>
          <div className="stat-card">
            <h3>12</h3>
            <p>Assignments Due</p>
          </div>
          <div className="stat-card">
            <h3>8.7</h3>
            <p>Current GPA</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Attendance Rate</p>
          </div>
        </div>
        
        <main>
          <Link to="/" className="btn">Return to Home</Link>
        </main>
      </div>
    </div>
  )
}
