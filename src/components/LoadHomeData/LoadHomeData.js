import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryContext, UserContext } from '../../App';
import Booking from '../Booking/Booking';
import fakeData from '../fakeData/fakeData';

const LoadHomeData = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [, setCategory] = useContext(CategoryContext);
    const { id } = useParams();
    useEffect(() => {
        const loadData = fakeData.find(data => data.id === Number(id));
        setLoggedInUser(loadData);
        setCategory(loadData);
    }, []);

    return (
        <div>
            <div>
                {
                    <Booking bookingHotel={loggedInUser}></Booking>
                }
            </div>
        </div>
    );
};

export default LoadHomeData;