import React, { useState } from 'react';
import Login from './Login';
import MuscleMap from './MuscleMap'; // You'll build this next

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {
    // After successful login
    setCurrentPage('muscleMap');
  };

  return (
    <>
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'muscleMap' && <MuscleMap />}
    </>
  );
};

export default MainApp;
