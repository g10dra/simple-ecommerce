import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { SITE_TITLE } from "../commonConstants"

const Footer = () => {
    
        return(
            <div className="fixed-bottom">  
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand>{SITE_TITLE}</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
}
export default Footer;