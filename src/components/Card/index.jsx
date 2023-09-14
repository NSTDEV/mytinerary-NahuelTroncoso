import './style.css';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <>
            <article className='card-container'>
                <div className='card'>
                    <img className='card-img' src={data.image} alt={data.name} />
                    <h2>{data.name}</h2>

                    <div className='content'>
                        <p>{data.country}</p>

                        <Link className='card-redirect' to={`/city/${data._id}`}>
                            More Info
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Card;