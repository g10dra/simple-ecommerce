import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NetworkService from "../services/NetworkService";
const Register = () => {
const inputRef = useRef();
let navigate = useNavigate();
useEffect(()=>{
    inputRef.current.focus();
},[inputRef])

const [formData,setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
});
const [error,setError] = useState('');

const changeHandler=(e)=>{

    setFormData({
        ...formData,
        [e.target.name]:e.target.value,
    })

}

const formHandler = () => {
    
    setError('')
    const {name,email,password,confirmPassword} = formData;
    if(name!=="" && email !=="" && password !=="" && confirmPassword!==""){
        if(password === confirmPassword){

            NetworkService.post("register",{name,email,password})
            .then(({data}) => {
               if(data.success){
                window.alert("User Registered Successfully")
                navigate("/login")
               }
            }).catch((err)=>{
                 //console.log(err.response.data)
                setError(err.response.data.message)
                
            });

        }else{
            setError('Both Password are not same!')
        }
    }else{

        setError('Incomplete Form Error!')

    }


}

    return (<Container>

        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={inputRef} name="name" onChange={changeHandler} value={formData.name} type="text" placeholder="Enter name" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" onChange={changeHandler} value={formData.email} placeholder="Enter email" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={changeHandler} value={formData.password} placeholder="Password" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" name="confirmPassword" onChange={changeHandler} value={formData.confirmPassword} placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" onClick={formHandler} type="button">
            Register
        </Button>
        <Link to={"/login"}>Already user? Login Now</Link>

        { error!=="" && <Alert variant={"danger"}>
          {error}
        </Alert>}

    </Container>
    )

}
export default Register;
