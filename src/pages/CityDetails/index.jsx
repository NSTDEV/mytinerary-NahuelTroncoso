import './style.css';
import Button from '../../components/Button/index';
import Itinerary from '../../components/Itinerary';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadCityDetails, filterCities } from '../../store/actions/citiesActions';
import { loadItinerariesByCity } from '../../store/actions/itinerariesActions';

const CityDetails = () => {
  const dispatch = useDispatch();
  const cityDetails = useSelector((state) => state.cities.cityDetails);
  const itineraries = useSelector((state) => state.itineraries.itineraries);
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

  const handleGoBack = () => {
    dispatch(loadCityDetails(""));
    dispatch(filterCities([], false));
  };

  return (
    <section className='city-details-container' style={backgroundStyle}>
      <div className='city-details'>
        <h2 id='city-details-title'>{cityDetails.name}</h2>

        <div className='country'>
          <h4 className='city-details'>Country: {cityDetails.country}</h4>
          <i className="fa-solid fa-location-dot"></i>
        </div>

        <div className='description'>
          <h4 className='city-details'>{cityDetails.description}</h4>
          <i className="fa-solid fa-star"></i>
        </div>

        <div>
          <h4 className='city-details country'>City language: {cityDetails.language}</h4>
          <h4 className='city-details currency'>{cityDetails.currency}</h4>
        </div>

      </div>

      {itineraries.length > 0 ? (
        <div className='itineraries-section'>
          <h3 className='itinerary-title'>Itineraries:</h3>
          {itineraries.map((itinerary) => (
            <Itinerary key={itinerary._id} data={itinerary} />
          ))}

        </div>
      ) : (
        <div id='no-itinerary-message'>
          <p>This city has no itineraries yet.</p>
        </div>
      )}

      <Link to="../../cities">
        <Button className="back-button gradient-button" iconClassName={"fa-solid fa-arrow-left"} onClick={handleGoBack} />
      </Link>

    </section>
  );
};

export default CityDetails;