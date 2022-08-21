import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'run-buddy',
      category: 'projects',
      description: 'Run-Buddy Website',
    },
    {
      name: 'horiseon',
      category: 'projects',
      description: 'Horiseon Website',
    },
    {
      name: 'jennifer-portfolio',
      category: 'projects',
      description: 'Jennifer Goodwin Portfolio Page',
    },
    {
      name: 'modern-rolodex',
      category: 'projects',
      description: 'Modern Rolodex Group Project',
    },
    {
      name: 'nikes-on-my-feet',
      category: 'projects',
      description: 'Nikes On My Feet Group Project',
    },
    {
      name: 'password-generator',
      category: 'projects',
      description: 'Password Generator Website',
    },
    {
      name: 'quizinator',
      category: 'projects',
      description: 'Quiz Application Website',
    },
    {
      name: 'weather-dashboard',
      category: 'projects',
      description: 'Website Displays the Weather',
    },
    {
      name: 'work-day-scheduler',
      category: 'projects',
      description: 'Schedules the Workday',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className='flex-row'>
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/projects/${i}.png`).default}
            alt={image.name}
            className='img-thumbnail mx-1'
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
