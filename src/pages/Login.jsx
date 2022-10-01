import { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginActions";
const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginInfo = useSelector(state => state.loginReducer);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const changeHandler = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })

    }


    const formHandler = () => {
        setError('')
        const { email, password } = formData;
        if (email !== "" && password !== "") {
            dispatch(loginUser(formData))
        } else {
            setError('Please input email and password!')
        }
    }
    useEffect(()=>{
         if (loginInfo.userInfo._id) {
        navigate('/')
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loginInfo])
   

    return (<Container>


        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={changeHandler} value={formData.email} placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={changeHandler} value={formData.password} placeholder="Password" />
        </Form.Group>

        <Button variant="primary" onClick={formHandler} type="button">
            Login
        </Button>
        <Link to={"/register"}>Not a user? register Now</Link>

        loginInfo

        {(error !== "" || loginInfo.loginError !== "") && <Alert variant={"danger"}>
            {error || loginInfo.loginError}
        </Alert>}

    </Container>
    )

}
export default Login;
