import React from 'react';

const HotelsHome = (props) => {
    const {hotels} = props;
    const {name,description} = hotels;

    return (
        <div>
            <h1 className='text-white'>{name}</h1>
            <p className='text-muted'>{description}</p>
        </div>
    );
};

export default HotelsHome;