import './style.css';
import Card from '../../components/Card/index';
import Button from '../../components/Button/index'
import SearchBar from '../../components/SearchBar/index';
import NotFound from '../../components/NotFoundMessage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCities, increaseVisibleCities, filterCities } from '../../store/actions/citiesActions.js';

export default function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const visibleCities = useSelector((state) => state.cities.visibleCities);
  const { filteredCities, noResults } = useSelector((state) => state.cities);

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
    };
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
          {displayedCities.slice(0, visibleCities).map(city => (
            <Card key={city._id} data={city} />
          ))}
          {noResults && <NotFound />}
        </section>

        {visibleCities < displayedCities.length && (
          <Button className='load-more-button gradient-button' onClick={loadMoreCities} iconClassName="fa-solid fa-arrow-down" text="More cities!" />
        )}

      </main>
    </div>
  );
};