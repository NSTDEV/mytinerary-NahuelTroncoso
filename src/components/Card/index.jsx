import './style.css';

const Card = (props) => {
    const { city } = props;
    const { name, country, image, language, description, currency } = city;

    return (
        <article key={imgIndex} className='card-container'>
            <h3 className='card-city'>{name}</h3>
            <img className='card-img' src={`${image}`} alt={`${name}, ${country}`} />
            <h4 className='card-country'>{country}</h4>
            <h4 className='card-country'>{description}</h4>
            <h4 className='card-country'>{language}</h4>
            <h4 className='card-country'>{currency}</h4>
        </article>
    )
};

export default Card;