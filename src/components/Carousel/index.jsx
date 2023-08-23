import './style.css';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const images = [{ countryName: "Egypt", cityName: "Giza", image: "Giza.jpg" }, { countryName: "Argentina", cityName: "Buenos Aires", image: "BuenosAires.jpg" }, { countryName: "China", cityName: "Hong Kong", image: "HongKong.jpg" }, { countryName: "England", cityName: "London", image: "London.jpg" }, { countryName: "Spain", cityName: "Madrid", image: "Madrid.jpg" }, { countryName: "Morocco", cityName: "Marrakech", image: "Marrakech.jpg" }, { countryName: "Russia", cityName: "Moscow", image: "Moscow.jpg" }, { countryName: "France", cityName: "Paris", image: "Paris.jpg" }, { countryName: "Italy", cityName: "Roma", image: "Roma.jpg" }, { countryName: "Japon", cityName: "Tokyo", image: "Tokyo.jpg" }, { countryName: "Canada", cityName: "Toronto", image: "Toronto.jpg" }, { countryName: "Mexico", cityName: "Xochimilco", image: "Xochimilco.jpg" }];

  const [index, setIndex] = useState(0);

  const selectNewImage = (currentIndex, offset) => {
    const newIndex = (currentIndex + offset + images.length) % images.length;
    setIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const previous = () => {
    selectNewImage(index, -4);
  };

  const next = () => {
    selectNewImage(index, 4);
  };

  const renderImages = () => {
    return images.slice(index, index + 4).map((image, imgIndex) => (
      <div key={imgIndex} className='card-container'>
        <h3 className='card-city'>{image.cityName}</h3>
        <img className='card-img' src={`./assets/Cities-imgs/${image.image}`} alt={`${image.cityName}, ${image.countryName}`} />
        <h4 className='card-country'>{image.countryName}</h4>
      </div>
    ));
  };

  return (
    <>
      <section id='carousel'>
        <h2 id='carousel-title'>Popular Mytineraries</h2>
        <div id='cards'>
          {renderImages()}
        </div>

        <div id='arrows'>
          <button className='carousel-button' onClick={previous}>{"<"}</button>
          <button className='carousel-button' onClick={next}>{">"}</button>
        </div>
      </section>
    </>
  );
}