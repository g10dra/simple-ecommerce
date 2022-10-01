import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SITE_TITLE } from '../commonConstants';
import { logoutUser } from '../redux/actions/loginActions';
import Search from './Search';

function Header() {

  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cartReducer);
  const totalCount = Object.values(cartData).reduce((accumulator,count)=>accumulator+count,0);
  const loginInfo = useSelector(state => state.loginReducer);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand ><Nav.Link as={Link} to={"/"}>{SITE_TITLE}</Nav.Link></Navbar.Brand>
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


        {loginInfo.userInfo._id?
         <>
         <span style={{color:'white'}}>Welcome {loginInfo.userInfo.name}</span> 
         <Button as={Link} to={"/my-orders"} variant="outline-success">My Orders</Button>
         <Button onClick={e=>dispatch(logoutUser())} variant="outline-danger">Logout</Button>
         </>
        :
        (
          <> 
          <Button as={Link} to={"/login"} variant="outline-success">Login</Button>&nbsp;&nbsp;
            <Button as={Link} to={"/register"}  variant="outline-success">Register</Button>&nbsp;&nbsp;</>
        )}

            
           

         

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;