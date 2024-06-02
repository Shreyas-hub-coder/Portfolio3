import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
    return (
        <nav style={{ backgroundColor: '#333', display: 'flex', justifyContent: 'flex-end' }}> {/* Added styles */}
            <ul className="navbar">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/skills">Skills</Link></li>
                <li className="nav-item"><Link to="/education">Education</Link></li>
                <li className="nav-item"><Link to="/experience">Experience</Link></li>
                <li className="nav-item"><Link to="/projects">Projects</Link></li>
                <li className="nav-item"><Link to="/resume">Resume</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
