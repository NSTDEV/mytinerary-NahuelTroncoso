import './style.css';
import React, { useEffect } from 'react';
import Button from '../../components/Button/index';
import Itinerary from '../../components/Itinerary';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCityDetails } from '../../store/actions/citiesActions';
import { loadItinerariesByCity } from '../../store/actions/itinerariesActions';

const CityDetails = () => {
  const dispatch = useDispatch();
  const cityDetails = useSelector((state) => state.citiesReducer.cityDetails);
  const itineraries = useSelector((state) => state.itinerariesReducer.itineraries);
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadCityDetails(id));
    dispatch(loadItinerariesByCity(id));
  }, [dispatch, id]);

  if (!cityDetails) {
    return <div>Loading...</div>;
  }

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom,
      rgba(0, 0, 0, .2),
      rgba(0, 0, 0, .8)),
      url(${cityDetails.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <section className='city-details-container' style={backgroundStyle}>
      <div>
        <h2 id='city-details-title'>{cityDetails.name}</h2>
        <h3 className='city-details country'>Country: {cityDetails.country}
          <i className="fa-solid fa-location-dot"></i>
        </h3>
        <h3 className='city-details description'>{cityDetails.description}</h3>
      </div>
      <i className="fa-solid fa-star"></i>

      <div>
        <h3 className='city-details country'>City language: {cityDetails.language}</h3>
        <h3 className='city-details currency'>{cityDetails.currency}</h3>
      </div>

      {itineraries.length > 0 ? (
        <div>
          <h3>Itineraries:</h3>
          <ul>
            {itineraries.map((itinerary) => (
              <li key={itinerary._id}>
                <Itinerary itinerary={itinerary} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>This city has no itineraries yet.</p>
        </div>
      )}

      <Link to="../../cities" className="back-button">
        <i className="fa-solid fa-left-long"></i>
        <Button id={"go-back-button"} text={'Go back'} />
      </Link>
    </section>
  );
};

export default CityDetails;
