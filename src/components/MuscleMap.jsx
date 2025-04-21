import React, { useState } from 'react';
import './MuscleMap.css';
import MuscleDetail from './MuscleDetail'; 

const MuscleMap = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  return (
    <div className="muscle-map-container">
      <h2 className="muscle-map-title">Select a Muscle</h2>
      <img src="/muscle-map.svg" alt="Muscle Map" className="muscle-image" />
      
      <div className="sub-muscle-buttons">
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Biceps')}>Biceps</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Triceps')}>Triceps</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Chest')}>Chest</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Back')}>Back</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Legs')}>Legs</button>
      </div>


      {selectedMuscle && <MuscleDetail muscle={selectedMuscle} />}
    </div>
  );
};

export default MuscleMap;
