import { capitalizeFirstLetter } from '../../utils/helpers';
import React, { useState } from 'react';
import runBuddy from '../../assets/projects/run-buddy.png';
import horiseon from '../../assets/projects/horiseon.png';
import jenniferPortfolio from '../../assets/projects/jennifer-portfolio.png';
import modernRolodex from '../../assets/projects/modern-rolodex.png';
import nikes from '../../assets/projects/nikes-on-my-feet.png';
import password from '../../assets/projects/password-generator.png';
import quizinator from '../../assets/projects/quizinator.png';
import weatherDashboard from '../../assets/projects/weather-dashboard.png';
import workDay from '../../assets/projects/work-day-scheduler.png';

const PhotoList = () => {
  const [photos] = useState([
    {
      name: 'run-buddy',
      description: 'Run-Buddy Website',
      image: runBuddy,
    },
    {
      name: 'horiseon',
      description: 'Horiseon Website',
      image: horiseon,
    },
    {
      name: 'jennifer-portfolio',
      description: 'Jennifer Goodwin Portfolio Page',
      image: jenniferPortfolio,
    },
    {
      name: 'modern-rolodex',
      description: 'Modern Rolodex Group Project',
      image: modernRolodex,
    },
    {
      name: 'nikes-on-my-feet',
      description: 'Nikes On My Feet Group Project',
      image: nikes,
    },
    {
      name: 'password-generator',
      description: 'Password Generator Website',
      image: password,
    },
    {
      name: 'quizinator',
      description: 'Quiz Application Website',
      image: quizinator,
    },
    {
      name: 'weather-dashboard',
      description: 'Website Displays the Weather',
      image: weatherDashboard,
    },
    {
      name: 'work-day-scheduler',
      description: 'Schedules the Workday',
      image: workDay,
    },
  ]);

  return (
    <div>
      <div className='flex-row'>
        {photos.map((image, i) => (
          <div>
            <h1>{capitalizeFirstLetter(image.name)}</h1>
            <p>{image.description}</p>
            <img
              src={image.image}
              alt={image.name}
              className='img-thumbnail mx-1'
              key={image.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
