import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Link} from 'react-router-dom';
import MiddleComponent from './MiddleComponent';

//https://coolors.co/5c0029-3d3b8e-bad9b5-dce0d9-a29c9b
const Logo = (props) => {

  return <>
            <Link style={{textDecoration: 'none'}} to='/' >
                <MiddleComponent style={{
                    textAlign: 'center', 
                    fontWeight : 'bold',
                    fontFamily: 'sans-serif',
                    color: '#5C0029',
                    height:200, 
                    alignContent: 'center',
                    fontSize: 60}} middleRowStyle={{justifyContent: 'center'}}>
                    Version-API
                </MiddleComponent>
            </Link>
      </>;
}

export default Logo;