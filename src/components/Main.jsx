import React, { useState } from 'react';
import Login from './Login';
import MuscleMap from './MuscleMap'; 
import Header from './Header';

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = () => {

    setCurrentPage('muscleMap');
  };

  return (
    <>
      <Header />
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'muscleMap' && <MuscleMap />}
      
    </>
  );
};

export default MainApp;
