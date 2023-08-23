import './style.css';
import React, { useEffect, useState } from 'react';
import { getAllCities } from '../../services/citiesQueries.js';
import City from '../City/index';

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getAllCities()
      .then(citiesData => setCities(citiesData))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <main className="container">
        <h1 className='title'>Cities</h1>
        <input id="search-bar" type="search" />

        <ul className='cards'>
          {cities.map(city => (
            <City key={city._id} city={city} />
          ))}
        </ul>

      </main>
    </div>
  );
}