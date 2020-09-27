import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './HotelInfo.css';
import icon from '../../Files/Icon/star_1_.png';

const HotelInfo = (props) => {
    const { hotelData } = props;
    const { categoryName, image, info, facility, price, rating } = hotelData;
    return (
        <div className="container">
            <h2 className='mb-5'>{categoryName}</h2>
            <Row>
                <Col md={6}>
                    <img className="w-100 h-auto img-fluid rounded" src={image} alt="" />
                </Col>
                <Col md={6} className='smallPara'>
                    <h3>{info}</h3>
                    <p className="lead">{facility[0]}</p>
                    <p className="lead">{facility[1]}</p>
                    <p className="lead">{facility[2]}</p>
                    <div className='d-flex'>
                        <img style={{ width: '15px', height: '15px' }} src={icon} alt="" />
                        <p className='ml-1 mr-5'>{rating}</p>
                        <p className='ml-5'>{price}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HotelInfo;