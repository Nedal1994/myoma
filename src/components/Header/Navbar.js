import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Header/Navbar.css'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { authActions } from '../../store';
axios.defaults.withCredentials = true

function ColorSchemesExample() {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const sendLogoutRequest = async () =>{
        const res = await axios.post('http://localhost:4000/api/logout',null,{
            withCredentials: true
        })
        if(res.status === 200)
        {
            return res
        }
        return new Error('Unable to logout')
    }


    const handleLogout = () =>{
        sendLogoutRequest().then(()=>dispatch(authActions.logout()))
    }


    const [value, setValue] = useState()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Myoma</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/services'>Services</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        
                       {!isLoggedIn && <> <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/register'>Register</Nav.Link></>}

                        {isLoggedIn && (
                            <Nav.Link onClick={handleLogout} href='/'>Logout</Nav.Link>
                        )}{' '}
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
            <br />

        </>
    );
}

export default ColorSchemesExample;