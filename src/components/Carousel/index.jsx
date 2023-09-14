import './style.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/index';
import Button from '../Button/index'
import { useSelector, useDispatch } from 'react-redux';
import { loadCities } from '../../store/actions/citiesActions.js';


export default function Carousel() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities.slice(0, 12));

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
      <Card key={cityIndex} data={city} />
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
          <Button className='gradient-button' onClick={previous} iconClassName={"fa-solid fa-arrow-left"} />
          <Button className='gradient-button' onClick={next} iconClassName={"fa-solid fa-arrow-right"} />
        </div>
      </section>
    </>
  );
};