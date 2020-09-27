import React, { useContext} from 'react';
import logo from '../../Files/Logo.png';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="bg-dark">
            <Navbar className="ml-5" expand="lg">
                <Navbar.Brand className="ml-5" href="/home">
                    <img
                        src={logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top bg-white"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="w-50 mx-3">
                        <FormControl type="text" placeholder="Search your Destination" className="mr-sm-2 bg-dark text-muted" />
                    </Form>
                    <Nav>
                        <Nav.Link href='#' className="mx-3 text-white rounded" >News</Nav.Link>
                        <Nav.Link href="#" className="mx-3 text-white rounded">Destination</Nav.Link>
                        <Nav.Link href="#" className="mx-3 text-white rounded">Blog</Nav.Link>
                        <Nav.Link href="#" className="mx-3 text-white rounded" >Contact</Nav.Link>
                        <Nav.Link href="#" className="mx-3 text-white bg-warning rounded">{(loggedInUser.name &&loggedInUser.email)? loggedInUser.name : 'Login'}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;