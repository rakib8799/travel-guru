import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = (props) => {
    const { bookingHotel } = props;
    const { name, overview } = bookingHotel;

    return (
        <div className="bookingContent">
            <div className='container childBookingContent'>
                <Row className='mx-auto'>
                    <Col md={6} className="mr-5">
                        <h1 className="text-white">{name}</h1>
                        <p className='text-muted'>{overview}</p>
                    </Col>
                    <Col className='py-2 bg-white border rounded m-auto'>
                        <Form className='m-auto'>
                            <Form.Group controlId="origin">
                                <Form.Label className='text-muted'>Origin</Form.Label>
                                <Form.Control type="text" placeholder="Enter origin" />
                            </Form.Group>
                            <Form.Group controlId="destination">
                                <Form.Label className='text-muted'>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Destination" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="from">
                                    <Form.Label className='text-muted'>From</Form.Label>
                                    <Form.Control className='col' type="date" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="to">
                                    <Form.Label className='text-muted'>To</Form.Label>
                                    <Form.Control className='col' type="date" />
                                </Form.Group>
                            </Form.Row>
                            <Link to='/search'><Button variant="warning" type="submit" className="w-100">
                                Start booking
                        </Button></Link>
                        </Form>
                    </Col>
                </Row>
            </div >
        </div>
    );
};

export default Booking;

