import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ muscle, exercises }) => {
  return (
    <div className="exercise-list">
      <h3>{muscle} Exercises</h3>
      <ul>
        {exercises[muscle].map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
