import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SITE_TITLE } from '../commonConstants';
import Search from './Search';

function Header() {

  const cartData = useSelector(state=>state.cartReducer);
  const totalCount = Object.values(cartData).reduce((accumulator,count)=>accumulator+count,0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand >{SITE_TITLE}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>

            <Nav.Link as={Link} to={"/checkout"}>{totalCount}<BsFillCartCheckFill /></Nav.Link>
           
             
          </Nav>

          <Search />


        

            <Button variant="outline-success">Login</Button>&nbsp;&nbsp;
            <Button variant="outline-success">Register</Button>&nbsp;&nbsp;
            <Button variant="outline-danger">Logout</Button>

         

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;