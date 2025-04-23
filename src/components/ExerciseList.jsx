// import React from 'react';
// import './ExerciseList.css';

// const ExerciseList = ({ muscle, exercises }) => {
//   return (
//     <div className="exercise-list">
//       <h3>{muscle} Exercises</h3>
//       <ul>
//         {exercises[muscle].map((exercise, index) => (
//           <li key={index}>{exercise}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExerciseList;



import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({ muscle, exercises }) => {
  return (
    <div className="exercise-list">
      <h3>{muscle} Exercises</h3>
      <ul>
        {exercises[muscle].map((exercise, index) => (
          <li key={index} className="exercise-item">
            <p className="exercise-name">{exercise.name}</p>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="315"
                src={exercise.videoUrl}
                title={exercise.name}
                // frameBorder="5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
