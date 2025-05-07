import React from 'react';
import './Header.css';

const Header = ({ setCurrentPage, handleLogout }) => {
  return (
    <header className="header">
      <a
        href="#"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          setCurrentPage('home');
        }}
      >
        🏋️‍♂️ FitTrack
      </a>

      <nav className="nav-links">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
        >
          Home
        </a>
        <a
          href="#stretching"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('stretching');
          }}
        >
          Stretch & Recovery
        </a>
        <a
          href="#askai"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('askai');
          }}
        >
          Ask AI
        </a>
        <a
          href="#beginner"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('beginner');
          }}
        >
          Beginner Workouts
        </a>
        <a
          href="#logout"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Header;
