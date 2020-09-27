import React, { useContext } from 'react';
import HotelsHome from '../HotelsHome/HotelsHome'
import { Button, Card, CardDeck, Col, Row } from 'react-bootstrap';
import fakeData from '../fakeData/fakeData'
import './Home.css';
import image1 from '../../Files/Image/Sajek.png';
import image2 from '../../Files/Image/Sreemongol.png';
import image3 from '../../Files/Image/sundorbon.png';
import { Link } from 'react-router-dom';
import { CategoryContext, UserContext } from '../../App';

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [, setCategory] = useContext(CategoryContext);

    const changeData1 = () => {
        const data1 = fakeData.find(data => data.id === 1);
        setLoggedInUser(data1);
        setCategory(data1);
    }
    const changeData2 = () => {
        const data2 = fakeData.find(data => data.id === 2);
        setLoggedInUser(data2);
    }
    const changeData3 = () => {
        const data3 = fakeData.find(data => data.id === 3);
        setLoggedInUser(data3);
    }
    return (
        <div className='homeContent' >
            <div className="container childHomeContent">
                <Row>
                    <Col md={4}>
                        {
                            <HotelsHome hotels={loggedInUser}></HotelsHome>
                        }
                        <Button variant="warning">Booking</Button>
                    </Col>
                    <Col md={8}>
                        <CardDeck>
                            <Card className='card'>
                                <Link to={`/hotel/${1}`} onMouseOver={changeData1} className="text-white">
                                    <Card.Img src={image1} alt="Card image" />
                                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                        <Card.Title>COX'S BAZAR</Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                            <Card className='card'>
                                <Link to={`/hotel/${2}`} onMouseOver={changeData2} className="text-white">
                                    <Card.Img src={image2} alt="Card image" />
                                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                        <Card.Title>SREEMANGAL</Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                            <Card className='card'>
                                <Link to={`/hotel/${3}`} onMouseOver={changeData3} className="text-white">
                                    <Card.Img src={image3} alt="Card image" />
                                    <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                        <Card.Title>SUNDARBANS</Card.Title>
                                    </Card.ImgOverlay>
                                </Link>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;