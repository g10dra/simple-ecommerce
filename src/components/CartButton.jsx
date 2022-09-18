import { increase,decrease } from "../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";

const CartButton = ({productId}) => {

    const cartData = useSelector(state=>state.cartReducer);
    const productID=Object.keys(cartData).find(prdId=>prdId===productId);
    const quantity = cartData[productID] || 0;

    const dispatch = useDispatch();  
    
    return (<div style={{maxWidth:'200px'}}>
        {
            quantity===0 ? <Button variant="primary" onClick={e => dispatch(increase(productId))}><BsFillCartCheckFill /> Add</Button> : (
                <InputGroup className="mb-3">
                    <Button variant="outline-secondary" onClick={e => dispatch(decrease(productId))}>
                        -
                    </Button>
                    <Form.Control value={quantity} readOnly />
                    <Button variant="outline-secondary" onClick={e => dispatch(increase(productId))}>
                        +
                    </Button>
                </InputGroup>
            )
        }

    </div>

    )

}
export default CartButton;

