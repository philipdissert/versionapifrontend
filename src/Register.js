import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import React from 'react';
import Logo from './Logo';
import MiddleComponent from './MiddleComponent';
import {Link} from 'react-router-dom';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b

//TODO use color constants 

const Register = (props) => {
    return <div>
        <Logo/>
        <MiddleComponent>
            Username
        </MiddleComponent>
        <MiddleComponent>
            <InputGroup size="lg">
            <FormControl
                placeholder="Username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"/>
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
                aria-describedby="basic-addon2"/>
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
                aria-describedby="basic-addon2"/>
            </InputGroup>
        </MiddleComponent>
        <MiddleComponent style={{height: 150, alignContent:'center'}} middleRowStyle={{justifyContent:'center'}}>
              <Link to="/register">
                <Button style={{backgroundColor: "#3D3B8E", borderColor: "#3D3B8E"}} onclick={props.onRegisterClick}>Register</Button>
              </Link>
          </MiddleComponent>  
      </div>;
}

export default Register;