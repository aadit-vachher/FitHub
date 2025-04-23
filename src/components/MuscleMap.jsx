import React, { useState } from 'react';
import './MuscleMap.css';

import ExerciseList from './ExerciseList';

const MuscleMap = () => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const exercises = {
    Biceps: [
      { name: 'Barbell Curl', videoUrl: 'https://www.youtube.com/embed/kwG2ipFRgfo' },
      { name: 'Hammer Curl', videoUrl: 'https://www.youtube.com/embed/zC3nLlEvin4' },
      { name: 'Concentration Curl', videoUrl: 'https://www.youtube.com/embed/av7-8igSXTs' }
    ],
    Triceps: [
      { name: 'Tricep Dips', videoUrl: 'https://www.youtube.com/embed/6kALZikXxLc' },
      { name: 'Overhead Tricep Extension', videoUrl: 'https://www.youtube.com/embed/YbX7Wd8jQ-Q' },
      { name: 'Tricep Pushdown', videoUrl: 'https://www.youtube.com/embed/2-LAMcpzODU' }
    ],
    Chest: [
      { name: 'Bench Press', videoUrl: 'https://www.youtube.com/embed/gRVjAtPip0Y' },
      { name: 'Push-ups', videoUrl: 'https://www.youtube.com/embed/_l3ySVKYVJ8' },
      { name: 'Incline Dumbbell Press', videoUrl: 'https://www.youtube.com/embed/8iPEnn-ltC8' }
    ],
    Back: [
      { name: 'Deadlifts', videoUrl: 'https://www.youtube.com/embed/op9kVnSso6Q' },
      { name: 'Pull-ups', videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
      { name: 'Bent Over Rows', videoUrl: 'https://www.youtube.com/embed/vT2GjY_Umpw' }
    ],
    Legs: [
      { name: 'Squats', videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U' },
      { name: 'Lunges', videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U' },
      { name: 'Leg Press', videoUrl: 'https://www.youtube.com/embed/IZxyjW7MPJQ' }
    ],
    Shoulders: [
      { name: 'Shoulder Press', videoUrl: 'https://www.youtube.com/embed/B-aVuyhvLHU' },
      { name: 'Lateral Raise', videoUrl: 'https://www.youtube.com/embed/3VcKaXpzqRo' },
      { name: 'Front Raise', videoUrl: 'https://www.youtube.com/embed/-t7fuZ0KhDA' }
    ],
    Calves: [
      { name: 'Standing Calf Raise', videoUrl: 'https://www.youtube.com/embed/-M4-G8p8fmc' },
    ],
    Abs: [
      { name: 'Crunches', videoUrl: 'https://www.youtube.com/embed/Xyd_fa5zoEU' },
      { name: 'Leg Raises', videoUrl: 'https://www.youtube.com/embed/JB2oyawG9KI' },
      { name: 'Plank', videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw' }
    ],
    Glutes: [
      { name: 'Hip Thrusts', videoUrl: 'https://www.youtube.com/embed/SEdqd1n0cvg' },
    ],
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
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Shoulders')}>Shoulders</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Calves')}>Calves</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Abs')}>Abs</button>
        <button className="sub-muscle-button" onClick={() => handleMuscleClick('Glutes')}>Glutes</button>
      </div>



      {selectedMuscle && (
  <ExerciseList muscle={selectedMuscle} exercises={exercises} />
)}
    </div>
  );
};

export default MuscleMap;
