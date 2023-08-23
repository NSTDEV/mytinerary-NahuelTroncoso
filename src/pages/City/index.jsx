import React, { useState, useEffect } from 'react';
import { getCity } from '../../services/citiesQueries';
import { useParams } from 'react-router-dom';

const City = () => {
  const [city, setCity] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const cityData = await getCity(id);
        setCity(cityData);
        console.log("Cities:", cityData);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchCityData();
  }, [id]);

  return (
    <section>
      <h2>{city.name}</h2>
      <img src={city.image} alt={city.name} />
      <h3>{city.country}</h3>
      <p>{city.description}</p>
    </section>
  );
};

export default City;
