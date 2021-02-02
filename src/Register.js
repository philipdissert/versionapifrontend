import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import Logo from './Logo';
import MiddleComponent from './MiddleComponent';
import {Link} from 'react-router-dom';
import './index.css';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b

//TODO use color constants 

function Register() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const validateForm = () => {
        return true;
        //return email.length > 0 && password.length > 0 && secondPassword.length > 0 && password === secondPassword;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
    return <div>
                <Logo/>
                <MiddleComponent>
                    Username
                </MiddleComponent>
                <MiddleComponent>
                    <InputGroup size="lg">
                    <FormControl
                        placeholder="Email"
                        aria-label="Recipient's email"
                        aria-describedby="basic-addon2"
                        type="email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                        />
                    </InputGroup>
                </MiddleComponent>        
                <MiddleComponent>
                    Password
                </MiddleComponent>
                <MiddleComponent>
                    <InputGroup size="lg">
                    <FormControl
                        placeholder="**************"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value)}
                        />                
                    </InputGroup>
                </MiddleComponent>
                <MiddleComponent>
                    Repeat password
                </MiddleComponent>
                <MiddleComponent>
                    <InputGroup size="lg">
                    <FormControl
                        placeholder="**************"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        type="password"
                        value={secondPassword}
                        onChange={ e => setSecondPassword(e.target.value)}
                        />
                    </InputGroup>
                </MiddleComponent>
                <MiddleComponent style={{height: 150, alignContent:'center'}} middleRowStyle={{justifyContent:'center'}}>
                    <form onSubmit={handleSubmit}>                
                        <Button disabled={!validateForm()} type="submit">Register</Button>
                    </form>
                </MiddleComponent>
          </div>;
    }
}

export default Register;