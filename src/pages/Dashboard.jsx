import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUploadModal, setShowUploadModal] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleUploadClick = () => {
    setShowUploadModal(true)
    setIsMenuOpen(false)
  }

  const closeUploadModal = () => {
    setShowUploadModal(false)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log('File selected:', file.name)
      // Handle file upload logic here
      alert(`File "${file.name}" selected for upload!`)
      closeUploadModal()
    }
  }

  return (
    <div id="dashboard">
      {/* Top Header */}
      <header className="dashboard-header">
        <button className="sidebar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h2>Dashboard</h2>
        <div className="header-actions">
          <span>Welcome, Student</span>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <button onClick={handleUploadClick} className="nav-item">
                Upload
              </button>
            </li>
            <li>
              <Link to="/login" className="nav-item">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="upload-modal-overlay" onClick={closeUploadModal}>
          <div className="upload-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Upload File</h3>
              <button className="close-btn" onClick={closeUploadModal}>&times;</button>
            </div>
            <div className="modal-body">
              <input 
                type="file" 
                id="file-upload" 
                onChange={handleFileUpload}
                className="file-input"
              />
              <label htmlFor="file-upload" className="file-upload-btn">
                Choose File
              </label>
              <p>Select a file to upload</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-content">
        <header>
          <h1>Welcome to Your Dashboard</h1>
          <p>Your personalized hub for academic excellence, campus activities, and institutional resources.</p>
        </header>
        
        <div className="dashboard-actions">
          <Link to="/" className="btn">Return to Home</Link>
        </div>
        </div>
      </main>
    </div>
  )
}
