import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ muscle, exercises }) => {
  return (
    <div className="exercise-list-container">
      <h3 className="exercise-list-title">{muscle} Exercises</h3>
      <div className="exercise-items">
        {exercises[muscle].map((exercise, index) => (
          <div key={index} className="exercise-item">
            <div className="exercise-name">{exercise.name}</div>
            <iframe
              className="exercise-video"
              src={exercise.videoUrl}
              title={exercise.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
