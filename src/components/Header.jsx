import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">🏋️‍♂️ FitTrack</a>
      <nav className="nav-links">
        <a href="#stretching">Stretch & Recovery</a>
        <a href="#saved">Saved Workouts</a>
        <a href="#askai">Ask AI</a>
        <a href="#beginner">Beginner Workouts</a>
      </nav>
    </header>
  );
};

export default Header;
