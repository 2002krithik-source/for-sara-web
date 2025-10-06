import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div id="dashboard">
      <header>
        <h1>Welcome to your Dashboard</h1>
      </header>
      <main>
        <p>This is your central hub for all college-related activities and information.</p>
        <Link to="/" className="btn">Logout</Link>
      </main>
    </div>
  )
}
