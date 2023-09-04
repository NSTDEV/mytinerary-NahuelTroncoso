import React from 'react';

const Itinerary = ({ itinerary }) => {
    if (!itinerary) {
        return <div>Loading itinerary...</div>;
    }

    return (
        <div>
            <h2>Itinerary</h2>
            <ul>
                <li><strong>Name:</strong> {itinerary.name}</li>
                <li><strong>Description:</strong> {itinerary.description}</li>
                <li><strong>Price:</strong> {itinerary.price}</li>
            </ul>
        </div>
    );
};

export default Itinerary;