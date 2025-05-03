import React from 'react';
import Header from './Header';
import MuscleMap from './MuscleMap';
import StretchingRecovery from './StretchingRecovery';


const Main = ({ currentPage, setCurrentPage, handleLogout }) => {
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} handleLogout={handleLogout} />

      {currentPage === 'home' && <MuscleMap />}
      {currentPage === 'stretching' && <StretchingRecovery />}

    </div>
  );
};

export default Main;
