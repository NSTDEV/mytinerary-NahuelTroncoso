import './style.css';
import { useEffect, useState } from 'react';
import { getAllCities } from '../../services/citiesQueries.js';

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

        <ul>
          {cities.map(city => (
            <li key={city._id}>
              <h2>{city.name}</h2>
              <img src={city.image} alt={city.name} />
              <h3>{city.country}</h3>
              <p>{city.description}</p>
            </li>
          ))}
        </ul>

      </main>
    </div>
  );
}