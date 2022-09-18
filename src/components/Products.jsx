import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productActions";
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import CartButton from "./CartButton";
const Products = () => {

    const dispatch = useDispatch();
    const { products, searchTerm } = useSelector((state) => state.productReducer);
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const data = searchTerm ? products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())) : products;


    return (<>
        {data.length &&
            (<Row style={{ paddingTop: '10px' }}>
                {data.map(prd => (
                    <Col key={prd._id} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://picsum.photos/100" />
                            <Card.Body>
                                <Card.Title>{prd.name}</Card.Title>
                                <Card.Text>
                                    {prd.description}
                                </Card.Text>
                                <CartButton productId={prd._id} />
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>)}
    </>
    )

}
export default Products;