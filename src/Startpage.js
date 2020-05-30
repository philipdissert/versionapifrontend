import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import React from 'react';
import Logo from './Logo';
import MiddleComponent from './MiddleComponent';

import {Link} from 'react-router-dom';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b
const Startpage = (props) => {
  

  return <>
          <Logo/>
          <MiddleComponent>
              <InputGroup size="lg">
                <FormControl
                  placeholder="Software Name"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />              
              </InputGroup>
          </MiddleComponent>
          <MiddleComponent style={{height: 200, alignContent:'center'}} middleRowStyle={{justifyContent:'center'}}>
              <Link to="/register">
                <Button style={{backgroundColor: "#3D3B8E", borderColor: "#3D3B8E"}} onclick={props.onRegisterClick}>Register now</Button>
              </Link>
          </MiddleComponent>           
      </>;
}

export default Startpage;