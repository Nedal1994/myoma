import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/css/Navbar.css'

function NavScrollExample() {
    return (
        <Navbar className="shadow-sm p-3 mb-5 bg-body rounded" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/services'>Services</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>

                    <Navbar.Brand 
                    href="#" 
                    id='logo'
                    >Myoma</Navbar.Brand>

                    <Button 
                    variant="outline-primary" 
                    className='btn btn-outline-primary px-4 rounded-pill' 
                    id='login'
                    href='/login'
                    >
                        <i className='fa fa-sign-in me-2'></i>Login
                    </Button>

                    <Button 
                    variant="outline-primary" 
                    className='btn btn-outline-primary px-4 rounded-pill'
                    id='register'
                    href='/register'
                    >
                        <i className='fa fa-user-plus me-2'></i>Register
                    </Button>

                    <Button 
                    variant="outline-primary" 
                    className='btn btn-outline-primary px-4 rounded-pill'
                    href='/dashboard'
                    >
                        Dashboard
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;