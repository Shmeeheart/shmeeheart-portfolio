import { capitalizeFirstLetter } from '../utils/helpers';
import PhotoList from '../components/PhotoList';
import React from 'react';

function Portfolio({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList />
    </section>
  );
}

export default Portfolio;
