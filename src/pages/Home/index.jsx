import './style.css';
import Hero from '../../components/Hero/index';
import Carousel from '../../components/Carousel/index';

export default function index() {
  return (
    <>
      <main className='home-container'>
        <Hero />
        <Carousel />
      </main>
    </>
  )
};