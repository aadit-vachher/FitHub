import React from 'react';
import './StretchingRecovery.css';

const stretchingExercises = {
  Neck: [
    { name: 'Neck Stretch', videoUrl: 'https://www.youtube.com/embed/AdUme1Z-DDE' },
    { name: 'Upper Trap Stretch', videoUrl: 'https://www.youtube.com/embed/-r0eoFS7_5Q' },
  ],
  Back: [
    { name: 'Cat-Cow Stretch', videoUrl: 'https://www.youtube.com/embed/KpNznspZZEY' },
    { name: "Child's Pose", videoUrl: 'https://www.youtube.com/embed/AuP6PkjaNy0' },
  ],
  Hamstrings: [   
    { name: 'Standing Hamstring Stretch', videoUrl: 'https://www.youtube.com/embed/Eg6M42FgDF4' },
    // { name: 'Seated Hamstring Stretch', videoUrl: 'https://www.youtube.com/embed/IWHm2wnIoUY' },
  ],
  Shoulders: [
    { name: 'Cross-body Shoulder Stretch', videoUrl: 'https://www.youtube.com/embed/swvXpKN832E' },
    { name: 'Wall Shoulder Stretch', videoUrl: 'https://www.youtube.com/embed/FztKVoh1VqE' },
  ]
};


const StretchingRecovery = () => {
  return (
    <div className="stretching-container">
      <h2 className="stretching-title">Stretching & Recovery</h2>
      {Object.keys(stretchingExercises).map((area) => (
        <div key={area} className="stretching-section">
          <h3 className="stretching-area">{area} Stretches</h3>
          <div className="stretching-list">
            {stretchingExercises[area].map((exercise, index) => (
              <div key={index} className="stretching-item">
                <p className="exercise-name">{exercise.name}</p>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="215"
                    src={exercise.videoUrl}
                    title={exercise.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StretchingRecovery;
