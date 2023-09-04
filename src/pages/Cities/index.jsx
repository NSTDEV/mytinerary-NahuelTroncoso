import './style.css';
import React, { useEffect } from 'react';
import Card from '../../components/Card/index';
import SearchBar from '../../components/SearchBar/index';
import { useSelector, useDispatch } from 'react-redux';
import { loadCities, increaseVisibleCities, filterCities } from '../../store/actions/citiesActions.js';
import NotFound from '../../components/NotFoundMessage';

export default function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.citiesReducer.cities);
  const visibleCities = useSelector((state) => state.citiesReducer.visibleCities);
  const { filteredCities, noResults } = useSelector((state) => state.citiesReducer);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(loadCities());
    }
  }, []);

  const handleSearch = searchTerm => {
    if (searchTerm === '') {
      dispatch(filterCities([], false));
    } else {
      const filtered = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.country.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filtered.length === 0) {
        dispatch(filterCities([], true));
      } else {
        dispatch(filterCities(filtered, false));
      }
    }
  };

  const loadMoreCities = () => {
    dispatch(increaseVisibleCities());
  };

  const displayedCities = noResults ? [] : (filteredCities.length > 0 ? filteredCities : cities);

  return (
    <div>
      <main className="cities-container">
        <h1 className='title'>Cities</h1>
        <SearchBar onSearch={handleSearch} />

        <section className='cards-container'>
          {displayedCities.slice(0, visibleCities).map(data => (
            <Card key={data._id} data={data} />
          ))}
          {noResults && <NotFound />}
        </section>

        {visibleCities < displayedCities.length && (
          <button className='load-more-button' onClick={loadMoreCities}><i className="fa-solid fa-arrow-down"></i>More cities!</button>
        )}

      </main>
    </div>
  );
};