import './style.css';

const Itinerary = ({ data }) => {
    if (!data) {
        return <div>Loading itinerary...</div>;
    }

    return (
        <article className='itinerary-container'>
            <h2>{data.name}</h2>

            <div className='itinerary-user'>
                <img className='user-image' src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="User image" />
                <h3 className='user-name'>Name</h3>
            </div>
            <ul className='itinerary-info'>
                <li><strong>Description:</strong> {data.description}</li>
                <li><strong>Activities:</strong>
                    {data.activities.map((activity, index) => (
                        <p key={index}>{activity.name}</p>
                    ))}
                </li>
                <li><strong>Tags:</strong> {data.tags}</li>
            </ul>
            <li className='itinerary-price'><strong>Price:</strong> {data.price}</li>

            <button className='itinerary-button'>See more<i className="fa-solid fa-angles-down"></i></button>
        </article>
    );
};

export default Itinerary;