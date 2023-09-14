import './style.css';

const Itinerary = ({ data }) => {
    if (!data) {
        return <div>Loading itinerary...</div>;
    }

    return (
        <section className='itinerary-container'>

            <div className='itinerary'>
                <div className='itinerary-user'>
                    <img className='user-image' src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="User image" />
                    <h3 className='user-name'>{data.user}Name</h3>
                </div>

                <div className='itinerary-info'>
                    <h2>{data.name}</h2>
                    <div className='itinerary-info-data' >
                        <li className='itinerary-description'>Description:<p>{data.description}</p></li>
                        <li className='itinerary-duration'>Duration:<p>{data.duration}</p></li>
                        <li className='itinerary-activity'>Activities:
                            {data.activities.map((activity, index) => (
                                <div key={index}>
                                    <p>{activity}</p>
                                    <p>{activity.description}</p>
                                </div>
                            ))}
                        </li>
                    </div >

                    <li className='itinerary-tags'>Tags: {data.tags.join(', ')}</li>
                    <li className='itinerary-price'>Price: {data.price}</li >

                </div>

            </div>

            <button className='itinerary-button'>See more<i className="fa-solid fa-angles-down"></i></button>
        </section >
    );
};

export default Itinerary;