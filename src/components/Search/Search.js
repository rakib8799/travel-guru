import React, { useContext, useEffect, useState } from 'react';
import HotelInfo from '../HotelInfo/HotelInfo';
import fakeData from '../fakeData/fakeData'
import GoogleMap from '../GoogleMap/GoogleMap';
import { Col, Row } from 'react-bootstrap';
import { CategoryContext, UserContext } from '../../App';

const Search = () => {
    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const [category, setCategory] = useContext(CategoryContext);
    const [item,setItem] = useState([]);
    useEffect(() => {
        const search = fakeData.filter(searchFilter => searchFilter.name === category.name);
        setCategory(search);
        setItem(search);
    }, []);

    return (
        <div className="container pt-5">
            <Row>
                <Col md={7}>
                    {
                        item.map(data => <HotelInfo key={data.key} hotelData={data}></HotelInfo>)
                    }
                </Col>
                <Col md={5}>
                    <GoogleMap></GoogleMap>
                </Col>
            </Row>
        </div>
    );
};

export default Search;