import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark" >
                <Container >
                    <Navbar.Brand as={Link} to="/"> <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto fw-bold ">
                            <Nav.Link className='text-white' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/exparts">Exparts</Nav.Link>
                        </Nav>
                        {
                            user ?

                                <div className="">
                                    <p className='d-inline text-white'>{user?.displayName}</p>
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                </div>
                                :
                                <Nav.Link className='text-white fw-bold' as={Link} to="/login">LogIn</Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;