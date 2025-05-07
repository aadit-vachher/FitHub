import React from 'react';
import './BeginnerWorkouts.css';

const beginnerWorkouts = {
    'Upper Body': [
      { name: 'Incline Push-ups', videoUrl: 'https://www.youtube.com/embed/bXsbK9UPu3c' },
      { name: 'Shoulder Taps', videoUrl: 'https://www.youtube.com/embed/wcKyqAMqueQ' },
      { name: 'Superman Hold', videoUrl: 'https://www.youtube.com/embed/cc6UVRS7PW4' },
    ],
    'Lower Body': [
      { name: 'Lunges', videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U' },
      { name: 'Wall Sit', videoUrl: 'https://www.youtube.com/embed/-cdph8hv0O0' },
      { name: 'Calf Raises', videoUrl: 'https://www.youtube.com/embed/-M4-G8p8fmc' },
    ],
    'Core & Abs': [
      { name: 'Plank', videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw' },
      { name: 'Bicycle Crunches', videoUrl: 'https://www.youtube.com/embed/Iwyvozckjak' },
      { name: 'Mountain Climbers', videoUrl: 'https://www.youtube.com/embed/cnyTQDSE884' },
    ],
  };
  
  
  

const BeginnerWorkouts = () => {
  return (
    <div className="beginner-workouts">
      <h2 className="section-title">Beginner Workouts</h2>
      {Object.keys(beginnerWorkouts).map((category, index) => (
        <div key={index} className="workout-category">
          <h3>{category}</h3>
          <div className="exercise-cards">
            {beginnerWorkouts[category].map((exercise, idx) => (
              <div key={idx} className="exercise-card">
                <h4>{exercise.name}</h4>
                <iframe
                  width="100%"
                  height="200"
                  src={exercise.videoUrl}
                  title={exercise.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="pro-tip">
        <h4>💡 Pro Tip</h4>
        <p>Start with 2 rounds of each routine, 3 times a week. Focus on good form, not speed!</p>
      </div>
    </div>
  );
};

export default BeginnerWorkouts;
