import React from 'react';

const About = () => {
  return (
    <section className='my-5'>
      <h1 id='about'>About Me</h1>
      <img
        src='../../src/assets/cover/cover-image.jpg'
        className='my-2'
        style={{ width: '100%' }}
        alt='cover'
      />
      <div className='my-2'>
        <p>This is my story and I'm sticking to it!</p>
      </div>
    </section>
  );
};

export default About;
