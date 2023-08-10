import './style.css';
import { useEffect, useState } from 'react';

export default function Carousel() {
  const images = [{ countryName: "Egypt", cityName: "Giza", image: "Giza.jpg" }, { countryName: "Argentina", cityName: "Buenos Aires", image: "BuenosAires.jpg" }, { countryName: "China", cityName: "Hong Kong", image: "HongKong.jpg" }, { countryName: "England", cityName: "London", image: "London.jpg" }, { countryName: "Spain", cityName: "Madrid", image: "Madrid.jpg" }, { countryName: "Morocco", cityName: "Marrakech", image: "Marrakech.jpg" }, { countryName: "Russia", cityName: "Moscow", image: "Moscow.jpg" }, { countryName: "France", cityName: "Paris", image: "Paris.jpg" }, { countryName: "Italy", cityName: "Roma", image: "Roma.jpg" }, { countryName: "Japon", cityName: "Tokyo", image: "Tokyo.jpg" }, { countryName: "Canada", cityName: "Toronto", image: "Toronto.jpg" }, { countryName: "Mexico", cityName: "Xochimilco", image: "Xochimilco.jpg" }];

  const [index, setIndex] = useState(0);

  //Image Selector to render
  const selectNewImage = (currentIndex, offset) => {
    const newIndex = (currentIndex + offset + images.length) % images.length;
    setIndex(newIndex);
  };

  //Use effect for autoplay>
  useEffect(() => {
    const interval = setInterval(() => { next(); }, 5000);

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

  //Images renderer
  const renderImages = () => {
    const renderedImages = [];

    for (let i = index; i < index + 4; i++) {
      const imgIndex = i >= images.length ? i - images.length : i;

      renderedImages.push(
        <div key={imgIndex} className='card-container'>
          <h3 className='card-city'>{images[imgIndex].cityName}</h3>
          <img className='card-img' src={`./assets/Cities-imgs/${images[imgIndex].image}`}
            alt={`${images[imgIndex].cityName}, ${images[imgIndex].countryName}`} />
          <h4 className='card-country'>{images[imgIndex].countryName}</h4>
        </div>
      );
    };

    return renderedImages;
  };

  return (
    <>
      <section id='carrousel'>
        <h2 id='carrousel-title'>Popular Mytineraries</h2>
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
