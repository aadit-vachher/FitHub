import React from 'react';
import './MuscleMap.css';

const MuscleMap = () => {
  return (
    <div className="muscle-map-container">
    <h2 className="muscle-map-title">Select a Muscle</h2>
    <img src="/muscle-map.svg" alt="Muscle Map" className="muscle-image" />
    <div className="sub-muscle-buttons">
        <button className="sub-muscle-button">Biceps</button>
        <button className="sub-muscle-button">Triceps</button>
        
  </div>
</div>

  );
};

export default MuscleMap;
