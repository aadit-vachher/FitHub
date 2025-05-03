import React from 'react';
import Header from './Header';
import MuscleMap from './MuscleMap';
import StretchingRecovery from './StretchingRecovery';
// import other components as needed

const Main = ({ currentPage, setCurrentPage, handleLogout }) => {
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} handleLogout={handleLogout} />

      {currentPage === 'home' && <MuscleMap />}
      {currentPage === 'stretching' && <StretchingRecovery />}
      {/* Add more conditions for Ask AI, Beginner Workouts etc. */}
    </div>
  );
};

export default Main;
