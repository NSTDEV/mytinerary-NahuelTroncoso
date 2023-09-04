import './style.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCities } from '../../store/actions/citiesActions.js';


export default function Carousel() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.citiesReducer.cities.slice(0, 12));

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(loadCities());
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index, cities]);

  const previous = () => {
    selectNewImage(index, -itemsPerPage);
  };

  const next = () => {
    selectNewImage(index, itemsPerPage);
  };

  const selectNewImage = (currentIndex, offset) => {
    const newIndex = (currentIndex + offset + cities.length) % cities.length;
    setIndex(newIndex);
  };

  const renderImages = () => {
    return cities.slice(index, index + itemsPerPage).map((city, cityIndex) => (
      <li key={cityIndex} className='carousel-card-container'>
        <h3 className='carousel-card-city'>{city.name}</h3>
        <img className='carousel-card-img' src={city.image} alt={`${city.cityName}, ${city.country}`} />
        <h4 className='carousel-card-country'>{city.country}</h4>
      </li>
    ));
  };

  return (
    <>
      <section id='carousel-container'>
        <h2 id='carousel-title'>Popular Mytineraries</h2>
        <div className='carousel-cards'>
          {renderImages()}
        </div>

        <div id='arrows'>
          <button className='carousel-button' onClick={previous}>{"<"}</button>
          <button className='carousel-button' onClick={next}>{">"}</button>
        </div>
      </section>
    </>
  );
};