import './style.css';
import React from 'react';

const City = ({ city }) => {
  return (
    <section className='card-container'>
      <h2 className='card-city'>{city.name}</h2>
      <img className='card-img' src={city.image} alt={city.name} />
      <h3 className='card-country'>{city.country}</h3>
      <p className='card-details'>{city.description}</p>
    </section>
  );
};

export default City;
