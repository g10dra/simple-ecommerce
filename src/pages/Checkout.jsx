import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import CartButton from "../components/CartButton";
import NetworkService from "../services/NetworkService";


const Checkout = () => {
    const cartData = useSelector(state => state.cartReducer);
    const { products } = useSelector(state => state.productReducer);
    const prdIds = Object.keys(cartData);
    let navigate = useNavigate();
    const getProductInfo = (productId) => {
        return products.find(p => p._id === productId)
    }
    const {userInfo} = useSelector(state => state.loginReducer);
    
    const placeOrder = () => {

        if(userInfo._id){

            const orderItems = [];
            let subTotal = 0;
            const taxRate=10;
            const shippingPrice=500;
            prdIds.forEach(prdId=>{
                const prdInfo=getProductInfo(prdId);
                orderItems.push({
                    "product":prdId,
                    "name":prdInfo.name,
                    "quantity":cartData[prdId], 
                    "price":prdInfo?.price,
                    "image":prdInfo?.image || "sample1"
                });
                subTotal+=prdInfo?.price*cartData[prdId];
            })
            const orderPayload = {
                shippingInfo:{
                  address:"B 01",
                  city:"Pune",
                  state:"Maharashtra",
                  country:"India",
                  pinCode:"400001",
                  phoneNo:"9876543210"
                },
                orderItems,
                itemPrice:subTotal,
                taxPrice:(subTotal*taxRate)/100,
                shippingPrice:shippingPrice,
                totalPrice:subTotal+((subTotal*taxRate)/100)+shippingPrice,
                paymentInfo:{
                    id:"order1",
                    status:"successed"
                }
            
            }


            NetworkService.post("order/new",orderPayload)
            .then(({data}) => {
               console.log(data)
            })


        }else{
             window.alert("Please login first before place any order");
            navigate("/login");
        }
       

    }

    return (<Container>
        {prdIds.length ?
            <> 
            {prdIds.map((productId) => (
                <Row key={productId} style={{ paddingTop: '10px' }}>
                    <Col>{getProductInfo(productId).name}</Col>
                    <Col>{getProductInfo(productId).price}</Col>
                    <Col><CartButton productId={productId} /></Col>
                </Row>
            ))}
                <Button onClick={placeOrder}>CONFIRM CHECKOUT</Button>
            </>
            : <h2>NO DATA AVAILABLE</h2>

        }
    </Container>
    )

}
export default Checkout;