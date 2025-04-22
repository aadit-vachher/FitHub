import React, { useState } from 'react';
import './MuscleMap.css';

import ExerciseList from './ExerciseList';

const MuscleMap = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const exercises = {
    Biceps: ['Barbell Curl', 'Hammer Curl', 'Concentration Curl'],
    Triceps: ['Tricep Dips', 'Overhead Tricep Extension', 'Tricep Pushdown'],
    Chest: ['Bench Press', 'Push-ups', 'Incline Dumbbell Press'],
    Back: ['Deadlifts', 'Pull-ups', 'Bent Over Rows'],
    Legs: ['Squats', 'Lunges', 'Leg Press'],
  };
  

  const handleMuscleClick = (muscle) => {
    setSelectedMuscle(muscle);
  };

  return (
    <div className="muscle-map-container">
      <h2 className="muscle-map-title">Select a Muscle</h2>
      <img src="../public/muscle-map.svg" alt="Muscle Map" className="muscle-image" />
      
      <div className="sub-muscle-buttons">
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Biceps')}>Biceps</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Triceps')}>Triceps</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Chest')}>Chest</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Back')}>Back</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Legs')}>Legs</button>
      </div>


      {selectedMuscle && (
  <ExerciseList muscle={selectedMuscle} exercises={exercises} />
)}
    </div>
  );
};

export default MuscleMap;
