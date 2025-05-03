import React, { useState } from 'react';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // add this for navigation

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);   // Logs out
    setCurrentPage('home'); // Optional: reset page to home too
  };

  return (
    <>
      {isLoggedIn ? (
        <Main
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleLogout={handleLogout}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
