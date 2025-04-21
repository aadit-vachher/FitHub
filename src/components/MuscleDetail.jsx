import React from 'react';
import './MuscleDetail.css'; // optional

// ✅ Add the exercises object HERE:
const exercises = {
  Biceps: ['Barbell Curl', 'Hammer Curl', 'Concentration Curl'],
  Triceps: ['Tricep Dips', 'Overhead Tricep Extension', 'Tricep Pushdown'],
  Chest: ['Bench Press', 'Push-ups', 'Incline Dumbbell Press'],
  Back: ['Deadlifts', 'Pull-ups', 'Bent Over Rows'],
  Legs: ['Squats', 'Lunges', 'Leg Press'],
};

const MuscleDetail = ({ muscle }) => {
  return (
    <div className="muscle-detail">
      <h3>{muscle} Exercises</h3>
      <ul>
        {exercises[muscle]?.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </div>
  );
};

export default MuscleDetail;
