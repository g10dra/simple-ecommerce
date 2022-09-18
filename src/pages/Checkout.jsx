import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartButton from "../components/CartButton";


const Checkout = () => {
    const cartData = useSelector(state => state.cartReducer);
    const { products } = useSelector(state => state.productReducer);
    const prdIds = Object.keys(cartData);
    const quantities = Object.values(cartData);

    const getProductInfo = (productId) => {
        return products.find(p => p._id === productId)
    }
    return (<Container>
        {prdIds.length ?
            <> 
            {prdIds.map((productId) => (
                <Row key={productId} style={{ paddingTop: '10px' }}>
                    <Col>{getProductInfo(productId).name}</Col>
                    <Col><CartButton productId={productId} /> </Col>
                </Row>
            ))}
                <Button>CONFIRM CHECKOUT</Button>
            </>
            : <h2>NO DATA AVAILABLE</h2>

        }
    </Container>
    )

}
export default Checkout;