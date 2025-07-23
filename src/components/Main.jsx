import React from 'react';
import Header from './Header';
import MuscleMap from './MuscleMap';
import StretchingRecovery from './StretchingRecovery';
import BeginnerWorkouts from './BeginnerWorkouts';
import AskAI from './AskAI';

const Main = ({ currentPage, setCurrentPage, handleLogout }) => {
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} handleLogout={handleLogout} />

      {currentPage === 'home' && <MuscleMap />}
      {currentPage === 'stretching' && <StretchingRecovery />}
      {currentPage === 'beginner' && <BeginnerWorkouts />}
      {currentPage === 'askai' && <AskAI />}
    </div>
  );
};

export default Main;
